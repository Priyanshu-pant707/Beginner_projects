import { useState } from "react"

export default function App() {
  const [color, setColor] = useState("green")
  return (

    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "
   //   style={{backgroundColor:"red"}}
   >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl"
             style={{backgroundColor:"pink"}}
        >
          <button
          onClick={()=>setColor("red")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>red</button>

          <button 
          onClick={()=>setColor("blue")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>blue</button>

          <button 
          onClick={()=>setColor("pink")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>pink</button>

          <button 
          onClick={()=>setColor("grey")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>grey</button>

        </div>
      </div>
    </div>
  )
}