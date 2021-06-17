import React, {useEffect, useState,} from "react";
import "./style.css"

function Staff() {
  const [info,setInfo] = useState([])
 
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=20")

        .then(res => res.json())
        .then(
          (results) => {
            setInfo(results.results)
            console.log(results)
          },
     
          (error) => {
            console.log(error)
          }
        )
    }, [])
   
  
      return (
          <div>
          <p>cool guys</p>
          {info.length && info[1].name.first}
          </div>
      );
    
  }
  export default Staff