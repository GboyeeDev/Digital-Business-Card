import image from "./dev.jpg"
import email from "./email.png"
import linkedin from "./linkedin.png"
import "./Info.css"

function Info() {
    return(
        <div className="info">
            <img src={image} className="img" alt="description" />
            <h1 className="name">Olugboyega Ojelabi</h1>
            <h2 className="title">Frontend Developer</h2>
            <a className="website" href="https://olugboyega-ojelabi.netlify.app">olugboyega-ojelabi.netlify.app</a>
            <div className="button">
                <a href="mailto:olugboyega.ojelabi@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="email">
                        <img src={email} alt="description of icon" />&nbsp; &nbsp; Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ojelabi-olugboyega-julius/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
                    <button className="linkedin">
                        <img src={linkedin} alt="description of icon" />&nbsp; &nbsp; LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Info;
