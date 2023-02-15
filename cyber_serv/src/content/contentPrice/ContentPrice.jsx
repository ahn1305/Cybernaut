import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ContentPrice.css'
import items from '../../cart'
export default function ContentPrice(){
    const [list, addcourse] = useState([])
    const par = useParams();
    function addtocart(){
        console.log(par.id)
        items.push(par.id)

    }
    return(
    <div className='pricedetupper d-lg-block d-sm-none d-none'>
        <span className="priceDet d-lg-block d-sm-none d-none">
            <div className='cirdet'>
                <div className="detss pt-2">
                    <h6>Duration</h6>
                    <h5>30+ Hours</h5>
                    <p>Live Interactive session with <br/> one and one doubt session</p>
                </div>
                <hr/>
                <div className="detss d_Right ext">
                    <h6>Language</h6>
                    <h5>Tamil | English</h5>
                    <p>Live Interactive session with one and one doubt session</p>
                </div>
                <hr/>
                <div className="detss">
                    <h6>Great Reviews</h6>
                    <h5>4.5/5.0</h5>
                    <p>This Course content is rated by students</p>
                </div>
                <hr/>
                <div className="detss d_Right ext">
                        <h6>Buy the Course</h6>
                        <h5>499</h5>
                    <p >The Best price for the the best education</p>
                </div>
            </div>
        </span>
            <div className="detss">
                <button type="button" className="btn btn-primary buynow" onClick={addtocart}>Buy Now</button>
            </div>
    </div>
    )
}