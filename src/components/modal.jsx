const Modal = ({
    clickedImage,
    handleRotationRight,
    handleRotationLeft,
    setClickedImage 
}) => {

    const handleClick = (e) => {
        const isDismiss = e.target.classList.contains("dismiss");
        
        if(isDismiss){
            setClickedImage(null);
        }
    };


    return <> 
        <div className="overlay dismiss" onClick={handleClick}>
            <img src={clickedImage} alt="bigger picture"/>
            <span className="dismiss" onClick={handleClick}>X</span>
            <div className="overlay-arrows_left" onClick={handleRotationLeft}> left </div>
            <div className="overlay-arrows_right" onClick={handleRotationRight}> right </div>
        </div>
    </>;
    
};

export default Modal;