import './card.css'
import c_img from './card_pics'
import { Link } from 'react-router-dom';
export default function Card(props){
    var {id,name,price}=props;
    var k='Design_pack'
    return(
        
        <div className="col-lg-4 col-sm-6">
            <Link to={"/Services/"+id} style={ {textDecoration: 'none'}}>
            <div className="card lop">
                <img src={c_img[k]} alt="c++" className="card-img"/>
                <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                            <div className="sub">
                                <h6 className="card-subtitle">30+Hrs Live session</h6>
                                <h6 className="card-subtitle">Tamil | English</h6>
                            </div>
                            <span className="price">₹{price}</span>
                </div>
            </div>
            </Link>
        </div>
        
    )
}