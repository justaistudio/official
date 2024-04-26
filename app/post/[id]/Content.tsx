'use client'

import SocialLinks from '@/app/(shared)/SocialLinks';
import { FormattedPost } from '@/app/types'
import Image from 'next/image';
import React, { useState } from 'react'
import { ImCancelCircle } from "react-icons/im";
import { ImPencil } from "react-icons/im";

type Props = {
    post: FormattedPost
}

const Content = ({post}: Props) => {
    const [isEditable, setIsEditable] = useState<Boolean>(false)
    const [title, setTitle] = useState<String>(post.title)
    const [titleError, setTitleError] = useState<String>("")
    const [content, setContent] = useState<String>(post.content)
    const [contentError, setContentError] = useState<String>("")

const handleSubmit = () => {}

  return (
    <div className='prose w-full max-w-full mb-10'>
        {/* breadcrumbs */}
        <h5 className='text-wh-300'>{`home > ${post.category} > ${post.title}`}</h5>
        {/* category and edit button */}
        <div className='flex justify-between items-center'>
            <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>{post.category}</h4>
            <div className='mt-4'>
                {isEditable? (<div className='flex justify-between gap-3'>
                <button onClick={()=> console.log('cancel edit')}>
                    <ImPencil className='h-6 w-6 text-accent-red' />
                </button>
            </div>
                ) : (
                <button onClick={()=> console.log('edit')}>
                    <ImCancelCircle className='h-6 w-6 text-accent-red' />
                </button>
                )}
        </div>
    </div>
    <form onSubmit={handleSubmit}>
        {/* Header */}
        <>
        {isEditable? (
            <div>
                <textarea 
                className='border-2 rounded-md bg-wh-50 p-3 w-full'
                placeholder="Title"
                onChange={(e)=> console.log("changeTitle", e.target.value)}
                value={title}
                ></textarea>
            </div>
        ):(
            <h3 className='font-bold text-3xl mt-3'>{title}</h3>
        )}
        <div className='flex gap-3'>
            <h5 className='font-semibold text-xs'>By {post.author}</h5>
            <h6 className='text-wh-300 text-xs'>{post.createdAt}</h6>
        </div>
        </>
        {/* image */}
        <div className='relative w-auto mt-2 mb-16 h-96'>
            <Image 
            fill
            alt={post.title}
            src={post.image}
            style={{objectFit:'cover'}}
            />
        </div>
        {/* submit button */}
        {isEditable && (
            <div className='flex justify-end'>
                <button
                type='submit'
                className='bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5'
                >
                SUMBIT
                </button>
            </div>
        )}
    </form>
    <div className='hidden md:block mt-10 w-1/4'>
        <SocialLinks isDark/>
    </div>
    </div>
  )
}

export default Content