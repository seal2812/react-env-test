import { Row, Col } from 'react-bootstrap'; 

export function NoImagesAvailable() {
    return (
        <Row>
            <Col lg={12}>
                <div className="noImagesAvailable">No more images available to verify.<br></br>Please try again later.</div>
            </Col>
        </Row>
    )
}