import React, {useEffect,} from "react";

function Staff(info) {
 
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=20")

        .then(res => res.json())
        .then(
          (results) => {
          info = results
            console.log(results)
          },
     
          (error) => {
            console.log(error)
          }
        )
    }, [])
   
  
      return (
          <div>
          <p>cool guys</p>,
          {/* <p>{info}</p> */}
          </div>
 
      );
    
  }
  export default Staff