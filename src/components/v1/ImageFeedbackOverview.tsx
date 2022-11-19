import { Button, Row, Col } from 'react-bootstrap'; 
import "../../styles/main.css"; 
import LazyLoad from 'react-lazyload';
import { useState, useEffect  } from "react";  
import ImageFeedbackPlaceholder from './ImageFeedbackPlaceholder';
import { useMsal } from "@azure/msal-react"; 
import { ImageType } from "../../enums/types"; 
import { Backend } from "../../servers/backend";
import { Image } from "../../models/Models"; 

export const ImageFeedbackOverview = () => { 
   
    const { accounts } = useMsal(); 
    const username = accounts[0] && accounts[0].username;   
    const [isLoading, setIsLoading] = useState(true); 
    const [isError, setIsError] = useState(false);   
    const [isEmpty, setIsEmpty] = useState(false);   
    const [images, setImages] = useState<Image[]>([])  
    const backend = new Backend();
    const imagesMock = [1,2,3,4,5,6,7,8,9,10,11,12];

    async function LoadImages(): Promise<void>{ 
 
        var images = await backend.GetImagesAsync(); 
        if (images === null) { 
            setIsError(true)
        } 
        else if (images.length === 0) { 
            setIsEmpty(true); 
        }
        else{
            setImages(images); 
        }  

        setIsLoading(false);
    }

    async function handleImage(_imageName: any, _imageType: ImageType): Promise<void> {
   
        // remove object from the view
        setImages((oldState) => oldState.filter((item) => item.name !== _imageName));  
  
        // verify the object to the backend 
        await backend.FeedbackImageAsync(_imageName, _imageType, username);
 
        // load new images if no more left
        if (images.length <= 4){
            await LoadImages();
        }
    }

    useEffect(() => {  
        LoadImages(); 
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
      
    // ============================================================
    // ==================== RENDER VIEW ===========================
    // ============================================================ 

    if (isError) {
        return (
            <div>Something went wrong.. </div>
        )
    }
    else if (isLoading) {
        return (
            <Row>{imagesMock.map((item) => {return <Col sm={6} lg={4} xl={4} key={item} ><ImageFeedbackPlaceholder /></Col>})}</Row>
        )
    }
    else if (isEmpty) {
        return (
            <Row>
                <Col lg={12}>
                    <div className="noImagesAvailable">No more images available to verify. <br></br>Please try again later.</div>
                </Col>
            </Row>
        )
    }
    else{
        return (    
            <Row >    
                {images.map((item) =>    
                     <Col sm={6} lg={4} xl={4} >    
                        <LazyLoad height={200} offset={[-200, 0]} placeholder={<ImageFeedbackPlaceholder/>} debounce={500}> 
                            <div className="card" >
                                <div  className="card-body" >
                                    <img alt="" src={item.url} className="picture" />   
                                    <div className="card-body-caption">
                                        <div className="caption-txt">Probability graffiti: {item.probabilityGraffiti}</div>
                                        <div className="caption-buttons">   
                                            <Button className="btn btn-sm" variant="danger" onClick={async () => {await handleImage(item.name, ImageType.Graffiti);} }>Graffiti</Button>
                                            <Button className="btn btn-sm" variant="secondary transparent" onClick={async () => {await handleImage(item.name, ImageType.Graffiti_NOTRAIN);}}>No Train</Button> 
                                            <Button className="btn btn-sm" variant="success" onClick={async () => {await handleImage(item.name, ImageType.Graffiti_NO);}}>No Graffiti</Button>                                         
                                        </div>     
                                    </div>
                                </div>
                            </div> 
                        </LazyLoad> 
                    </Col>  
                    )}  
            </Row>
        ); 
    } 
}