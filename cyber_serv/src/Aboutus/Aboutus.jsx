import './Aboutus.css'
import logo from './images/cybernaut_logo.png'
import VisionMission from './VisionMision';
import Milestone from './Milestones';
import Founders from './Founders';
import Members from './Members';
export default function Aboutus(){


    return (
        <div>
            <div id="pg1">
                <div className="cirr"></div>
                <div id="quotes">
                    "Education is the most powerful weapon which you can use to change the world" <span>– Nelson Mandela</span>
                </div>
                <div className="cont">
                    <div className='row'>
                        <div className="col-lg-4 col-sm-12">
                            <img src={logo} alt="Cybernaut logo"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 wrt-cont"> 
                            <div className="ques py-3">So, why not provide that weapon to everyone?</div>
                            <div className="res">This is the basic idea behind Cybernaut. <br/>
                                Cybernaut is a registered startup company under MSME that has its vision of providing equal educational opportunities to everyone. <br/><br/>
                                
                                Knowledge is something that can be shared with someone, unlike money without any hesitation. Money is something fundamental for a living. Even though money is important, knowledge is the one that is the basic source for money. And so, education is very important.
                                As an Ed-tech platform, we have our motto as 'Share your knowledge to expand others' knowledge.'<br/><br/>

                                Cybernaut is a group of like-minded people who work towards the betterment of educational opportunities for everyone. In that manner, we conduct workshops and internships to impart knowledge to young minds.
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <VisionMission/>
            <div id="pg3">
                <div id="pg3q" className='ms-5'>
                    <span id="s1">///</span>
                    <span id="s2">How we are Unique</span>
                </div>
                <div id="pg3cont" className=' row mx-5'>
                <div id="wrt" className=' col-lg-6'>
                    <span>
                    Our uniqueness is our greatest strength. We ensure that no concept is memorized when it comes to our training, instead, they are made to understand right from the beginning i.e 'Smart Learning'. 
<br/><br/>
Live classes and interaction during className support Smart Learning. Having quizzes during meets and seeing to it that all are in a comfortable environment with no pressure is what helps us stand out.
                    </span>                
                </div>
                <div id='pic' className='col-lg-6  d-none d-md-flex py-3'>
                <div id="pic_1">
                        <span></span>
                    </div>
                    <div id="pic_2"><span></span></div>
                    <div id="pic_3"><span></span></div>
                </div>
                </div>
            </div>
            <Milestone/>
            <Founders/>
            <Members/>

        </div>
    )
}