import { RenderApp } from '..';

function App(){
  return (
    <div style={{color: "white"}}> 
      Im the other page...
    </div>
  )
}

RenderApp(<App/>)