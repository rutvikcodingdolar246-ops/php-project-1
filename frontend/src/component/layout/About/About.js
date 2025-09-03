import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";


const About = () => {
  const visitInstagram = (url) => {
    window.location = url;
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div className="aboutSectionProfiles">
          <div className="profileCard">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhdbx3oym/image/upload/v1745251845/whwhn2pja8wl151dn5um.jpg"
              alt="Rutvik Dolar"
            />
            <Typography>Rutvik Dolar</Typography>
            <Button
              onClick={() =>
                visitInstagram("https://www.instagram.com/rutvik_dolar246?igsh=MWpsZ2ZvNGRvcmR1Mw==")
              }
              color="primary"
            >
              Visit Instagram
            </Button>
          </div>

          <div className="profileCard">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhdbx3oym/image/upload/v1745251844/kwptc70ktwjfcmiumv4k.jpg"
              alt="Devarsh Jasani"
            />
            <Typography>Devarsh Jasani</Typography>
            <Button
              onClick={() =>
                visitInstagram("https://www.instagram.com/devarsh_jasani_3/profilecard/?igsh=MWVkdjVyMnY2djI1Mw==")
              }
              color="primary"
            >
              Visit Instagram
            </Button>
          </div>

          <div className="profileCard">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhdbx3oym/image/upload/v1745253473/yatgcsuniemteohxqorp.jpg"
              alt="Darshan Raval"
            />
            <Typography>Darshan Raval</Typography>
            <Button
              onClick={() => visitInstagram("https://www.instagram.com/darshuraval_")}
              color="primary"
            >
              Visit Instagram
            </Button>
          </div>
        </div>

        <span className="aboutSectionNote">
        This eCommerce website is built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It offers a modern, responsive UI for customers, real-time product listings, secure user authentication, cart and checkout functionality, and powerful admin controls for managing products, users, and orders. The goal is to deliver a full-stack, scalable, and performance-optimized shopping experience from both the customer and admin perspectives.
        </span>

      </div>
    </div>
  );
};

export default About;



