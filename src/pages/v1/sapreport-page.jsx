import {ImageSapOverview} from "../../components/v1/ImageSapOverview" 
import { NavbarComponent } from "../../components/Navbar"
import "../../styles/navbar.css";

export default function SapReportPage() {
    return (
      <> 
          <div className="header">
            <NavbarComponent/>
          </div>    
          <div className="body">  
            <div className="container">  
              <div className="page"> 
                <div className="page-title">
                  <h4>Manual SAP reporting</h4>   
                  <p>
                    Manually report a case to SAP by checking if an image contains graffiti on a train.<br></br>
                    This action will only be possible if there is a match between an image and a data source, and the way it can be seen is if a green button is displayed under an image.                  </p> 
                  </div> 
                  <div className="page-options"> 
                  </div>  
              </div> 
              <div className="gallery">  
                <ImageSapOverview />
              </div>
            </div> 
          </div>
      </>
    );
} 