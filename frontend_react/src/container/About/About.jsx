import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { images } from "../../constants";
import "./About.scss";
import { urlFor, client } from "../../client";

// static method without sanity
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I'm a good developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I'm a good developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I'm a good developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Web Animations",
//     description: "I'm a good developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [hasError, setHasError] = useState(false);

  // initial load useEffect -- fetching abouts from sanity
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client
      .fetch(query)
      .then((data) => {
        // console.log(data);
        setAbouts(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setHasError(true);
      });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {hasError ? (
          <p
            style={{
              margin: "1rem 20rem",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "x-large",
            }}
          >
            We've hit a snag! Your network seems to be blocking this content.
            Rest assured that it is safe and not harmful to your device or data.
            Consider disabling VPNs or network policies and refreshing, or try a
            different device.
          </p>
        ) : (
          abouts?.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
