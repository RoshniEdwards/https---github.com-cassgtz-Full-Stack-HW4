import "./Joke.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Joke() {
    let params = useParams();
    const [joke, setJoke] = useState("");

    useEffect(()=>{
        const  fetchData = async () => {
            try {
              const response = await fetch(`https://icanhazdadjoke.com/j/${params.jokeid}`, {headers: {"Accept" : "application/json"}});
              const json = await response.json();
              console.log(json);
              setJoke(json.joke);
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


    //https://icanhazdadjoke.com/j/<joke_id>
    //const {id} = this.props.match.params;
    return(
        <div className="joke">
            <p>{joke}</p>
            <button onClick={()=>{window.location.href = '/'}}>Go back</button>
        </div>
    );
   
}

export default Joke;