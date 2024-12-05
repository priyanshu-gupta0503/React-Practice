import "./App.css"
import ContactForm from "./Components/ContactForm/ContactForm"
import ContactHeader from "./Components/ContactHeader/ContactHeader"
import Navbar from "./Components/Navbar/Navbar"
// import { useState } from "react"
function App() {

  return (
    <>
     <Navbar/>
     <div className="main_container">
     <ContactHeader/>
     <ContactForm/>
     </div>
   
    </>
  )
}

export default App
