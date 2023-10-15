import React, {useCallback, useEffect, useState} from 'react'
import './input.css'

import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Map from "./components/Map";

function App() {
    const [ipAddress, setIpAddress] = useState('192.212.174.101');
    const [output, setOutput] = useState(null);

    const fetchData = useCallback(() => {
        if (ipAddress) {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_5DSOF7NbUGY9vKLXJNuseuLa1atG8&ipAddress=${ipAddress}`, {
                method: "GET"
            })
                .then(response => response.json())
                .then(data => {
                    if (data.location && data.location.city && data.location.country) {
                        setOutput(data);
                    } else {
                        console.log("Błędne dane");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [ipAddress]);


    useEffect(()=>{
      fetchData();
  }, [fetchData])


    const handleData = (e) => {
        setIpAddress(e);
    }

    return (
        <>
            <Navbar userInput={handleData} />
            <Result dataToDispaly={output}/>
            {output && output.location && <Map mapCoordinates ={output.location}/>}
        </>
    );
}

export default App;
