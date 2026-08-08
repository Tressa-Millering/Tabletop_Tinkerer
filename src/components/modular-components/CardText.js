
const CardText = ({title, text, boldText, ...props}) => (
    <div className={`card-text card-large-width-half card-sm-width-full flex-fill ${props.className || ""}`}>
        <p className="text-header">
            <u><b>{title}</b></u>
        </p>
        <p>
            {text}
        </p>
        <p>
            <b>{boldText}</b>
        </p>
    </div>
)

export default CardText;