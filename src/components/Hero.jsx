import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
        <nav className='w-full flex items-center justify-between mb-10 pt-3'>
            <div className='flex items-center gap-2'>
                <img 
                    src={logo}
                    alt='summafy_logo'
                    className='w-20 object-contain'
                />
                <span className='text-xl font-bold'>Summafy</span>
            </div>
            <button 
                type='button'
                onClick={() => window.open('https://github.com/MuxN4/summafy')}
                className='black_btn'
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
            Streamline Article Summaries with <br className='max-md:hidden' /> <span className='ocean_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading experience with Summafy, an open-source article summarizer that converts lengthy texts into easy-to-understand, concise summaries
        </h2>
    </header>
  )
}

export default Hero