import Trending from "./(home)/Trending"
import Engineering from "./(home)/Engineering"
import Pm from "./(home)/Pm"
import Others from "./(home)/Others";
import Subscribe from "./(shared)/Subscribe";
import Sidebar from "./(shared)/Sidebar";
import { prisma } from "./api/client";
import { Post } from "@prisma/client";


// grab posts and pre-rendering components in the backend
const getPosts = async () => {
  const posts: Array<Post> = await prisma.post.findMany()
  // transfer image from string to static import, make it an image module
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`)
      console.log(imageModule)
      return {
        ...post,
        image: imageModule.default
      }
    })
  )
  return formattedPosts
}
  


export default async function Home() {
  const posts = await getPosts()
  // check if server grabs posts
  console.log ('posts:', posts)

  // Define Trending posts
  const formatPosts: any = () => {
    const trendingPosts: Array<Post> = [] 
    const engineeringPosts: Array<Post> = [] 
    const pmPosts: Array<Post> = [] 
    const othersPosts: Array<Post> = [] 
    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post)
      }
      if (post?.category === 'Engineering') {
        engineeringPosts.push(post)
      } else if (post?.category === 'Pm') {
        pmPosts.push(post)
    } else {
      othersPosts.push(post)
    }
    });
    return [trendingPosts, engineeringPosts, pmPosts, othersPosts]
  }

  const [trendingPosts, engineeringPosts, pmPosts, othersPosts] = formatPosts()
  
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Engineering engineeringPosts={engineeringPosts} />
          <Pm pmPosts={pmPosts} />
          {/* <Others othersPosts={othersPosts}/> */}
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
