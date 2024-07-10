const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
        <div className="img">
            <h1>About Me!
        
            <br/>
            
I am a Jr Software Engineer with a diverse background, passionate about crafting innovative solutions that make a positive impact. My experience in the dental/service field honed my ability to adapt quickly, thrive in high-pressure environments, and collaborate effectively. Now, I'm translating these skills into the tech world, eager to contribute to projects that push boundaries and create meaningful change.
</h1>
<h1>Languages: Javascript, Python, HTML, CSS, EJS</h1>

<h1>Frameworks, Libraries and Services: jQuery, Node, AJAX, React, ExpressJS, MongoDB, Mongoose, Django</h1>

<h1>Management and Deployment: Git, Github, Slack, Vercel, Render, Netlify</h1>
            
            <img src='https://imgur.com/VDiCrb5.png'/>
        </div>
        <div className="project-one-card">
         Capitals Trivia 
            <a className="link-one" href="https://github.com/geno223/capitalsTrivia">Github URL</a>
            <a className="link-two" href="https://geno223.github.io/capitalsTrivia/">Deployed Site</a>

        </div>
        <div className="project-two-card">
           NFL Playoffs
            <a className="link-one" href="https://github.com/geno223/project2">Github URL</a>
            <a className="link-two" href="https://ej-seal-project2.onrender.com/">Deployed site</a>
        </div> 
    </div>
}

// export the component
export default Projects