import SmokeyBG from "../../assets/backgrounds/smokey-bg.mp4"
const BackgroundVideo = () => (
        <video src={SmokeyBG}
               autoPlay loop muted playsInline className="smokey-bg"/>
    )


export default BackgroundVideo;
