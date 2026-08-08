import SmokeyBG from "../../assets/backgrounds/smokey-bg.mp4"
const BackgroundVideo = () => (
        <video src={SmokeyBG}
               autoPlay loop muted playsInline preload="auto" className="smokey-bg"/>
    )


export default BackgroundVideo;
