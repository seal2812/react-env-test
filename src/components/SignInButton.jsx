import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig"; 
import Button from "react-bootstrap/Button";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return ( 
            <Button className="bg-primary-dark" as="button" onClick={() => handleLogin("redirect")}>Login in with Azure AD</Button> 
    )
}