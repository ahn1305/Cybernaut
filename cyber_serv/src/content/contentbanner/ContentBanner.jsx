import './ContentBanner.css'
import imge from './contentImg.js'
export default function ContentBanner(props){
    return(
        <div>
            <img src={imge[props.name]} className="cont_img" alt="hhhhhhhhhhhhhhh"/>
        </div>
    )
}