import CardText from "./CardText";
import CardImage from "./CardImage";

const Card = ({
        title,
        text,
        boldText,
        imgSrc,
        imgAlt,
        imgWidth,
        imgHeight,
        imgFirst,
        ...props
              }) => {
    return (
        <div className="card d-flex flex-lg-row flex-md-row flex-sm-col">
            {(imgSrc && imgAlt && imgFirst) ?
                <CardImage imgSrc={imgSrc} imgAlt={imgAlt}
                           imgWidth={imgWidth} imgHeight={imgHeight}/> :""
            }

            <CardText title={title} text={text} boldText={boldText} className={props.className||""}/>

            {(imgSrc && imgAlt && !imgFirst) ?
                <CardImage imgSrc={imgSrc} imgAlt={imgAlt}
                           imgWidth={imgWidth} imgHeight={imgHeight}/> :""
            }
        </div>

    );
}

export default Card;