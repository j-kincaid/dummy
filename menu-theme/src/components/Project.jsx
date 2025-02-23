import React from 'react';

const Project = ({ data, reverse }) => {
  return (
    <article className='project'
        style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <div className='image'>
            <img src={data.image} alt={data.title} />
        </div>
        <div className='content'>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            </div>
      <a href={data.deployed} target='_blank' rel='noopener noreferrer'>View more...</a>
    </article>
  );
};

export default Project;