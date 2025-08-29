import React, { useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
function Signuplogin() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const onSubmit=()=>{
    localStorage.setItem("login?","true")
  }
  return (
    <div className='h-[400px] w-[300px] bg-[antiquewhite] p-4'>
      <form className="p-10"action="" onSubmit={handleSubmit(onSubmit)}>
        <input className='h-10 w-full border-2 p-2 m-1' type="text" placeholder='username'/>
        <input  className=" h-10 w-full border-2 p-2 m-1 "type="password" placeholder='password' />
        <button className='h-10 w-full border-2 bg-amber-100 m-1 hover:bg-amber-300' type="submit">Signup/login</button>
      </form>
    </div>
  )
}

export default Signuplogin