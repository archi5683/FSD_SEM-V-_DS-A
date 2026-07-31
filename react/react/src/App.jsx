import React from 'react' //import->add React (library) from node modules
//import Student from './components/Student' //This line is added automatically because we called the component. 
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
//import export is a part of ES6 (ECMAScript 6) which is a JavaScript standard. It allows you to import and export modules in your code, making it easier to organize and reuse code across different files and projects.
const App = () => { //Arrow function (App naam ka function create kiya hai)
  return (
    <div>
      {/* <Student/> <br/> 
      {/*This line is added automatically. It is used to call the Student component in the App component.*/}
      {/* <Student/> <br />
      <Student/> <br />
      <Student/> */}
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App //export means acess krna (koi dusra file ya folder iss app naam ke function ko acess kr skta h)
