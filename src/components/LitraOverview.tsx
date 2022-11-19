import "../styles/main.css";  
import "../styles/SAP.css";

export const LitraOverview = () => { 
    
    return (    
            <div className="litraOverview">              
                <div className="scrollWrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Litra</th>
                                <th>Train No.</th>
                                <th>Photos</th>
                                <th>Full Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>insertDate</td>
                                <td>insertLitra</td>
                                <td>1000</td>
                                <td>0</td>
                                <button className="inspectButton"><span>Inspect </span></button>
                            </tr>
                            <tr>
                                <td>00-00-00</td>
                                <td>insertLitra</td>
                                <td>2000</td>
                                <td>0</td>
                                <button className="inspectButton"><span>Inspect </span></button>
                            </tr>
                        </tbody>
                    </table>
                </div>  
            </div>
    ); 
} 
