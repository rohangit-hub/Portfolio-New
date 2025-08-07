import './skill.css'

function skill() {
  return (
    <div className='skill-container font-roboto' id='skill'>
        <div className='skill-left'>
            <div className='skill-left-heading'>
                Know My<br />Skills
            </div>
        </div>

        <div className='skill-right'>
          <p className='skill-right-text highlight-text'>"My technical skill includes"</p>
          <br />
          <ul className='skill-right-list'>
              <li>Html</li>
              <li>Tailwind_CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>React_Native</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQl/SQl</li>
              <li>Next.js</li>
              <li>Docker</li>
              <li>Git/github</li>
              <li>Render</li>
              <li>AWS</li>
              <li>Postman</li>
          </ul>
        </div>
    </div>
  )
}

export default skill