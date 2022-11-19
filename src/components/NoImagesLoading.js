import { Row, Col } from 'react-bootstrap'; 
import ImageSapPlaceholder from '../components/v1/ImageSapPlaceholder';

export function NoImagesLoading({ className = '' }) {

    const imagesMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <Row className={className}>{imagesMock.map((item) => { return <Col sm={6} lg={4} xl={4} key={item}><ImageSapPlaceholder /></Col>; })}</Row>
    );
}