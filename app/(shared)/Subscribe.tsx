import React from 'react'


const Subscribe = () => {
  return (
    <div className='text-center bg-wh-10 px-5 py-10'>
        <h4 className='font-semibold text-base'></h4>
        <p className='text-wh-500 my-3 w-5/6 mx-auto'>
            訂閱JustAIStudio電子報 </p>
        <input className='text-center w-5/6 min-w-[100px] px-5 py-2 border-2' placeholder='您的email'/>
        <button className='bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] px-5 py-2 mt-3'>訂閱</button>
    </div>
  )
}

export default Subscribe
