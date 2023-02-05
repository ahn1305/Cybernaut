import React from 'react'
import './scroll.css'
import ScrollIndicator from './ScrollIndicator'
import si from '../images/Logo White BG 1.png'
export default function scroll() {
  return (
    <div className="sp">
      <div className="lefts">
        <img src={si} alt="" style={{marginTop:'1em'}} />
      </div>
      <div className="rights">
      <div className="scroll-content">
          <div className="pg1">
            <h1>Cybernaut</h1><br />
            <p>"Education is the most powerful weapon which you can use to change the world" – Nelson Mandela</p>
            <h4>The basic idea behind Cybernaut</h4><br />
            <p>Cybernaut is a registered startup company under MSME that has its vision of providing equal educational opportunities to everyone. <br /><br />
Cybernaut is a group of like-minded people who work towards the betterment of educational opportunities for everyone. In that manner, we conduct workshops and internships to impart knowledge to young minds.</p>
          </div>
          <div className="pg2">
            <h1>Why Choose Us?</h1><br />
            <p>Fundamentally understanding everything makes learning easier and will be retained for longer. This is what we do. All that is taught, we ensure that the concepts are not memorized, but are very well understood.</p>
            <h4>The basic idea behind Cybernaut</h4><br />
            <p>Cybernaut is a registered startup company under MSME that has its vision of providing equal educational opportunities to everyone. <br /><br />
Cybernaut is a group of like-minded people who work towards the betterment of educational opportunities for everyone. In that manner, we conduct workshops and internships to impart knowledge to young minds.</p>
          </div>
          <div className="pg3">
            <h1>Why Choose Us?</h1><br />
            <p>Fundamentally understanding everything makes learning easier and will be retained for longer. This is what we do. All that is taught, we ensure that the concepts are not memorized, but are very well understood.</p>
            <h4>The basic idea behind Cybernaut</h4><br />
            <p>Cybernaut is a registered startup company under MSME that has its vision of providing equal educational opportunities to everyone. <br /><br />
Cybernaut is a group of like-minded people who work towards the betterment of educational opportunities for everyone. In that manner, we conduct workshops and internships to impart knowledge to young minds.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
