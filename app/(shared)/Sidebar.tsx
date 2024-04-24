import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from 'public/assets/ad-2.jpg'
import Aboutprofile from 'public/assets/about-profile.jpg'

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
        <Image
            className='hidden md:block my-8 w-full'
            width={500}
            height={1000}
            alt='ad-2'
            src={Ad2}
            placeholder='blur'
        />
        <h4 className='bg-wh-900 py-3 px-5 text-xs text-wh-50 font-bold text-center'>
            About the Blog
        </h4>
        <div className='flex justify-center my-3'>
        <Image
            style = {{ width: '500px', height: '250px', objectFit: 'cover'}}
            alt='about-profile'
            src={Aboutprofile}
            placeholder='blur'
        />
        </div>
        <h4 className='py-3 px-5 text-wh-500 font-bold text-center'>
            關於JustAIStudio
        </h4>
        <p className='text-wh-500 text-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid aspernatur cupiditate nemo labore distinctio, tenetur blanditiis? Fuga, laboriosam expedita. Possimus, blanditiis voluptas? Possimus laudantium quaerat maxime ratione necessitatibus vitae?</p>
    </section>
  )
}

export default Sidebar