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
        description: 'Fine Art Portfolio',
        deployed: "https://j-kincaid.github.io/Open_studio/"
    },
    {
        id: 2,
        title: 'Kitten Saga',
        image: kitten,
        description: 'Kitten Saga is a nonlinear story/game created with Twine.',
        deployed: 'https://j-kincaid.github.io/KittenSaga.html'
    },
    {
        id: 3,
        title: 'MneMonocle',
        image: MneMonocle,
        description: 'MneMonocle is a A new, imaginary, augmented reality, wearable mnemonic “device”.',
        deployed: 'https://j-kincaid.github.io/emerging-tech/'
    },
    {
        id: 4,
        title: 'Developer Internship, Dimensional Innovations, Summer 2023',
        image: Menorah,
        description: 'During my time as a Developer Intern at Dimensional Innovations I developed a web application in Vue and Electron that went on display in the Legacy Hall permanent installation at Menorah Medical Center in Leawood, Kansas.',
        deployed: 'https://dimin.com/di-internship-program'
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