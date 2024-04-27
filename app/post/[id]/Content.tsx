'use client'

import SocialLinks from '@/app/(shared)/SocialLinks';
import { FormattedPost } from '@/app/types'
import Image from 'next/image';
import React, { useState } from 'react'
import { ImCancelCircle } from "react-icons/im";
import { ImPencil } from "react-icons/im";
import "@uiw/react-md-editor/markdown-editor.css";
import MDEditor from '@uiw/react-md-editor/nohighlight';
import TurndownService from 'turndown';

const turndownService = new TurndownService();

type Props = {
    post: FormattedPost
}

const Content = ({post}: Props) => {
    const [isEditable, setIsEditable] = useState<Boolean>(false)
    const [title, setTitle] = useState<string>(post.title)
    const [titleError, setTitleError] = useState<string>("")
    const [content, setContent] = useState<string>(post.content)
    const [contentError, setContentError] = useState<string>("")
    const [value, setValue] = React.useState("");

    const handleEdit = () => {
        if (!isEditable) {
            setValue(turndownService.turndown(post.content));
        }
        setIsEditable(!isEditable);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setContent(value);
        setTitle(title);
        setIsEditable(false); 
    }

  return (
    <div className='prose w-full max-w-full mb-10'>
        {/* breadcrumbs */}
        <h5 className='text-wh-300'>{`home > ${post.category} > ${post.title}`}</h5>
        {/* category and edit button */}
        <div className='flex justify-between items-center'>
            <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>{post.category}</h4>
            <div className='mt-4'>
                {isEditable? (<div className='flex justify-between gap-3'>
                <button onClick={handleEdit}>
                    <ImCancelCircle className='h-6 w-6 text-accent-red' />
                </button>
            </div>
                ) : (
                <button onClick={handleEdit}>
                    <ImPencil className='h-6 w-6 text-accent-red' />
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
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
                >
                </textarea>
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

        <div className={isEditable? "container border-2 rounded-md bg-wh-300 p-3":"w-full max-w-full"}>
            {isEditable && (
            <div data-color-mode="light">
            <MDEditor
                height={800}
                value={value}
                onChange={setValue}
                textareaProps={{
                    placeholder: '...在這輸入文字'}}
                style={{color: "black"}}
            />
            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
            </div>
                )}
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

    {/* Content */}
    {!isEditable && (
    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    )}

    <div className='hidden md:block mt-10 w-1/4'>
        <SocialLinks isDark/>
    </div>
    </div>
  )
}

export default Content
