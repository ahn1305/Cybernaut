import { useEffect } from 'react';
import './Aboutus.css'
export default function VisionMission(){
    var a = require('./images/Vector 149.png')
    useEffect(()=>{
        mov(0)
})
    function mov(n){
        var t = document.getElementsByClassName("fades");
        var p = document.getElementById("pg2");
        const pic =[require('./images/Bg_1.png'),require('./images//vision.png'),require('./images/Mission.png')]
        for(let i=0;i<t.length;i++){
            t[i].style.display="none";
        }
        t[n].style.display="flex";
        p.style.backgroundImage=`url(${pic[n]})`
    }
    return(
        <div>
        <div id="pg2" className='d-none d-lg-flex'>
        <div className="pg2cir">
        <div id="changingbox">
           <a onClick={()=>mov(1)}><div className="cgbx_1"></div></a> 
           <a onClick={()=>mov(2)}><div className="cgbx_2"></div></a>
        </div>
        <div className="pg2innercir fades">
                <div id="incont" >
                    <span><p>Vision</p></span>
                    <div> <img src={a} alt=""/></div>
                    <span><p>Mission</p></span>
                    <div><img src={a} alt=""/></div>
                    <span><p>Triumph</p></span>
                </div>
            </div>
            
            
            <div className="vis fades">
                <h1>Vision</h1>
                <div id="vmcont">
                We aim to be the largest educational platform where the quality of education is improved so as to give a possibility of employment in the engineering sector. A fresher who joins is shaped in all domains be it technical, content writing, research, or designing. 
                <br/><br/>
                 We believe that being guided at the right stage helps avoid uncertainty later, being the reason we provide the right career guidance to students and assist them in exploring all possible paths on the technical side. Along with technical, they are made well aware of skills required for their placements and future careers, with plenty of training.
                </div>
            </div>
            <div className="vis fades">
                    <h1>Mission</h1>
                    <div id="vmcont">
                        Giving the opportunity to learn and excel to the people who lack the ability and facility to get quality education. Mainly, our company focuses on government students to have a technical based learning. And, also training the youngsters for placements within their respective domains. We have done teaching and training for 2000+ students in technical domains and advanced courses. We have also done teaching and training for 500+ students in non-technical domains like communication, personal development, and soft skills. 
                        <br/><br/>
Along with these skills, you can build up your knowledge and experience too. We give an internship certificate at the end of three months after joining. You can add your experiences to your resume which will help you to impress the querier.
                    </div>
                </div>
                
        </div>
    </div>
    <div className='d-sm-block d-lg-none'>
        <ul className='nav nav-tabs'> 
            <li className='nav-item' role='presentation'>
                <button className='nav-link' data-bs-toggle="tab" data-bs-target="#vision" type='button'>Vision</button>
            </li>
            <li className='nav-item' role='presentation'>
                <button className='nav-link' data-bs-toggle="tab" data-bs-target="#mission" type='button'>Mission</button>
            </li>
        </ul>
        <div className="tab-content">    
            <div id='vision' className='tab-pane fade show active'>
            <div id="">
                We aim to be the largest educational platform where the quality of education is improved so as to give a possibility of employment in the engineering sector. A fresher who joins is shaped in all domains be it technical, content writing, research, or designing. 
                <br/><br/>
                 We believe that being guided at the right stage helps avoid uncertainty later, being the reason we provide the right career guidance to students and assist them in exploring all possible paths on the technical side. Along with technical, they are made well aware of skills required for their placements and future careers, with plenty of training.
                </div>
            </div>
            <div id='mission' className='tab-pane fade'>
            <div id="">
                        Giving the opportunity to learn and excel to the people who lack the ability and facility to get quality education. Mainly, our company focuses on government students to have a technical based learning. And, also training the youngsters for placements within their respective domains. We have done teaching and training for 2000+ students in technical domains and advanced courses. We have also done teaching and training for 500+ students in non-technical domains like communication, personal development, and soft skills. 
                        <br/><br/>
Along with these skills, you can build up your knowledge and experience too. We give an internship certificate at the end of three months after joining. You can add your experiences to your resume which will help you to impress the querier.
                    </div>
            </div>
        </div>
    </div>
    </div>
    )
}