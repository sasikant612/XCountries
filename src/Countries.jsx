import { useEffect } from "react";
import {useState } from "react";
const Card = ({name, flag, abbr}) =>{
    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:'center',
                gap:"4px",
                border:"1px solid black",
                borderRadius:"4px",
                height:"200px",
                width:"200px",
                textAlign:"center"
                  }}
                  >
            <img src={flag} alt={`Flag Of ${abbr}`} style={{width:'100px', height:'100px'}} />
            <h2>{name}</h2>
        </div>
    );
};

const API ="https://xcountries-backend.azurewebsites.net/all"
export default function Countries (){

    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch(API)
        .then((res)=>res.json())
        .then((jsonRes) => setData(jsonRes))
        .catch((error) => console.error("error fetching data:", error))
    },[]);

    return (
        <div style={{
            display:"flex",
            gap:"10px",
            flexWrap:"wrap",
        }}
        >
        {data.map(({name,flag,abbr})=>(
            <Card name={name} flag={flag} abbr={abbr} key={abbr}/>
        )
        )}
        </div>
    );
}