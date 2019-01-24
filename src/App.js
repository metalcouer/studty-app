import React, { Component } from 'react';
import './App.css';
import Card from './components/card'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tags: [
        "string",
        "array",
        "object",
        "includesCallback",
        "easy",
        "medium",
        "hard",
      ],
      methods: [{
        id: 1,
        name: '.map',
        description: 'creates a new array with the results of calling a provided function on every element in the calling array.',
        example: '',
        tags: ["array", "medium"],
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
        },
        {
        id: 2,
        name: '.filter',
        description: 'creates a new array with all elements that pass the test implemented by the provided function.',
        example: "ar words = ['spray', 'limit' 'elite', 'exuberant', 'destruction' 'present'] const result = words.filter(word => word.length > 6) console.log(result) // expected output: Array ['exuberant', 'destruction', 'present']",
        tags: ["array", "medium"],
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
        },
        {
        id: 3,
        name: '.reduce',
        description: 'executes a reducer function (that you provide) on each member of the array resulting in a single output value.',
        example: '',
        tags: ["array", "hard"],
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
        }]
    }
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row navbar justify-content-end pb-5">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link-active" href="http://localhost:3001" target="blank">Hit the Route</a>
            </li>
          </ul>
        </div>
      
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
          <h1 className="pb-2"> Learn JS Once and For All!</h1>
          <p className="pb-2">An app fo rrandomly generating javascript flashcards</p>
          <button className="btn btn-danger gtn-lg" onClick={this.generateQuote}> Push Me ;)</button>
          <div className>

          </div>
          </div>
        </div>





      </div>
    );
  }
}
     

export default App;
