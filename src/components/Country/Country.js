import "./Country.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Country() {
    let params = useParams();
    const [confirmed, setConfirmed] = useState();
    const [recovered, setRecovered] = useState();
    const [deaths, setDeaths] = useState();

    useEffect(()=>{
        const  fetchData = async () => {
            try {
              const ConfirmedResponse = await fetch(`https://api.covid19api.com/country/${params.name}/status/confirmed?from=2020-10-31T00:00:00Z&to=2020-10-31T23:00:00Z`);
              const Confirmedjson = await ConfirmedResponse.json();
              setConfirmed(Confirmedjson.Cases);
              console.log("confirmed "+Confirmedjson.Cases);
              const RecoveredResponse = await fetch(`https://api.covid19api.com/country/${params.name}/status/recovered?from=2020-10-31T00:00:00Z&to=2020-10-31T23:00:00Z`);
              const Recoveredjson = await RecoveredResponse.json();
              setRecovered(Recoveredjson.Cases);
              console.log("recovered "+Recoveredjson.Cases);
              const DeathsResponse = await fetch(`https://api.covid19api.com/country/${params.name}/status/recovered?from=2020-10-31T00:00:00Z&to=2020-10-31T23:00:00Z`);
              const Deathsjson = await DeathsResponse.json();
              setDeaths(Deathsjson.Cases);
              console.log("recovered "+Deathsjson.Cases);

            } catch (error) {
              console.log("error", error);
            }
          };

          fetchData();
        /*
        fetch(`https://icanhazdadjoke.com/j/${params.jokeid}`, {headers: {"Accept" : "application/json"}})
        .then(response => response.json())
        .then(data => {
            console.log(data.joke);
            setJoke(data.joke);
        });*/
    });

    return(
        <div className="results">
            <p>Confirmed: {confirmed}</p>
            <p>Recovered: {recovered}</p>
            <p>Deaths: {deaths}</p>
            <button onClick={()=>{window.location.href = '/'}}>Go back</button>
        </div>
    );
   
}

export default Country;