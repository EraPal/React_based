import React from 'react'
// import Hero from '../assets/heroImage.png'
import Krish from '../assets/krish1.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Hey,I am a budding developer 
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
           When you are prepared to code any problem given to you, You are done with Algorithm Design. Now you have to focus on your code, can the same problem be solved in less no. Of lines? or are there chances to optimize your code in terms of how much memory it needs( Space complexity ), how much time it requires to execute ( Time complexity ) etc .

          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center 
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              {/* here there will be that arraow thing */}
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Krish} alt=" My Personal Portfolio" 
          className='rounded-2xl mx-auto w-2/3 md:w-fit' />

          
        </div>

      </div>

    </div>
  )
}

export default Home