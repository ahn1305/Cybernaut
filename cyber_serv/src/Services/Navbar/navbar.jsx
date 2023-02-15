import './navbar.css'
import { useState } from 'react';
import Courses from '../Courses/course';
import { Link } from 'react-router-dom';
export default function Navbar(){
    const[show,watch]=useState([true,true,true,true]);
    const tog=(i)=>{
        const newShow=new Array(4)
        if(show[i]===true && show.includes(false) ){
            newShow.fill(true)
        }else{
            newShow.fill(false)
            newShow[i]=true
        }
        watch(newShow)
    }
    return(
        <div>
        <div className="bar">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/Services#tech_pack" className="nav-link" onClick={()=>tog(0)}>
                        Tech Pack
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Services#non_tech_pack" className="nav-link" onClick={()=>tog(1)}>
                    non tech pack
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Services#Junior_pack" className="nav-link" onClick={()=>tog(2)}>
                        Junior Pack
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Services#Design_pack" className="nav-link" onClick={()=>tog(3)}> 
                        designing pack
                    </Link>
                </li>
            </ul>
        </div>
        <Courses arr={show}/>
        </div>
    )
}
