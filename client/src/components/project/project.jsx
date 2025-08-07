import './project.css'
import { useState } from 'react'
import portfolio_1 from '../../assets/portfolio-1.png'
import portfolio_2 from '../../assets/portfolio-2.png'
import portfolio_3 from '../../assets/portfolio-3.png'
import portfolio_4 from '../../assets/portfolio-4.png'
import portfolio_5 from '../../assets/portfolio-5.png'
import portfolio_6 from '../../assets/portfolio-6.png'
import githubIcon from '../../assets/github-icon.png'

function project() {
  const projects = [
    { id: 1, image: portfolio_1, alt: 'portfolio-1', link: 'https://github.com/rohangit-hub', technologies: ['React', 'Node.js'], title: 'E-commerce Website' },
    { id: 2, image: portfolio_2, alt: 'portfolio-2', link: 'https://github.com/rohangit-hub', technologies: ['Node.js', 'Express'], title: 'API Backend' },
    { id: 3, image: portfolio_3, alt: 'portfolio-3', link: 'https://github.com/rohangit-hub', technologies: ['Html', 'CSS', "Js"], title: 'Portfolio Website' },
    { id: 6, image: portfolio_6, alt: 'portfolio-6', link: 'https://github.com/rohangit-hub', technologies: ['Next.js', 'Node.js'], title: 'Full Stack App' },
    { id: 4, image: portfolio_4, alt: 'portfolio-4', link: 'https://github.com/rohangit-hub', technologies: ['React', 'Node.js'], title: 'E-commerce Website' },
    { id: 5, image: portfolio_5, alt: 'portfolio-5', link: 'https://github.com/rohangit-hub', technologies: ['React', 'Node.js'], title: 'E-commerce Website' }
  ];

  // State for filtering
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique technologies
  const allTechnologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects based on selected technology and search term
  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || project.technologies.includes(selectedFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Duplicate the filtered projects to match original structure if needed
  const allProjects = [...filteredProjects, ...filteredProjects];

  return (
    <div className='project-container font-roboto' id='project'>
      <div className='project-left'>
        {/* Filter Buttons */}
        <div className='filter-container'>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`filter-button ${selectedFilter === tech ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className='project-left-img-container'>
          {allProjects.map((project, index) => (
            <div key={index} className='project-card'>
              <img src={project.image} alt={project.alt} className='project-left-img' />
              <div className='project-info'>
                <h3 className='project-title'>{project.title}</h3>
                <div className='project-technologies'>
                  {project.technologies.map(tech => (
                    <span key={tech} className='tech-tag'>{tech}</span>
                  ))}
                </div>
              </div>
              <div className='github-icon-container'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <img src={githubIcon} alt='GitHub' className='github-icon' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='project-right'>
        <div className='project-right-heading'>
            Know My<br />Projects
        </div>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Search Projects'
            className='search-input'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className='search-icon'>🔍</span>
        </div>
      </div>
    </div>
  )
}

export default project