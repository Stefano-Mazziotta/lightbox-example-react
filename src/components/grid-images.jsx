import React, { useState } from "react";

import data from "../data/images.json";
import Modal from "./modal"

function GridImages() {

    const [ clickedImage, setClickedImage ] = useState(null);
    const [ currentIndex, setCurrentIndex ] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImage(item.src);
    };

    const handleRotationRight = () => {
        const totalLength = data.images.length;
        const newIndex = currentIndex + 1;

        if(newIndex >= totalLength){
            setCurrentIndex(0);
            const newSrc = data.images[0].src;
            setClickedImage(newSrc);
            return;
        }        

        const newImage = data.images.filter((item) => {
            return data.images.indexOf(item) === newIndex;
        });        
        const newSrc = newImage[0].src;

        setClickedImage(newSrc);
        setCurrentIndex(newIndex);        
    }

    const handleRotationLeft = () => {
        const lastImageIndex = data.images.length - 1;
        const newIndex = currentIndex - 1;

        if(newIndex <= 0){
            setCurrentIndex(lastImageIndex);
            const newSrc = data.images[lastImageIndex].src;
            setClickedImage(newSrc);
            return;
        }

        const newImage = data.images.filter((item) => {
            return data.images.indexOf(item) === newIndex;
        });        
        const newSrc = newImage[0].src;

        setClickedImage(newSrc);
        setCurrentIndex(newIndex);  
    }

    return (
        <div className="container-grid">
        
        {data.images.map((item, index) => {
            
            return (
                <div key={index} className="wrapper-images" >
                    <div className="wrap-image">
                        <img src={item.src} alt={item.description} onClick={() => handleClick(item, index)}/>
                    </div>
                    <h2>{item.description}</h2>
                </div>
            )

        })}

        {clickedImage && (
            <Modal 
                clickedImage={clickedImage} 
                handleRotationLeft={handleRotationLeft}
                handleRotationRight={handleRotationRight}
                setClickedImage={setClickedImage}
            />
        
        )}
           
        </div>
    )
}

export default GridImages
