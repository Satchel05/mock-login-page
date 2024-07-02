import { useState } from "react";
import './App.css';
import ControlledForm from "./components/ControlledForm";

function App() {

  let statuses = [
    "empty",
    "typing",
    "error",
    "submitting",
    "success"
  ]

  return (
    statuses.map((status) => {
      return (
          <ControlledForm status={status}/>
      );
    })
  )
}

export default App;
