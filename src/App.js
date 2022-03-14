
import './App.css';
import axios from "axios";
import { useState } from 'react'
import { useEffect } from 'react'
import UserList from './UserList';


function App() {

  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((listOfUSer)=>setlistOfUSer(listOfUSer.data)).catch((err)=>console.log(err));
  console.log(listOfUSer);

},

);
  return (
    <div className="App">
     
    
     <UserList listOfUSer={listOfUSer}/> 
    </div>
  ) 
};


export default App;
