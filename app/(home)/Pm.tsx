import React from 'react'
import Card from '../(shared)/Card'
import { Post } from '@prisma/client'

type Props = {
    pmPosts: Array<Post>
}

const Pm = ({pmPosts}: Props) => {
  return (
    <section className='mt-10'>
        <hr className='border-1'></hr>
        <div className='flex items-center gap-3 my-8'>
            <h4 className='bg-accent-green py-2 px-5 text-sm text-wh-900'>
                最新
            </h4>
            <p className='font-bold text-2xl'>專案與產品管理工具</p>
        </div>
        <div className='sm:flex justify-between gap-8'>
        <Card className='sm:mt-0 mt-5 bg-wh-500 basis-1/3' imageHeight='h-80' post={pmPosts[0]}></Card>
        <Card className='sm:mt-0 mt-5 bg-wh-500 basis-1/3' imageHeight='h-80' post={pmPosts[1]}></Card>
        <Card className='sm:mt-0 mt-5 bg-wh-500 basis-1/3' imageHeight='h-80' post={pmPosts[2]}></Card>
        </div>
        <Card className='sm:flex justify-between items-center bg-wh-500 mt-7 mb-5 gap-3' imageHeight='h-80' post={pmPosts[3]}></Card>

    </section>
  )
}

export default Pm