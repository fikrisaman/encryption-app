import React from "react";

// Importing style
import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={classes.Introduction}>
      <header>Simple encryption app</header>
      <p>This app encrypts string/text based on a random generated key</p>
    </div>
  );
};

export default Introduction;
