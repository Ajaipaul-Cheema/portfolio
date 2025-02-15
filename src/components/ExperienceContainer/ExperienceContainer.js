import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
    <div className='experience'>
        <div className='experience__header'>
            <a href={experience.companyLink} className="experience__company link" target="_blank" rel="noopener noreferrer">{experience.company}</a>
            <p className='experience__date'>{experience.date}</p>
        </div>
        <p className='experience__role'>{experience.role}</p>
        {experience.stack && (
            <ul className='experience__stack'>
                {experience.stack.map((item) => (
                <li key={uniqid()} className='experience__stack-item'>{item}</li>
                ))}
            </ul>
        )}
        {experience.sourceCode && (
            <a href={experience.sourceCode} aria-label='source code' className='link link--icon' target='_blank' rel='noopener noreferrer'>
                <GitHubIcon/>
            </a>
        )}
        {experience.livePreview && (
            <a href={experience.livePreview} aria-label='live preview' className='link link--icon' target='_blank' rel='noopener noreferrer'>
                <LaunchIcon/>
            </a>
        )}
  </div>
)

export default ExperienceContainer
