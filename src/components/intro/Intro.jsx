import React from "react";
import "./intro.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function Intro() {
  const handleSocialClick = (type) => {
    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/kalyan-saxena/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/kalyansaxena", "_blank");
    } else if (type === "instagram") {
      window.open("https://www.instagram.com/kalyan_saxena/", "_blank");
    }
  };

  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <motion.h2
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
            }}
            className="i-intro"
          >
            Hi there, I'm
          </motion.h2>
          <motion.h1
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
            }}
            className="i-name"
          >
            Kalyan Saxena Mutyala
          </motion.h1>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
            }}
            className="i-title"
          >
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Developer</div>
              <div className="i-title-item">Rest API Developer</div>
              <div className="i-title-item">MERN Stack Mentor</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
            }}
            className="i-social-profiles"
          >
            <div className="i-linkedin">
              <LinkedInIcon
                className="icon"
                onClick={() => handleSocialClick("linkedin")}
              />
            </div>
            <div className="i-github">
              <GitHubIcon
                className="icon"
                onClick={() => handleSocialClick("github")}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="i-right">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="i-img"
        ></motion.div>
        {/* <div className="i-img"></div> */}
      </div>
    </div>
  );
}

export default Intro;
