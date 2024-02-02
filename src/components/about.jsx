import { useEffect, useState } from "react";
import "../scss/about.scss";
import AnimatedLetters from "./animatedLetters";
import { FaAngular, FaHtml5, FaCss3, FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
            <p>
              As a dedicated full-stack developer, I am fueled by a genuine love
              for programming and the thrill of solving complex problems. I find
              joy in crafting elegant solutions to challenging issues, whether
              it's optimizing code for efficiency or architecting robust
              systems. The dynamic nature of programming keeps me engaged, and
              I'm always eager to explore new technologies to enhance my skills.
            </p>

            <br />

            <p>
              Beyond the world of coding, I have a diverse set of interests.
              When I'm not immersed in lines of code, you'll likely find me
              engrossed in a captivating book or engaged in a thrilling gaming
              session. I believe in the importance of maintaining a balance
              between the virtual and real worlds, finding inspiration in both
              the narratives of literature and the strategic challenges
              presented by games.
            </p>

            <br />

            <p>
              My journey into the realm of full-stack development is
              complemented by a strong foundation in engineering. As an
              engineering major, I've always been fascinated by the intricacies
              of computers and how they operate. This innate curiosity has
              driven me to delve deep into understanding the architecture and
              functionality of computer systems, providing a solid base for my
              endeavors in software development.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FaAngular color="#dd0031" />
              </div>
              <div className="face2">
                <FaHtml5 color="#f06529" />
              </div>
              <div className="face3">
                <FaCss3 color="#28a4d9" />
              </div>
              <div className="face4">
                <FaReact color="#5ed4f4" />
              </div>
              <div className="face5">
                <FaJsSquare color="#efd81d" />
              </div>
              <div className="face6">
                <FaGitAlt color="#ec4d28" />
              </div>
            </div>
          </div>
        </div>

        <Loader type="ball-scale-multiple" />
      </>
    );
};
export default About;
