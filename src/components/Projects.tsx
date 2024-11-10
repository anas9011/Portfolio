import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
 {
  id: 0,
  title: "Static Iteractive Resume",
  desc: "A TypeScript-based interactive resume built with Html & Css ",
  img: "/hackathon_01.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
 },
];

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:-0 xl:gap-y-10 md:grid-cols-2 lg:grid-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
