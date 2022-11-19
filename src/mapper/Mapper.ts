import { ImageType } from "../enums/types"; 
import { FeedbackImageInput, ReportToSapInput } from "../models/ViewModels"; 
import { Image } from "../models/Models"; 

export class Mapper {
    
    public MapFeedbackVM({ _imageName, _imageType, _userName }: { _imageName: any; _imageType: ImageType; _userName: any; }) : FeedbackImageInput
    {
        let model: FeedbackImageInput = {imageName:_imageName, hasGraffiti:false, isTrain:false, userName:_userName}

        if(_imageType === ImageType.Graffiti){
            model.hasGraffiti = true;
            model.isTrain=true;
        }
        if(_imageType === ImageType.Graffiti_NO){
            model.hasGraffiti = false;
            model.isTrain=true;
        }
        if(_imageType === ImageType.Graffiti_NOTRAIN){
            model.hasGraffiti = false;
            model.isTrain=false;
        }   

        return model;
    }


    public MapSapVM(_model : Image, _username : string) : ReportToSapInput
    {
        const model: ReportToSapInput = {
        imageName:_model.name, 
        userName:_username, 
        trainType:_model.sourceMeta.trainType, 
        litraNumber:_model.sourceMeta.litraNumber, 
        wagonNumber:_model.sourceMeta.wagonNumber, 
        wagonSide:_model.sourceMeta.wagonSide,
        reportType: "Manual"};

        return model;
    }
}