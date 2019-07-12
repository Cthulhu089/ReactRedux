import React, { Component, Fragment } from "react";
// import { connect } from 'react-redux'
const survey = [{ id: 1, question: 'How old are you?' }, { id: 2, question: 'Current job?' }]
class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  sendInfoToApi = () => {
    const answers = survey.map((item, index) => {
      return ({ answer: this.state[`answer${index}`] })
    });
    console.log(answers);
  }

  render() {

    return (
      <Fragment >
        {
          survey.map((item, index) => {
            return (
              <Fragment key={item.id}>

                <h2>{item.question}</h2>
                <input value={this.state[`answer${index}`]} onChange={(e) => {
                  this.setState({
                    [`answer${index}`]: e.target.value
                  });
                }} />

              </Fragment >
            )
          })
        }
        <button onClick={() => { this.sendInfoToApi() }}>
          Send info
        </button>
      </Fragment >
    )
  }
}

export default App;