import React from 'react'
import './club.css'
import l2 from '../images/DEV LOGO 2.png'
import l3 from '../images/DEV LOGO 3.png'
import l1 from '../images/DEV LOGO 1.png'
export default function club() {
  return (
    <div className="scp">
      <div className="l">
        <img src={l1} alt="" />
      </div>
      
        <div className="sc-card">
            <div className="hh">
                <div className="ll">
                  <img src={l3} alt="" />
                </div>
                <div className="rr">
                  <h1>Cybernaut Developers</h1>
                  <h4>Student Club</h4>
                </div>
            </div>
            <div className="cen">
              <p>Cybernaut developers Club connects all the developers in one place. This community is for undergraduate students who are willing to develop technologies and for students with a curiosity to grow as a developer.</p>

            </div>
            <div className="blue-box">
              <p>This club motivates the phrase <br /> "Create leaders and not employees."</p>
            </div>
            <div className="cen">
              <p>Cybernaut developers Club connects all the developers in one place. This community is for undergraduate students who are willing to develop technologies and for students with a curiosity to grow as a developer.</p>
            </div>
            <div className="grey-button">
              <a href="http://">learn more</a>
            </div>
        </div>
        <div className="r">
        <img src={l2} alt="" />
      </div>
    </div>
  )
}
