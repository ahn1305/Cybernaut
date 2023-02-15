import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import './Aboutus.css'
export default function Milestone(){
    // const re = useRef();
    const{ref:one,inView:viewOne}=useInView({triggerOnce:true});
    const{ref:two,inView:viewTwo}=useInView({triggerOnce:true});
    const{ref:three,inView:viewThree}=useInView({triggerOnce:true});
    useEffect(()=>{
        if(viewOne){doLoad(0)}
        if(viewTwo){doLoad(1)}
        if(viewThree){doLoad(2)}

    })
    function doLoad(n){
        let index=n;
        let load =document.querySelectorAll(".load_circle")
        let val = document.querySelectorAll('.val')
        let percentage= [30,60,86];
        let value =[30,50,800];
        let load_start=0,load_end=percentage[index],load_val=0;
        let progress=setInterval(()=>{
            load_start++;
            let ko = parseInt(load_start*(value[index]/load_end));
            val[index].textContent=`${ko}+`;
            load[index].style.background = `conic-gradient(from 180deg, #4089F3 ${load_start*3.6}deg,white 0deg)`;
            if(load_start===load_end){
                clearInterval(progress)
            }
    },30)
    }


    return(
        <div className="container">
            <div id="d1">Milestones <div><span></span></div></div>
            <div id="d2" className='my-2'>Cybernaut has achieved a lot in the past year and has crossed a lot of milestones.  </div>
            <div className="row  ">
                <div className='load_card load col-lg-3 my-2 mx-auto' ref={one}>
                    <div className="upper">
                        <div><span className="load_circle d-flex mx-auto">
                            <span className="val">0+</span>
                        </span></div>
                        <div className='mt-3'><h2>Lecturers</h2></div>
                    </div>

                    <div className="lower mx-2">
                        When it comes to training, we have the best lecturers who are specialized in their respective domains. Each lecturer ensures that the concept is fundamentally understood.
                    </div>
                </div>
                <div className='load_card load col-lg-3 my-2 mx-auto' ref={two}>
                    <div className="upper">
                        <div><span className="load_circle d-flex mx-auto"><span className="val">0+</span> </span></div>
                        <div className='mt-3'><h2>Webinars</h2></div>
                    </div>
                    <div className="lower mx-2">
                        Successful webinars conducted on topics like ‘game plan to high income’, soft skills, and many other technical topics. Each webinar has motivated students to learn more in detail about the topics.
                    </div>
                </div>
                <div className='load_card load col-lg-3 my-2 mx-auto' ref={three}>
                    <div className="upper">
                        <div>
                            <span className="load_circle d-flex mx-auto">
                                <span className="val">0+</span>
                            </span>
                        </div>
                        <div className='mt-3'>
                            <h2> Students trained</h2>
                        </div>
                    </div>
                    <div className="lower mx-2">
                        With lots of effort, so many students have been trained in the technical domain, particularly in C++ and Python. These students have received advanced training as well and are thriving in their domains.

                    </div>
                </div>
            </div>
        </div>
    )
}