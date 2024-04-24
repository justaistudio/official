import React from 'react'
import Card from '../(shared)/Card'
import { Post } from '@prisma/client'

type Props = {
    othersPosts: Array<Post>
}

const Others = ( {othersPosts}: Props) => {
  return (
    <section className='pt-4 mb-16'>
        <hr className='border-1'></hr>
        <p className='font-bold text-2xl my-8'>其他AI工具</p>
        <div className='sm:grid gap-16 grid-cols-2 my-5'>
            <Card className='mt-5 sm:mt-0' imageHeight='h-80' isSmallCard post={othersPosts[-4]}></Card>
            <Card className='mt-5 sm:mt-0' imageHeight='h-80' isSmallCard post={othersPosts[-1]}></Card>
            <Card className='mt-5 sm:mt-0' imageHeight='h-80' isSmallCard post={othersPosts[-2]}></Card>
            <Card className='mt-5 sm:mt-0' imageHeight='h-80' isSmallCard post={othersPosts[-3]}></Card>
        </div>
    </section>
  )
}

export default Others