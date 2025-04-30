import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'

function Main() {
  return (
    <>
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
        <div className="repo"></div>
      </div>
      <div className="preview"></div>
      <div className="controller">
        {/* Sort, Show Hidden Files, Search, Open, Go Back, Details*/}
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
