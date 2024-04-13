import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
         <h4 className='bg-wh-900 py-3 px-5 text-xs text-wh-50 font-bold text-center'>
            訂閱和追蹤我們
        </h4>
        <div className='my-5 mx-5'>
            <SocialLinks isDark/>
        </div>
            <Subscribe />
        <div className='bg-wh-900 my-8'>
            advert image
        </div>
        <h4 className='bg-wh-900 py-3 px-5 text-xs text-wh-50 font-bold text-center'>
            About the Blog
        </h4>
        <div className='bg-wh-900 my-8'>
            Profile image
        </div>
        <h4 className='py-3 px-5 text-wh-500 font-bold text-center'>
            關於JustAIStudio
        </h4>
        <p className='text-wh-500 text-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid aspernatur cupiditate nemo labore distinctio, tenetur blanditiis? Fuga, laboriosam expedita. Possimus, blanditiis voluptas? Possimus laudantium quaerat maxime ratione necessitatibus vitae?</p>
    </section>
  )
}

export default Sidebar