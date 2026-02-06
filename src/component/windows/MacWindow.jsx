import React, { Children } from 'react'
import {Rnd} from 'react-rnd'
import './MacWindow.scss'
const MacWindow = ({children}) => {
  return (
    <Rnd>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="red dot"></div>
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