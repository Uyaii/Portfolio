/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "../scss/home.scss";
import logoTitle from "../assets/pinkM.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "./animatedLetters";
import Logo from "./logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["a", "r", "y", "a", "n", "n", "e"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

    
    useEffect(() => {
         setTimeout(() => {
            setLetterClass("text-animate-hover")
        },4000)
    }, [])


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />

            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img src={logoTitle} alt="developer" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <h2>Full Stack Developer/ React Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Logo />
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  );
};
export default Home;
