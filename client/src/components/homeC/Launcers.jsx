import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Launcers() {

    const {data, setdata} = useState([])

    function returnAllLaunchers() {
        axios.get("http://localhost:3000/api/launchers")
        .then((response)=>{
            console.log(response.data);
        })
    }

    useEffect(()=>{
        // setdata( returnAllLaunchers())
    })


  return (
    <div>
        <p>{data}</p>
    </div>
  )
}
