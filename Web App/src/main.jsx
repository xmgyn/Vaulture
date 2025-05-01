import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'

const filetypes = {
  folder: "/open-folder.png",
  pdf: "/pdf.png",
  video: "/video.png"
}

const Loading = () => {
  return (
    <div className="loading-bar"></div>
  )
}

const Item = ({ type, name}) => {
  return (
    <div className="item">
      <div className="item-logo">
        <img src={ filetypes[type] }/>
      </div>
      <div className="item-title sono-500">{ name }</div>
    </div>
  )
}


function Main() {
  return (
    <>
      <Loading />
      <div className="background">
        <img src="/Background.jpg" alt="" />
      </div>
      <div className="overlay"></div>
      <div className="container">
        <div className="nav">
          <div className="breadcrumb sono-600">Home    &gt;    Documents    &gt;    Projects    &gt;</div>
          <div className="search"></div>
        </div>
        <div className="divider"></div>
        <div className="repo">
          <Item type='folder' name='Wallpapers'/>

        </div>
      </div>
      <div className="preview"></div>
      <div className="timer">
        <div className="timer-head sono-800">Time Remaining</div>
        <div className="timer-text sono-400">07:46:02</div>
      </div>
      <div className="controller">
        {/* Sort, Show Hidden Files, Download, Go Back, Details*/}
        {/* https://www.svgrepo.com/collection/xnix-circular-interface-icons/6
        https://www.svgrepo.com/svg/520534/backspace
        https://www.svgrepo.com/svg/520537/backword
        https://www.svgrepo.com/svg/520643/cloud-bolt
        https://www.svgrepo.com/svg/520676/cross */}
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
