import React, { Component } from "react";
import "./Home.css";

//since the api doesnt take any parameters (doesnt need input from ur html)
//use life cycle method to fetch the data

class Home extends Component{

    constructor(){
        super();
        this.state={
            countries: [[]],
            chosenCountry: "cape-verde"
        }
        this._clicked = this._clicked.bind(this);
    }

    componentDidMount(){
        //fetch api to get countries
        fetch("https://api.covid19api.com/countries")
        .then(response => response.json())
        .then(data => {
            const countriesList = [];
            data.forEach(element => {
                let countryPair = [element.Country, element.Slug];
                countriesList.push(countryPair);
            });
            this.setState({
                countries: countriesList.sort()
            })
        });
    }

    _clicked(){
        //change the url to match the url for the country route
        window.location.href = `/result/${this.state.chosenCountry}`;
    }

    handleCountryChange= (event) => {
        this.setState({ chosenCountry: event.target.value });
    }

    render(){
        return(
            <div className="home">
                <label>Choose A Country</label>
                <select className="drop-down" onChange={this.handleCountryChange}>
                    {this.state.countries && this.state.countries.map((country)=> 
                    <option key={country[0]} value={country[1]}>{country[0]}</option>
                    )}
                </select>
                <button onClick={()=>this._clicked()}>Get Data</button>
            </div>
        );
    }
}

export default Home;

/*
class Home extends Component{

    constructor(){
        super();
        this.state={
            joke: {}
        }
        this._clicked = this._clicked.bind(this);
    }

    componentDidMount(){
        //fetch api to get random joke
        fetch("https://icanhazdadjoke.com/", {headers:{"Accept" : "application/json"}})
        .then(response => response.json())
        .then(data => {
            this.setState({
                joke: data
            })
            console.log(data.id);
            console.log(data.joke);
        })
    }
    _clicked(){
        //change the url to match the url for the joke route
        //so that joke component can be rendered
        window.location.href = `/jokes/${this.state.joke.id}`;
    }

    //get id of the joke = this.state.joke.id
    //get actual joke = this.state.joke.joke
    render(){
        return(
            <div className="home">
                <button onClick={()=>this._clicked()}>Joke me</button>
            </div>
        );
    }
}

export default Home;*/