//component means ek part of code jo reusable hota h just like a function. component is predefined code that is reusable. First letter is is capital and has an extesion.jsx
//component (in this case student.jsx) -> app.jsx -> main.jsx -> index.css 
//to run any react software go to folder and open in Integrated terminal and write command "npm run dev" and press enter. Open the link in browswer.
//call the function in app,jsx because it is the parent of student.jsx.
import React from 'react'

const Student = () => {
  return (
    <div style={{backgroundColor: 'lightgray', border: '2px solid red' , height: '300px', width: '300px'}}>
        <h2 style ={{ color: 'red'}}>Student Info</h2>
        <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsX29mZmljZV8zMF92ZWN0b3JfZmxhdF9jbGlwYXJ0X2lsbHVzdHJhdGlvbl9vZl82X3llYXJzX180MTM1NzUyNy01ZGM0LTQ4YTUtYmFkYi1lN2UxNTg0ODU4N2EuanBn.jpg" alt="Student" height= {'150'} width={'150'}/>
        <h3>Student Name: Adya</h3>
        <h4>B.Tech(DS-A)</h4>
    </div>
  )
}

export default Student