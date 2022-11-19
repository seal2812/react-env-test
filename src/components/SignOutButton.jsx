import { useMsal } from "@azure/msal-react";  
import {NavDropdown} from "react-bootstrap"; 

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }
    return (
        <NavDropdown.Item onClick={() => handleLogout("redirect")}>Log out</NavDropdown.Item> 
    )
} 