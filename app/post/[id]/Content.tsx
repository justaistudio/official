    'use client'

    import SocialLinks from '@/app/(shared)/SocialLinks';
    import { FormattedPost } from '@/app/types'
    import Image from 'next/image';
    import React, { use, useState } from 'react'
    import { ImCancelCircle } from "react-icons/im";
    import { ImPencil } from "react-icons/im";
    import "@uiw/react-md-editor/markdown-editor.css";
    import MDEditor from '@uiw/react-md-editor/nohighlight';
    import TurndownService from 'turndown';
    import { marked } from "marked";



    const turndownService = new TurndownService();

    type Props = {
        post: FormattedPost
    }

    const Content = ({post}: Props) => {
        const option = {
            // Add options if needed
          };

        const [isEditable, setIsEditable] = useState<Boolean>(false)
        const [title, setTitle] = useState<string>(post.title)
        const [titleError, setTitleError] = useState<string>("")
        const [tempTitle, setTempTitle] = useState<string>(title)

        const [content, setContent] = useState<string>(post.content)
        const [contentError, setContentError] = useState<string>("")
        const [tempContent, setTempContent] = useState<string>(content)

        const date = new Date(post?.createdAt as string)
        const options: Intl.DateTimeFormatOptions = { 
            year: "numeric", 
            month: "long", 
            day: "numeric",
        };
        const formattedDate = date.toLocaleString("en-US", options); 
        
        const [value, setValue] = React.useState("");

        const handleEdit = () => {
            if (!isEditable) {
                // save original title and content when it is not editable, so it can be redo once giving up
                setTempTitle(title);
                setTempContent(content);
                // turn current content to markdown for editor
                setValue(turndownService.turndown(post.content));
            } else {
                // set title and content from temp
                setTitle(tempTitle);
                setContent(tempContent);
            }
            setIsEditable(!isEditable);
        }
        

        // make API call to send & update post to the backend, and update the post in the database
        const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // validation
            if (title === '') setTitleError("This field is required")
            if (value === '') setContentError("this field is empty")
            if (title ==='' || value ==='') 
                return
            
        // Convert Markdown to HTML
        const htmlContent = marked(value, option);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/post/${post.id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    }, 
                    body: JSON.stringify({
                        title: title,
                        content: htmlContent
                    })
                }
            )
                const data = await response.json()
                setTempTitle('')
                setTempContent('')
                setTitle(data.title)
                setContent(data.content)
                // Redirect back to the original post URL
                window.location.href = `${process.env.NEXT_PUBLIC_URL}/post/${post.id}`;

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
                    />
                    {titleError && (<p className='mt-1 text-primary-500'>{titleError}</p>)}
                </div>
            ):(
                <h3 className='font-bold text-3xl mt-3'>{title}</h3>
            )}
            <div className='flex gap-3'>
                <h5 className='font-semibold text-xs'>By {post.author}</h5>
                <h6 className='text-wh-300 text-xs'>{formattedDate}</h6>
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
                    onChange={(e:any) => setValue(e)}
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
