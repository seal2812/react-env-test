import { SignInButton } from "../components/SignInButton.jsx"; 
import "../styles/login.css";

console.log("process.env");
console.log(process.env);

console.log("process.env.NODE_ENV");
console.log(process.env.NODE_ENV);

console.log("process.env.SERKAN");
console.log(process.env.SERKAN);
console.log(process.env["SERKAN"]);

console.log("process.env.REACT_APP_SERKAN");
console.log(process.env.REACT_APP_SERKAN);
console.log(process.env["REACT_APP_SERKAN"]);
 

export default function Login() {    
    return (
        <div> 
            <div className="wrapper">
                <div className="fp-inner-box">
                    <div className="title_logo">
                        <img alt="dsb logo" src="https://upload.wikimedia.org/wikipedia/en/8/87/DSB_company_logo.svg" />
                        <h2 className="fp-title">Graffitidetection tool</h2>
                        <div className="madeby">Made by Team AI...5</div>
                    </div>
                    <SignInButton />
                </div>
            </div>
        </div>
    );    
}