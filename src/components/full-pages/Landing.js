import Card from "../modular-components/Card";
import BackgroundVideo from "../modular-components/BackgroundVideo";

const Landing = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="splash">
                    <BackgroundVideo/>
                    <div>
                        <p className="splash-text-big">Master your Dice, Master the Battlefield.</p>
                        <p className="splash-text-small">Tabletop Tinkerer is the powerful new Warhammer 40k
                            calculator that can help you predict a battle's
                            outcome with ease.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <Card
                    title="See the odds before you roll"
                    text="Games like 40k can be won or lost based on a single decision.
                    With that, understanding when the odds are in your favor
                    and when they aren't is critical in determining whether
                    a move is worth it."
                    imgSrc="./assets/model-images/lead-angel.png"
                    imgAlt="Lead Dark Angel Model"
                    imgWidth="2561"
                    imgHeight="2561"
                />
                <Card
                    title="How it works:"
                    text="Simply enter the necessary stats and abilities of the attacking and
                defending units—or select them from our Wahapedia powered database—
                and watch as the entire attack sequence is broken down into probabilities."
                    imgSrc="./assets/model-images/angel-marine.png"
                    imgAlt="Dark Angel Marine Model"
                    imgWidth="3024"
                    imgHeight="3024"
                    imgFirst={true}
                />
                <Card
                    text="Quick mental math or memorization skills shouldn't determine if you win.
                    Your gameplay decisions should be educated, not shots in the dark."
                    boldText="Try tabletop tinkerer today."
                    imgSrc="./assets/model-images/jump-captain.png"
                    imgAlt="Dark Angel Jump Captain Model"
                    imgWidth="2611"
                    imgHeight="2611"
                />
            </div>
        </>
    )
}

export default Landing;