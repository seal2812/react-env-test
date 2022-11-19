import { Button, Row, Col } from "react-bootstrap";
import "../../styles/main.css";
import "./ImageSapOverview.css";
import LazyLoad from "react-lazyload";
import { useState, useEffect } from "react";
import ImageSapPlaceholder from "./ImageSapPlaceholder";
import { useMsal } from "@azure/msal-react";
import { Backend } from "../../servers/backend";
import { Image } from "../../models/Models";
import { NoImagesLoading } from "../NoImagesLoading";
import { NoImagesError } from "../NoImagesError";
import { NoImagesAvailable } from "../NoImagesAvailable";

export function ImageSapOverview() {
	const { accounts } = useMsal();
	const username = accounts[0] && accounts[0].username;
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isEmpty, setIsEmpty] = useState(false);
	const [images, setImages] = useState<Image[]>([]);
	const backend = new Backend();

	async function LoadImages(): Promise<void> {
		var images = await backend.GetImagesAsync();
		if (images === null) {
			setIsError(true);
		} else if (images.length === 0) {
			setIsEmpty(true);
		} else {
			setImages(images);
		}

		setIsLoading(false);
	}

	function confirmDialog(msg: string) {
		return new Promise((resolve, reject) => {
			let confirmed = window.confirm(msg);

			return confirmed ? resolve(true) : reject(false);
		});
	}

	async function handleImage(image: Image): Promise<void> {
		// remove object from the view
		setImages((oldState) => oldState.filter((item) => item.name !== image.name));
		// send to SAP
		await backend.ReportToSapAsync(image, username);
		// load new images if no more left
		if (images.length <= 4) {
			await LoadImages();
		}
	}

	useEffect(() => {
		LoadImages();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (isError) {
		return <NoImagesError />;
	} else if (isLoading) {
		return <NoImagesLoading className="report-to-sap-gallery" />;
	} else if (isEmpty) {
		return <NoImagesAvailable />;
	} else {
		return (
			<Row className="report-to-sap-gallery">
				{images.map((item) => (
					<Col sm={6} lg={4} xl={4}>
						<LazyLoad height={200} offset={[-200, 0]} placeholder={<ImageSapPlaceholder />} debounce={500}>
							<div className="card">
								<div className="card-body">
									<img alt="" src={item.url} className="picture" />
									<div className="card-body-caption">
										<div className="caption-txt">
											<Row>
												<Col sm={6}>
													<div className="txt">Probability graffiti: {item.probabilityGraffiti}%</div>
													<div className="txt">Track: {item.sourceMeta.track}</div>
													<div className="txt">Wagon side: {item.sourceMeta.wagonSide}</div>
													<div className="txt">Start station: {item.sourceMeta.startStation}</div>
													<div className="txt">End station: {item.sourceMeta.destinationStation}</div>
												</Col>
												<Col sm={6}>
													<div>
														<div className="txt">Train line: {item.sourceMeta.lineId}</div>
														<div className="txt">Train number: {item.sourceMeta.trainNo}</div>
														<div className="txt">Train litra number: {item.sourceMeta.litraNumber}</div>
														<div className="txt">Train type: {item.sourceMeta.trainType}</div>
														<div className="txt">Train wagon number: {item.sourceMeta.wagonNumber}</div>
													</div>
												</Col>
											</Row>
										</div>
										<div className="caption-buttons">
											{item.sourceMatch && item.sourceMeta.litraMatch ? (
												<Button
													className="btn btn-sm"
													variant="success"
													onClick={async () =>
														confirmDialog("Report to SAP").then(
															async () => await handleImage(item).catch(() => console.log("SAP report canceled"))
														)
													}
												>
													Match - report to SAP
												</Button>
											) : (
												<div></div>
											)}
										</div>
									</div>
								</div>
							</div>
						</LazyLoad>
					</Col>
				))}
			</Row>
		);
	}
}
