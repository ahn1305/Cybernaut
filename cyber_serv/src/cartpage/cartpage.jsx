import './cartpage.css'
import ccc from '../Services/Courses/card/assets/Figma.png'
import { useEffect, useState } from 'react'
export default function Cartpage(){
    // const addedlist =[{
    //     "id":"figma",
    //     "name":"Figma",
    //     "price":"799"
    //    },{
    //     "id":"adobePremiere",
    //     "name":"Adobe Premiere Pro",
    //     "price":"799"
    //    }];
// const [cart,updatecart] = useState(addedlist);
// const [added,change]= useState(false)
// console.log(cart.length)
// useEffect(()=>{
//         if(cart.length!=0){
//             change(true)
//         }
//     }
// )
return <div>
    jiiiiiiiiiiiiii
</div>

return <div className='addtocart'>
        <div>hh</div>
        <div className='cart'>
            <div className='addedcourse'>
                <h4 >
                    My courses!
                </h4>
                {added?
                     <div className='courseList' >
                {cart.map((i,index)=>(
                     <div className="col-11 mx-auto my-3"key={index}>
 
                         <div className="card lop">
                             <img src={ccc} alt="c++" className="card-img"/>
                             <div className="card-body">
                                 <h5 className="card-title">{i.name}</h5>
                                 <div className="sub">
                                     <h6 className="card-subtitle">30+Hrs Live session</h6>
                                     <h6 className="card-subtitle">Tamil | English</h6>
                                 </div>
                                 <span className="price">₹{i.price}</span>
                             </div>
                         </div>
 
                     </div>
                ))}
                 </div>
                 :"No items added"}
                {/* <div className='courseList'>
                    <div className="col-11 mx-auto my-3">

                        <div className="card lop">
                            <img src={ccc} alt="c++" className="card-img"/>
                            <div className="card-body">
                                <h5 className="card-title">Figma</h5>
                                <div className="sub">
                                    <h6 className="card-subtitle">30+Hrs Live session</h6>
                                    <h6 className="card-subtitle">Tamil | English</h6>
                                </div>
                                <span className="price">₹222</span>
                            </div>
                        </div>

                    </div>
                </div> */}

                          {/* <Link to={"/Services/"+id} style={ {textDecoration: 'none'}}> */}
                                    {/* </Link> */}
            </div>
            <button className='checkout'>Check out</button>
        </div>
    </div>
    
}