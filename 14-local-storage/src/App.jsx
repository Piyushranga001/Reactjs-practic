import React from 'react'

const App = () => {
  const user = {
    username : "Piyush",
    age : 20,
    Profession : "Student"
  }

  const userDate = localStorage.setItem("User",JSON.stringify(user));

  console.log(JSON.parse(localStorage.getItem("User")));
  
  return (
    <div>
      
    </div>
  )
}

export default App
