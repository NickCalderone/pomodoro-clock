import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.inc = this.inc.bind(this)
  }
  inc(folder, key){
    this.props.inc(folder, key)
  }
  render(){
    return (
      <div>
        <h1>working</h1>
        <h1>{this.props.store.timers.min}</h1>
        <button onClick={() => this.inc('timers', 'min')}>increment minutes</button>
        <h1>{this.props.store.timers.sec}</h1>
        <button onClick={() => this.inc('timers', 'sec')}>increment seconds</button>
      </div>
    )
  }
}
export default Clock