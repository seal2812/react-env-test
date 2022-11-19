import { Row, Col } from 'react-bootstrap'; 

export function NoImagesError() {
    return (
        <Row>
            <Col lg={12}>
                <div>Something went wrong..</div>
            </Col>
        </Row>
    )
}