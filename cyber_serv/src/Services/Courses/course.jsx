import Pack from "./packs/pack"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
export default function Courses(props){
    const pack=["tech_pack","non_tech_pack","Junior_pack","Design_pack"]
        var at= props.arr

    return(
        <div>
            {pack.map((i,index)=> (
            <Pack key={index} name={i} disp={at[index]}/>
            ))}
       
        </div>
    )
}