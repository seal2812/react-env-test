import { NavbarComponent } from "../../components/Navbar"
import {LitraOverview} from "../../components/LitraOverview" 
import "../../styles/navbar.css";

export default function SapOverview() {
    return (
      <div>
          <div className="header">
            <NavbarComponent/>
          </div>
          <div className="body"> 
          <div className="content">
            <div className="container"> 
               
            <div className="page"> 
                <div className="page-title">
                  <h4>Litra overview</h4>   
                  <p>
                   These are the litras that have been matched to pictures of detected graffiti. 
                   <br/>
                   <b>Select litra</b> for final verification and <b>SAP reporting</b>
                  </p> 
                  </div> 
                  <div className="page-options"> 
                  </div>  
              </div> 
              <div className="">   
                <LitraOverview /> 
              </div>
            </div>
          </div>
          </div>
      </div>
    );
} 