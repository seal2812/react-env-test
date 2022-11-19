import { NavbarComponent } from "../../components/Navbar"
import {LitraVerification} from "../components/LitraVerification" 
import "../../styles/navbar.css";

export default function SAPReport() {
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
                  </div> 
                  <div className="page-options"> 
                  </div>  
              </div> 
              <div className="">   
                <LitraVerification /> 
              </div>
            </div>
          </div>
          </div>
      </div>
    );
} 