import React, { Children } from 'react'
import {Rnd} from 'react-rnd'
import './MacWindow.scss'
const MacWindow = ({windowName,setWindowState, children, width="40vw",height="40vh"}) => {
  return (
    <Rnd
    default={{
        width:width,
        height:height,
        x:300,
        y:200

    }

    }>
        <div className="window">
            <div className="nav">   
                <div className="dots">
                    <div onClick={()=>setWindowState(state=>({...state,[windowName]:false }))} className="red dot"></div>
                    <div className="green dot"></div>
                    <div className="yellow dot"></div>.dot
                </div>

                <div className="nav-title">GauriLokhande-GL</div>
            </div>

            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow