import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";



type Props = {
    isDark? : boolean
}

const SocialLinks = ({isDark = false}: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
        <Link href='https://www.facebook.com' target='_blank' rel="noreferrer noopener">
            <SiFacebook className= {`${isDark ? 'brightness-0': ''} hover:opacity-50 text-2xl`} />
        </Link>
        <Link href='https://www.youtube.com' target='_blank' rel="noreferrer noopener">
            <SiYoutube className= {`${isDark ? 'brightness-0': ''} hover:opacity-50 text-2xl`}/>
        </Link>
        <Link href='https://www.linkedin.com' target='_blank' rel="noreferrer noopener">
            <SiLinkedin className= {`${isDark ? 'brightness-0': ''} hover:opacity-50 text-2xl`}/>
        </Link>
        <Link href='https://www.github.com' target='_blank' rel="noreferrer noopener">
            <SiGithub className= {`${isDark ? 'brightness-0': ''} hover:opacity-50 text-2xl`}/>
         </Link>
    </div>
  )
}

export default SocialLinks