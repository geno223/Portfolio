const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
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