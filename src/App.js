import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RawPost from "./components/RowPost/RawPost";
import { originals,action,horror,comedy } from "./urls";
// import axios from 'axios'
// import { useState } from "react";

function App() {
  // const [state,setState] = useState([])
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost title='Netflix Originals' url ={originals}/>
      <RawPost title='Action Movies' isSmall url={action}/>
      <RawPost title='Horror Movies' isSmall url={horror}/>
      <RawPost title='Comedy Movies' isSmall url={comedy}/>

      {/* <h1>Rest Api</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data)
          setState(response.data)
        })
      }}>Clicke me</button>
        {state.map((obj,index)=>{
            return(
              <div>
                <h1>{index}</h1>
                <h4>{obj.title}</h4>
              </div>
            )
        })} */}
    </div>
  );
}

export default App;
