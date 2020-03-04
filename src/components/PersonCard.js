import React, { useState } from 'react';

// for class import also {Components}

// class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clickCount: this.props.age
//         }
//     }

//     handleClick = () => {
//         this.setState({
//             clickCount: this.state.clickCount + 1
//         })
//     }

//     render = () => {
//         return (
//             <div>
//                 <h1>{this.props.last_name}, {this.props.first_name}</h1>
//                 <p>Age: {this.state.clickCount}</p>
//                 <p>Hair Color: {this.props.hair_color}</p>
//                 <button onClick={this.handleClick}>Birthday Button for {this.props.first_name} {this.props.last_name}</button>
//             </div >
//         );
//     }
// };


const PersonCard = props => {

    const [state, setState] = useState({
        clickCount: props.age
    })

    const clickHanler = () => {
        console.log(state)
        setState({
            clickCount: state.clickCount + 1
        })
    }

    return (
        <div>
            <h1>{props.last_name}, {props.first_name}</h1>
            <p>Age: {state.clickCount}</p>
            <p>Hair Color: {props.hair_color}</p>
            <button onClick={clickHanler}>Birthday Button for {props.first_name} {props.last_name}</button>
        </div>
    )
}


export default PersonCard;