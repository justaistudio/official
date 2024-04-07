import React from 'react'


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between items-center mx-auto gap-16 sm:flex'>
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold'>AI部落格</h4>
                <p className='my-5'>JustAIstudio是兩位軟體工程師的心血結晶</p>
                <p>Blog of JustAIstudio. All Rights Reserved</p>
            </div>
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>xxxxxxxxx</p>
                <p>xxxxxx</p>
            </div>
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>AI部落格</h4>
                <p className='my-5'>contact us</p>
                <p>justaistudio@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer