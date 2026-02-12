import React from 'react'
import MacWindow from './MacWindow'
import './Resume.scss'
const Resume = ({windowName, windowState, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
        <div className='resume-window'>
        <embed src="/resume.pdf" frameborder="0"></embed>

        </div>
    </MacWindow>
  )
}

export default Resume