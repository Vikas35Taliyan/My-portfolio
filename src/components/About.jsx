import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-ml mt-20'>I am a Frontend developer with expertise in HTML5, CSS3, Tailwind, Bootstrap, JavaScript, and ReactJs. Additionally, I have a basic understanding of Node.js and I'm currently learning Next.js and Redux. I'm always eager to explore new technologies and I enjoy keeping up-to-date with the latest trends and best practices in web development. I love reading books and making responsive websites. I believe that creating visually appealing and functional websites is both an art and a science, and I am constantly striving to improve my skills in both areas.</p>

            <br />

            <p className='text-ml'>I'm always looking for new ways to improve my skills as a web developer, and one of my favorite ways to do so is by watching documentaries and reading books and podcasts about the latest trends in the industry.These resources not only help me to stay up-to-date with the latest news and advancements in the field, but they also provide valuable insights on time management, working hard, and other important topics that help me to improve as a professional.</p>
        </div>
    </div>
  )
}

export default About;