import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Baseinfo() {
  // const reff=useRef(null); 
  // const [loginstatus,setloginstatus]=useState(false);
  // useEffect(()=>{
  //   const res=localStorage.getItem("login?");
  //   if(res=="true"){
  //     setloginstatus(true);
  //   }
  // },[])
  return (
    <div className="h-[350px] w-[320px] bg-[antiquewhite] p-4 border-2 border-gray-700 rounded-md">
      {/* Header */}
      <div>
        <h1 className="font-serif text-black text-2xl underline mb-2">
          LeeAIEx
        </h1>
        <p className="text-black text-sm leading-snug">
          This extension is designed to help you solve LeetCode questions with
          AI-powered features.
        </p>
        <p className="text-black text-xs mt-3">
          ➤ Open <span className="font-bold">leetcode.com</span> to use the extension.  
          <br />
          ➤ A button will appear on the right side of the screen.  
          <br />
          ➤ Click it to get started with AI assistance.  
        </p>
      </div>

      {/* Footer
      <div className="flex justify-center mt-6">
        {!(loginstatus)&&<NavLink
          to="/signuplogin"
          ref={reff}
          className="px-3 py-1 bg-gray-800 text-white font-bold border border-black rounded-sm hover:bg-gray-700 text-xs"
        >
          Login
        </NavLink>}
      </div> */}
    </div>
  )
}

export default Baseinfo
