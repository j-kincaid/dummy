import React from 'react';
import fineArt from '../assets/tinyPatio.jpg';
import kitten from '../assets/kittenZoe.jpg';
import MneMonocle from '../assets/mne.png';
import Menorah from '../assets/mmc.jpg';
import Project from './Project';

const projectList = [
    {
        id: 1,
        title: 'Fine Art',
        image: fineArt,
        deployed: "https://j-kincaid.github.io/Open_studio/"
    },
    {
        id: 2,
        title: 'Kitten Saga',
        image: kitten,
        deployed: 'https://j-kincaid.github.io/KittenSaga.html'
    },
    {
        id: 3,
        title: 'MneMonocle',
        image: MneMonocle,
        deployed: 'https://j-kincaid.github.io/emerging-tech/'
    },
    {
        id: 4,
        title: 'Developer Internship, Dimensional Innovations, Summer 2023',
        image: Menorah,
        deployed: 'https://deployed.com'
    }
];

const Projects = () => {
  return (
    <section id='projects' className='divider'>
       <h2>My Projects</h2>
        <div>
            {projectList.map((project, i) => (
                <Project key={project.id} data={project} reverse={i% 2 === 0} />
            ))}
        </div>
    </section>
  );
};

export default Projects;