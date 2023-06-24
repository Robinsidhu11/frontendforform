
import { useState } from 'react';
import './App.css';

function App() {
  const [loading,setLoader]=useState(1)
  async function submitHandle(event){
    event.preventDefault();
    setLoader(null)
    let fullname=event.target[0].value
    let email=event.target[1].value
 
    console.log(fullname,email)
    
    const response=await fetch("http://localhost:4000/api/fillform",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        fullname:fullname,
        email:email
      })
      
    })
    // const response=await axios.post("http://localhost:4000/api/fillform",formData)
    setLoader(1)
    alert("Submited daffa hojo")
    console.log( response.json())
  }

  return (
    <div className="App">
      <form onSubmit={submitHandle}>
        <input required type='text' placeholder='name'></input>
        <input required type='email' placeholder='email'></input>
        <button>submit</button>
        {loading==1?<div></div>:<div>pls wait while submitting</div>}
        
      </form>
    </div>
  );
}

export default App;
