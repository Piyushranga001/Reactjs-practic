import React from 'react'

const App = () => {
  return (



    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log("form Submit")
      }} action="submit">
        <input type="text" />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
