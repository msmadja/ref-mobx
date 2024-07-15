import React from "react";
import ReactDOM from "react-dom";
import Books from "./Books/Books";
import "./styles.css";
import { Typography } from "@mui/material";


const App = ()  => {

  return (
    <>
    <Typography variant="h5">
       App
     </Typography>
      <Books />
    </>
  )
}

const ObservedApp = App;

const rootElement = document.getElementById("root");
ReactDOM.render(<ObservedApp />, rootElement);
