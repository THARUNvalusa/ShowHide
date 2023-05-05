// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  firstName = () => {
    this.setState(prevstate => ({firstname: !prevstate.firstname}))
  }

  lastName = () => {
    this.setState(prevstate => ({lastname: !prevstate.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="bgcontainer">
        <h1 className="title">Show/Hide</h1>
        <div className="bottombox">
          <div className="box">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstname ? <p className="namebox">Valusa</p> : ''}
          </div>
          <div className="box">
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastname ? <p className="namebox">Tharun</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
