
import React, { useState }  from "react"
import Card from "./Card"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Nav from "./Nav"
function App(){
  const [a,seta] = useState(0)
  return  (
    
    <div className="main">
      <Nav/>
      Heelo Recact {a}
      <button onClick={()=>seta(a +1)}>Add</button>
      <button onClick={()=>seta(a -1)}>Sub</button>
      <Routes>
        <Route path="/card" element={<Card/>} />
         <Route path="/home" element={<Home/>} />
      </Routes>
  
      {/* <Card prop="MYINDIA" arrdata ={{gender:"male",age:20,address:"malad"}}/>
      <Home/> */}
    </div>

  )
}

export default App