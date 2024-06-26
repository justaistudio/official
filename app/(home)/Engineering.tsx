import React from 'react'
import Card from '../(shared)/Card'
import { Post } from '@prisma/client'

type Props = {
  engineeringPosts:Array<Post>
}

const Engineering = ({engineeringPosts}: Props) => {
  return (
    <section>
        <hr className='border-1'></hr>
        {/* header */}
        <div className='flex items-center gap-3 my-8'>
            <h4 className='bg-accent-orange py-2 px-5 text-sm text-wh-900'>
                熱門
            </h4>
            <p className='font-bold text-2xl'>軟體開發AI工具</p>
        </div>

        {/* body */}
        <div className='sm:grid gap-x-8 gap-y-8 grid-cols-2 grid-rows-3 my-5'> 
            <Card className='col-span-1 row-span-3' imageHeight='h-96' isLongForm post={engineeringPosts[0]}></Card>
            <Card className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' isSmallCard post={engineeringPosts[1]}></Card>
            <Card className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3 ' imageHeight='h-48' isSmallCard post={engineeringPosts[2]}></Card>
            <Card className='col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' isSmallCard post={engineeringPosts[3]}></Card>
            <div className='col-span-1 row-span-1'></div>
        </div>
    </section>
  )
}

export default Engineering