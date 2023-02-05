import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import './circle.css'
const Circle = (props) => {
    
  const [text, setText] = useState('C++');
  const [texts, setText1] = useState('C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language.');
  function sqlh(){
    setText('SQL');
  };
  function sqlp(){
    setText1('MySQL is the world\'s most popular open-source database.It is used by many database-driven web applications');
  };

  function javah(){
    setText('JAVA')
  } 

  function javap(){
    setText1('Java is a programming language and computing platform. This programming language is easy for beginners as many processes run automatically.')
  }

  function cpph(){
    setText('C++');
  }
  function cppp(){
    setText1('C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language.')
  }
  function figmah(){
    setText('FIGMA')
  }
  function figmap(){
    setText1('Figma is a tool that can be used to design user interfaces for apps and also for web pages. It is a vector graphics tool and can easily be accessed via the web. Figma is an easy platform to design compared to others and can be used by a group to design.')
  }

  function fileh(){
    setText('')
  }
  function filep(){
    setText1()
  }

    return(
        <>
        <div className="circle-wrapper">
            <div className="tech-content">
              <h1 id="hh">{text}</h1>
              <p id="pp">{texts}</p>
              {/* C++ is a general-purpose <br/> language used to create high-performance applications. It is an extension of C programming language. */}
            </div> 
            <div className="circle deg-45 sql" onClick={() => {sqlh(); sqlp()}}>
              <span className="sql"></span>
            </div>
            <div className="circle deg-90 java" onClick={() => {javah(); javap();}}>
              {/* <span className="java"></span> */}
            </div> 
            <div className="circle deg-135 file" onclick={() => {fileh(); filep();}}>
              {/* <span className="file"></span> */}
            </div>
            <div className="circle deg-225 figma" onClick={() => {figmah(); figmap();}}>
              {/* <span className="figma"></span> */}
            </div> 
            <div className="circle deg-270 cpp" onClick={() => {cpph(); cppp();}}>
              {/* <span className="cpp"></span>  */}
            </div> 
            <div className="circle deg-315 python" onclick="python()">
              {/* <span className="python"></span> */}
            </div> 
           </div>
        </>
    );
}
export default Circle;