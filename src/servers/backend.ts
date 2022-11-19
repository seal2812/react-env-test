import { ImageType } from "../enums/types"; 
import { Image } from "../models/Models";  
import { Mapper } from "../mapper/Mapper"; 

const baseurl = "https://verificationtool-api-dev.azure.dsb.dk";   
// const baseurl = "https://localhost:44313";   
 
export class Backend {
 
    // This function will get images from the backend.
    public async GetImagesAsync(): Promise<Image[] | null> {
 
        const resourceUri = '/api/images?numberOfImages=12';
        const modeCors = 'cors'; 
        const response = await fetch(baseurl + resourceUri, { mode: modeCors}) 
        .then(res => res.json())
        .then(res => { return res as Image[] })
        .catch(error => {

            // TODO: log this!

            return null;
        })
 
        return response;
    } 

    // This function will send a POST request to the backend and verify if the image has graffiti on it or not.
    public async FeedbackImageAsync(_imageName: any, _imageType: ImageType, _userName: any): Promise<void> {
         
        const model = new Mapper().MapFeedbackVM({ _imageName, _imageType, _userName });  
        const resourceUri = '/api/images/verify';
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({imageName: model.imageName,
                              hasGraffiti: model.hasGraffiti,
                              isTrain: model.isTrain,
                              userName: model.userName})
        };

        await fetch(baseurl + resourceUri, requestOptions);
    } 
        
    // This function will send a POST request to the backend and verify if the image has graffiti on it or not.
    public async ReportToSapAsync(_model: Image, _username : string): Promise<void> {
        
        if(_model.sourceMatch === false){
            return;
        }

        const model = new Mapper().MapSapVM(_model,_username);    
        const resourceUri = '/api/sap/send';
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({imageName:model.imageName, 
                              userName:model.userName, 
                              trainType:model.trainType, 
                              litraNumber:model.litraNumber, 
                              wagonNumber:model.wagonNumber, 
                              wagonSide:model.wagonSide,
                              reportType: model.reportType})
        };

        await fetch(baseurl + resourceUri, requestOptions);
    }  
}