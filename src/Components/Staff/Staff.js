import React, {useEffect, useState,} from "react";
import "./style.css"
import  Table from "../Table/Table"

function Staff() {
  const [info,setInfo] = useState([])
 
    const sortByAge = () => {
      const newInfo = [...info]
      newInfo.sort((a, b) => a.dob.age - b.dob.age)
      setInfo(newInfo)
    }
    
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=10")

        .then(res => res.json())
        .then(
          (results) => {
            setInfo(results.results)
            console.log(results)
          })
          .catch(
     
          (error) => {
            console.log(error)
          }
        )
    }, [])
   
  
      return (
          <div>
           
          <p>cool guys</p>
          {info.length &&  <Table info={info} setInfo={setInfo}/>}
          </div>
      );
    
  }
  export default Staff