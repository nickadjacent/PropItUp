import React, { Component } from 'react';

class PersonCard extends Component {
    constructor({ first_name, last_name, age, hair_color }) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age
        this.hair_color = hair_color;
        this.state = {
            clickCount: this.age
        }

    }

    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }


    render = () => {
        return (
            <div>
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.state.clickCount}</p>
                <p>Hair Color: {this.props.hair_color}</p>
                <button onClick={this.handleClick}>Birthday Button for {this.first_name} {this.last_name}</button>
            </div >
        );

    }

};


export default PersonCard;