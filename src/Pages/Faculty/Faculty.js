import React from "react";
import classes from "./Faculty.module.css";
import AssistantProfessor from "./AssistantProfessor";
import Professor from "./Professor";
import LabAssistant from "./LabAssistant";
import PlacementFaculty from "./PlacementFaculty";
import Hod from "./Hod";
import Footer from "../Activities/Components/Footer/Footer";

const Faculty = () => {
  return (
    <div className={classes.container}>
      <Hod/>
      <AssistantProfessor/>
      <Professor/>
      <LabAssistant/>
      <PlacementFaculty/>
      <Footer/>
      
    </div>
  );
};

export default Faculty;
