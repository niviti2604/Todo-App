import React from 'react'

const Navbar = () => {
  return (
    <div className='container bg-[#312F82] text-white flex justify-around font-bold h-[35px] items-center'>
      <div className="name" >iTask</div>
      <div className="buttons flex gap-[15px]">
        <div className="home">Home</div>
        <div className="tasks">Your Tasks</div>
      </div>

    </div>
  )
}

export default Navbar