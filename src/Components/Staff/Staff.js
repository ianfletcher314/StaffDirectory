import React, {useEffect, useState,} from "react";
import  Table from "../Table/Table"

function Staff() {
  const [info,setInfo] = useState([])
 
   
    
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
          <div >
          {info.length &&  <Table info={info} setInfo={setInfo} />}
          </div>
      );
    
  }
  export default Staff