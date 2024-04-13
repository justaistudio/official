import React from 'react'
import Card from '../(shared)/Card'

type Props = {}

function Engineering({}: Props) {
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
            <Card className='col-span-1 row-span-3 bg-wh-500' imageHeight='h-96' isLongForm></Card>
            <Card className='col-span-1 row-span-1 bg-wh-500 mt-10 sm:mt-0 flex justify-between' imageHeight='h-48' isSmallCard></Card>
            <Card className='col-span-1 row-span-1 bg-wh-500 mt-10 sm:mt-0 flex justify-between' imageHeight='h-48' isSmallCard></Card>
            <Card className='col-span-1 row-span-1 bg-wh-500 mt-10 sm:mt-0 flex justify-between' imageHeight='h-48' isSmallCard></Card>
            <div className='col-span-1 row-span-1 bg-wh-500'></div>
        </div>
    </section>
  )
}

export default Engineering