import content from './content.json'
import ContentBanner from './contentbanner/ContentBanner';
import Contenthead from './contenthead/contenthead';
import ContentPrice from './contentPrice/ContentPrice';
import ContentDetails from './Contentdetails/Contentdetails';
import { useParams } from 'react-router-dom';
import { Route, Routes ,Link} from 'react-router-dom';
import Cartpage1 from '../cartpage/Cartpage1';
export default function Content(){
    const p = useParams()
var id = p.id;

function opencart(){
    console.log("clicked")
}

// console.log(content[id])
// console.log(id)
return(
    <>
    <ContentBanner name={id} />
    <Contenthead name={id}/>
    <ContentPrice />
    <ContentDetails name={id}/>

    <Link to={"/cart"} className="nav-link"><button onClick={opencart()}>cart</button></Link>
    </>    
)
}