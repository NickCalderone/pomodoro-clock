import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.pad = this.pad.bind(this)
  }
  inc(folder, key){
    this.props.inc(folder, key)
  }
  dec(folder, key){
    this.props.dec(folder, key)
  }
  pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
  
  render(){
    return (
      <div>
        <h1 id='timer-label'>session</h1>
        <h1 id='time-left'>{this.pad(this.props.store.display.min, 2)}:{this.pad(this.props.store.display.sec, 2)}</h1>
        <h1 id='session-label'>session length</h1>
        <h1 id='session-length'>{this.props.store.timers.session}</h1>
        <button id='session-increment' onClick={() => this.inc('timers', 'session')}>increment session</button>
        <button id='session-decrement' onClick={() => this.dec('timers', 'session')}>decrement session</button>
        <h1 id='break-label'>break length</h1>
        <h1 id='break-length'>{this.props.store.timers.break}</h1>
        <button id='break-increment' onClick={() => this.inc('timers', 'break')}>increment break</button>
        <button id='break-decrement' onClick={() => this.dec('timers', 'break')}>decrement break</button>
        <button id='start_stop'>start/stop</button>
        <button id='reset'>reset</button>

      </div>
    )
  }
}
export default Clock