import { Row, Col } from 'react-bootstrap'; 

export default function ImageSapPlaceholder() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="picture">
          <div className="placeholder">
            <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          </div>
        </div> 

        <div className="card-body-caption">
            <div className="caption-txt blur-txt"> 
              <Row >      
                  <Col sm={6} >     
                  <div className="txt">Probability graffiti: 99.1%</div>
                  <div className="txt">Track: kh_10</div>
                  <div className="txt">Wagon side: Landside</div>
                  <div className="txt">Start station: Høje Tåstrup</div>
                  <div className="txt">End station: Farum</div>
                  </Col>   
                  <Col sm={6} >     
                  <div className="txt">Train line: 12</div>
                  <div className="txt">Trainnumber: 2</div>
                  <div className="txt">Train litranumber: 33333</div>
                  <div className="txt">Traintype: 111</div>
                  <div className="txt">Wagonnumber: 111</div>
                  </Col>  
              </Row>
            </div>   
        </div>
      </div>
    </div>
  );
}
