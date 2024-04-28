'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import MDEditor from '@uiw/react-md-editor/nohighlight';
import { marked } from "marked";

const Write = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');  
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');
    const generateSnippet = (markdownContent:any) => {
        // Remove Markdown formatting to get plain text
        const plainText = markdownContent
            .replace(/!\[[^\]]*\]\([^\)]*\)/g, '')  // Remove image links
            .replace(/\[[^\]]*\]\([^\)]*\)/g, '')  // Remove markdown links
            .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/g, '$1') // Remove bold, italics, headers, and inline links
            .replace(/\n/g, ' '); // Replace new lines with spaces for continuous text
    
        // Return the first 150 characters followed by an ellipsis
        return plainText.substring(0, 100) + '...';
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title === '') {
            setTitleError("This field is required");
            return;
        }
        if (content === '') {
            setContentError("This field is required");
            return;
        }
        
        // Generate snippet from Markdown content
        const snippet = generateSnippet(content);


        // Convert Markdown to HTML before sending to the server
        const htmlContent = marked(content);

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                category,
                content: htmlContent,
                image,
                author,
                snippet
            })
        });
        

        const data = await response.json();
        if (response.ok) {
            // Redirect to the new post or show success message
            window.location.href = `${process.env.NEXT_PUBLIC_URL}/post/${data.post.id}`;
        } else {
            // Handle errors
            console.error('Failed to create post:', data.err);
        }
        window.location.href = `${process.env.NEXT_PUBLIC_URL}/write`;

    };

    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-xl font-bold my-5'>Write a New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {titleError && <p className="text-red-500 text-xs mt-1">{titleError}</p>}
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div data-color-mode="light">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <MDEditor
                        value={content}
                        onChange={(e:any) => setContent(e)}
                        height={400}
                    />
                    {contentError && <p className="text-red-500 text-xs mt-1">{contentError}</p>}
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Publish Post
                </button>
            </form>
        </div>
    );
};

export default Write;
