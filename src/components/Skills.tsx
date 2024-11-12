import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>

<div data-aos="fade-up">
  <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
  <p className='text-gray-500 pt-2'>
    I have solid foundation in web development, specializing  in HTML, CSS, and Javascript. My experience extends to using frameworks like react and Next.js to create dynamic and user-friendly applications. I am also proficient in technologies  to enhance my skill set and contribute effectively to project. 
  </p>
</div>
  <div>
<div className='grid grid-cols-2 text-accent text-4xl sm:text-4xl'>
  <div className='space-y-2'>
 <h2 data-aos="fade-up">Html</h2>
 <h2 data-aos="fade-up">Css</h2>
 <h2 data-aos="fade-up">Typescript</h2>
 </div>
  <div className='space-y-2'>
    <h2 data-aos="fade-up">Next.js</h2>
    <h2 data-aos="fade-up">Tailwind</h2>
    
  </div>
</div>



  </div>
     
      </div>
      
    </div>
  )
}

export default Skills
