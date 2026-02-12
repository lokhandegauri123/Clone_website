import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Resume from './windows/Resume'
const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className='dock'>
        <div 
        onClick={()=>{ setWindowState(state => ({...state, Github:true}))}}
        className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
        <div 
        onClick={()=>{ setWindowState(state => ({...state, Note:true}))}}
        className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
        <div 
        onClick={()=>{setWindowState(state => ({...state,Resume:true}))}}
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
        <div 
        onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
        className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
        <div 
        onClick={()=>{setWindowState(state => ({...state,Spotify:true}))}}
         className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
        {/* <div className="icon note"><img src="/doc-icons/note.svg" alt="" /></div> */}
        <div 
        onClick={()=>{setWindowState(state => ({...state,Cli:true}))}}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
        <div
        onClick={()=>window.open("mailto:gauri@example.com","_blank")}
         className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
        <div 
        onClick={()=>window.open("https://www.linkedin.com/in/gauri-lokhande-53a762244/","_blank")}
        className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>


    </footer>
  )
}

export default Dock