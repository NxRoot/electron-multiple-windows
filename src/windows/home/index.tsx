import { RenderApp } from '..';

const electron = window.require("electron")
const ipcRenderer = electron.ipcRenderer

function App(){

  const onClick = () => {
    ipcRenderer.send("open_page", "other")
  }

  return (
    <div style={{color: "white"}}> 
      Im so Good <button onClick={onClick}> Open other page </button>
    </div>
  )
}

RenderApp(<App/>)