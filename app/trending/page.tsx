'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Post } from '@prisma/client';
import Image from 'next/image';

const fetchTrendingPosts = async () => {
    // fetch tredningpost from backend api
    const res = await fetch('/api/trending');  
    if (!res.ok) {
        throw new Error('Failed to fetch trending posts');
    }
    return res.json();
};

type TrendingCardProps = {
    className?: string;
    post: Post;
}

const TrendingCard = ({ className, post }: TrendingCardProps) => (
    <Link className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
          href={`/post/${post.id}`}>
        <div className='z-0 relative w-full h-full'>
            <Image fill style={{ objectFit: 'cover' }} alt={post.title} src={post.image} />
        </div>
        <div className='absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual'></div>
        <div className='absolute z-2 bottom-0 left-0 p-3'>
            <h4 className='inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900'>{post.category}</h4>
            <div className='text-wh-100 mt-2'>{post.title}</div>
        </div>
    </Link>
);

const TrendingPage = () => {
    const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchTrendingPosts().then(data => setTrendingPosts(data))
            .catch(error => console.error('Error fetching trending posts:', error));
    }, []);

    return (
        <section className='px-5'>
              <div className='flex items-center gap-3'>
                <div className='bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold'>熱門</div>
                <p className='text-sm'>一週內最多點閱話題</p>
            </div>
            <div className='sm:grid gap-5 grid-cols-4 grid-rows-4 sm:h-[600px] my-4'> 
                {trendingPosts.map((post, index) => (
                    <TrendingCard key={post.id} className='col-span-1 row-span-2' post={post} />
                ))}
            </div>
        </section>
    );
}


export default TrendingPage;
