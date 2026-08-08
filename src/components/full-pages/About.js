import Card from "../modular-components/Card";

const About = () => (
    <Card className="text-small"
    text={<>
        This is the first web development project I've ever worked on.
        It is a mockup page for a Warhammer 40k calculator; a tool
        that would help a player understand the probabilities behind
        their different decisions when playing the game.
        It is build using React for the front end and Node for the back,
        with a fully functioning user account system on top of the modularly
        designed and fully responsive site visuals. This account system
        isn't present in the version
        you're on as it is being hosted via Github Pages, and so
        doesn't have an actual server or database running in the background.
        Despite this, code for the backend can be found in the repository.</>
    }/>
);

export default About;




