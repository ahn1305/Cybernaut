import { useEffect } from 'react';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';

export default function Members(){
    var a = require('./images/Nikhita-1 11.png');
    useEffect(()=>{
        var ml=document.querySelectorAll('#movle')
            var mr=document.querySelectorAll('#movri')
            var card_slide=document.querySelectorAll('#mem')

            ml.forEach((e,index)=>{e.onclick = function(){
                const width = document.querySelector(".member").offsetWidth;
            card_slide[index].scrollLeft-=width;
            }
        });
        mr.forEach((e,index)=>{e.onclick = function(){
                const width = document.querySelector(".member").offsetWidth;
            card_slide[index].scrollLeft+=width;
            }
        }); 
    })



    return (
        <div>
            <div className="container-fluid py-2" id="core_team">
                <div id="team_head">
                    <div id="d1">Core Team<div><span></span></div></div>
                    <div class="right">
                        <span id="movle"></span>  
                        <span id="movri"></span>
                    </div>
                </div>
                <div id="mem" className="container">
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-2" id="off_team">
                <div id="team_head">
                    <div class="right">
                        <span id="movle"></span>  
                        <span id="movri"></span>
                    </div>
                    <div id="d1"><div style={{transform:"rotate(180deg)"}}><span ></span></div>Official Team</div>
                </div>
                <div id="mem" className="container">
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                    <div class="member">
                        <img src={a} alt="member"/>
                            <div class="name my-3">
                                <h1>Nikitha </h1>
                                <p>Seceratary</p>
                                <span></span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}