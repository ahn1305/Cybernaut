import Con from '../content.json'
import './contenthead.css'
export default function Contenthead(props){
    return(
        <div id="title" className="card-body">
                <div className="headtitle">{Con[props.name].headtitle}</div>
                <div className="subtitle">By Team Cybernaut</div>
        </div>
        
    )
}