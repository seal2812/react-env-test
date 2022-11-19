import Button from "react-bootstrap/Button";

export default function ImageFeedbackPlaceholder() {
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
          <div className="caption-txt blur-txt">Probability graffiti: 0%</div>
          <div className="caption-buttons">
            <Button className="btn btn-sm blur-txt" variant="danger">
              Graffiti
            </Button>
            <Button className="btn btn-sm blur-txt" variant="secondary transparent">
              No Train
            </Button>
            <Button className="btn btn-sm blur-txt " variant="success">
              No Graffiti
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
