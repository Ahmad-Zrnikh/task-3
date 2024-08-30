import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./VideoView.css"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import Rectangular from "./Rectangular"
export default function VideoView() {
  return (
    <div className="videoView">
<div className="textVideo">
    <div className="specialText">VIDEO VIEW</div>
    <h1>Get Closer View</h1>
    <h1>&Different</h1>
    <h1>Feeling</h1>
</div>
<div className="video">
<FontAwesomeIcon icon={faCirclePlay} className="play"/>
<img src="/images/images/video-frame.jpg" alt="" className="poster">
</img>

</div>

    </div>
  )
}
