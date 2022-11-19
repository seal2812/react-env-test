import {ImageFeedbackOverview} from "../../components/v1/ImageFeedbackOverview" 
import { NavbarComponent } from "../../components/Navbar"  
import "../../styles/navbar.css";

export default function FeedbackReportPage() {
    return (
      <> 
          <div className="header">
            <NavbarComponent/>
          </div>   
          <div className="body">  
            <div className="container">  
              <div className="page"> 
                <div className="page-title">
                  <h4>Teach the model</h4>   
                  <p>
                    Help the machine learning model perform better. Confirm that the images below <b>contain graffiti</b> and whether there is <b>no train</b> in the picture.
                    <br />
                    The way to go is to evaluate the pictures and then choose between the options. 
                  </p> 
                  </div> 
                  <div className="page-options"> 
                  </div>  
              </div> 
              <div className="gallery">  
                <ImageFeedbackOverview />
              </div>
            </div> 
          </div>
      </>
    );
} 