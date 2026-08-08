import BackgroundVideo from "./BackgroundVideo";

const CardImage = ({ imgSrc, imgWidth, imgHeight, imgAlt }) => {
 return(
     <div className="card-image card-lg-width-half card-sm-width-full flex-fill">
         <BackgroundVideo/>
         <img className="img-fluid" src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt}/>
    </div>);
}

export default CardImage;