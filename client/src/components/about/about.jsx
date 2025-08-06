import './about.css'

function about() {
  return (
    <div className='about-container font-roboto' id='about'>
        <div className='about-left'>
            <p className='about-left-heading'> Know Me</p>
            <p className='about-left-heading'> More</p>
        </div>

        <div className='about-right'>
          <p className='about-right-text'>"I am a <span className='font-normal underline'>MERN Full Stack Developer</span> focused on building scalable, secure, and user-centric 
            applications across <span className='font-normal underline'>web and mobile platforms</span>. My core strengths lie in designing clean backend architectures, 
            developing responsive interfaces, and integrating intelligent features that align with business objectives. 
            I approach each project with a strong emphasis on performance, maintainability, and user experience."</p>
          <br /><br />
          <p className='about-right-text'>"Currently,<span className='font-normal underline'> I am actively contributing to enterprise-grade solutions in domains
            such as e-commerce, healthcare, and workflow automation. These projects involve real-time systems, AI-powered 
            enhancements, and robust security implementations. </span> 
            I work collaboratively in agile teams, continuously refining my skills and staying aligned with modern development 
            practices to deliver impactful digital products."</p>
        </div>
    </div>
  )
}


export default about