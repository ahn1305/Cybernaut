import { useState } from 'react';
import Card from '../card/card';
import cd from '../course_det.json'
import './pack.css'
export default function Pack(props){
    var name = props.name;
    var disp= props.disp;
    // console.log("pack=======>"+disp)
   
    return(
        disp?
        <div id={name} className="container">
            <div className="head">
                {cd[name].head}
            </div>
            <div className="row">
                {cd[name].courses.map((i,index)=>(<Card key={index} id={i.id} name={i.name} price={i.price}/>))}
            </div>
        </div>
        :null
    )
}