import React from 'react'
import Card from '../(shared)/Card'

type Props = {}

const Others = (props: Props) => {
  return (
    <section className='pt-4 mb-16'>
        <hr className='border-1'></hr>
        <p className='font-bold text-2xl my-8'>其他AI工具</p>
        <div className='sm:grid gap-16 grid-cols-2 my-5'>
            <Card className=' bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80' isSmallCard></Card>
            <Card className=' bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80' isSmallCard></Card>
            <Card className=' bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80' isSmallCard></Card>
            <Card className=' bg-wh-500 mt-5 sm:mt-0' imageHeight='h-80' isSmallCard></Card>
        </div>
    </section>
  )
}

export default Others