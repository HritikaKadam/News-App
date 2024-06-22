import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const FetchData = ({ cat }) => {
  const[Data, setData] = useState("");
  /*const fetchData = async () =>{
    await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=990f5ef7bb8c4dc79267c6f8e849c518").then((res) => console.log(res));
    to verify if any response is fetched through the API

    useeffect is used to call the fetchData function, everytime the page refreshes the useeffect calls the function.
    Added the function inside the hook sue to an error being raise regarding the use of React Hooks.
    Ref: https://www.shecodes.io/athena/5502-explaining-react-hooks-and-examples
    */
    
    useEffect(() => {
      const fetchData = async () =>{
    await axios
    .get( /*adding an if statement to make sure the categories are represented as per the titles. use backsticks (`)for the conditional links sucha as used below*/
      cat 
      ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=990f5ef7bb8c4dc79267c6f8e849c518`
      : "https://newsapi.org/v2/top-headlines?country=in&apiKey=990f5ef7bb8c4dc79267c6f8e849c518"

    ).then((res) => setData(res.data.articles));
      };
    fetchData();
  }, [cat]);

  
  return <div className="container my-4">
      <h3>HEADLINES</h3>
         <div className=" container d-flex justify-content-cneter flex-column my-4 " style={{minHeight:"100vh"}} >{
          Data 
          ? Data.map((items, index) => (
            <>
            <div className="container my-3 p-2" 
            style={{width:"800px", boxShadow:"4px 4px 10px silver", borderRadius:"10px"}}>

            <h5 className="my-1">{items.title}</h5>

            <div  className="d-flex justify-content-cneter flex-column my-4">
              //do not have the src in quotes
              <img src={items.urlToImage} alt=" "
              className="img-fluid" 
            style={{width:"100%",height:"300px",objectFit:"cover"}} />
            </div>
            
            <p>{items.description}</p>

            <Link to={items.url} target="_blank">View More</Link>

            </div>

            </>
          ))
          :"LOADING"
          //this is a if statement to check whether the data is available or not + it fetches the titles of the news.
          }

    </div>

    </div>
 
}

export default FetchData
