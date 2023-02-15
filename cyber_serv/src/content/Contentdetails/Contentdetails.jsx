import './Contentdetails.css'
import Content from '../content.json'
import logo from '../Assets/cybernaut_logo.png'
export default function ContentDetails(props){
    var name = props.name;
    return(
        <div id="Contentdetails">
            <div className="description">
                    <h4>Description</h4>
                    <div>
                        {Content[name].Description}
                    </div>
                    
            </div>
            <div id="teamCyber">
                <div className="row">
                    <span className="logo col-lg-1 col-sm-12 ms-5   ">
                        <img src={logo}alt=""/>
                    </span>
                    <div className="col-lg-8 col-sm-12 align-self-center">
                        <h4>Team Cybernaut</h4>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ridiculus porttitor et scelerisque. Donec sed vitae turpis sed odio mattis. Ultricies accumsan eget eget tristique laoreet.
                        </div>
                    </div>
                </div>
            </div>
            <div id="whatWillYouAchieve" className='col-lg-8 col-sm-12 ms-5'>
            <h4>What will you achieve?</h4>
                    <ul className="row">
                        <li className="col-lg-6 col-md-12 p-2"> <span className="pts"/>In-depth knowledge of each concept </li>
                        <li className="col-lg-6 col-md-12 p-2"> <span className="pts"/>Learning along with like-minded people</li>
                        <li className="col-lg-6 col-md-12 p-2"> <span className="pts"/>Exposure and practice</li>
                    </ul>
            </div>
            <div id='whoCanTake'>
                <ul className="col-lg-8 ms-5 mt-5 p-3">
                    <h4 className="p-3">Who can take this course?</h4>
                    <li className="col-lg-10 p-3"><span className="pts"/>Anyone with an inquisitive mind can take up this course</li>
                    <li className="col-lg-10 p-3"><span className="pts"/>One who wants to learn this particular course</li>
                </ul>
            </div>
            <div id='COC' className="col-lg-8 ms-5 my-5">
                <div className="row">
                    <ul className="col-9 ps-5">
                        <h4 className="p-3">Certificate of Completion</h4>
                        <li className="p-2"><span className="pts"/>Amet orci, vitae penatibus iaculis suspendisse tortor tempor.</li>
                        <li className="p-2"><span className="pts"/>Amet orci, vitae penatibus iaculis suspendisse tortor tempor.</li>
                        <li className="p-2"><span className="pts"/>Amet orci, vitae penatibus iaculis suspendisse tortor tempor.</li>
                        <li className="p-2"><span className="pts"/>Amet orci, vitae penatibus iaculis suspendisse tortor tempor.</li>
                    </ul>
                    <div className="col-2 m-auto bg-secondary">lllllllllll</div>
                </div>
            </div>
            <div id="whyCyber">
                <h4 className="col-lg-8 text-lg-center">Why Cybernaut?</h4>
                <div className="col-lg-10 p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center"></div><span className="text-center">Online learning  </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center"></div><span className="text-center">Beginner-friendly</span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center"></div><span className="text-center">Taught in English/Tamil  </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center"></div><span className="text-center">Doubt clarification done  </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center"></div><span className="text-center">Project for practice </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center"></div><span className="text-center">Certification after training</span></div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 ms-5 pt-5">
                    <h4>FAQ</h4>
                    <div className="accordion accordion-flush p-2" id="faq_ques">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="Q1">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#A1">
                                    Live Interactive session with one and one doubt session?
                                </button>
                            </h3>
                            <div id="A1" className="accordion-collapse collapse" data-bs-parent="#faq_ques">
                                <div className="accordion-body"> 
                                    Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="Q2">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#A2">
                                    Live Interactive session with one and one doubt session?
                                </button>
                            </h3>
                            <div id="A2" className="accordion-collapse collapse" data-bs-parent="#faq_ques">
                                <div className="accordion-body"> 
                                    Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="Q3">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#A3">
                                    Live Interactive session with one and one doubt session?
                                </button>
                            </h3>
                            <div id="A3" className="accordion-collapse collapse" data-bs-parent="#faq_ques">
                                <div className="accordion-body"> 
                                    Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}