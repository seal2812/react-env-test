import { Routes, Route } from "react-router-dom"; 
import FeedbackReportPage from "./pages/v1/feedbackreport-page";
import SapReportPage from "./pages/v1/sapreport-page";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import Login from "./pages/login2"; 
import SapOverview from "./pages/v2/sapoverview";


export default function App() {
  return (
    <div>
      <AuthenticatedTemplate>   
        <Routes> 
          <Route path="/" element={<FeedbackReportPage />} />
          <Route path="feedback-report" element={<FeedbackReportPage />} />
          <Route path="sap-report" element={<SapReportPage />} />

          {/* V2 */}
          <Route path="litra-overview" element={<SapOverview />} />

        </Routes>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login/>
      </UnauthenticatedTemplate>
    </div>
  );
}