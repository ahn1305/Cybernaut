import Header from "../header/header"
import Banner from "./Banner/Banner"
import Courses from "./Courses/course.jsx"  
import Navbar from "./Navbar/navbar"
import {Link } from 'react-router-dom';
export default function Services(){
    return (
        <div>
        {/* <Link to={"/Services"} style={ {textDecoration: 'none'}}> */}
            <Banner/>
            <Navbar/>
        {/* </Link> */}
        </div>
    )
}