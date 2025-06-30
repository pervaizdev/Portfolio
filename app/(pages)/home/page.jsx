import React from "react";
import Start from "@/app/components/hero/page.jsx";
import Marquee from "@/app/components/marquee/marquee.jsx";
import Project from "@/app/components/projects.jsx"
import AboutMe from "@/app/components/aboutme.jsx"
import Expereince from "@/app/components/experience.jsx";
import ContactForm from "@/app/components/contactform.jsx";

// HomeComponent.jsx
const HomeComponent = () => {
  return (
<>
      <Start />
      <Marquee />
      <AboutMe />
      <Expereince />
      <Project />
      <ContactForm />
      
  
      
  </>  
  );
};;

export default HomeComponent;
