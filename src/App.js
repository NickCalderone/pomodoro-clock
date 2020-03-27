import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
  }
  intervalId = 0
  inc(folder, key){
      if (this.props.store[folder][key] !== 59){
      this.props.inc(folder, key)
    } else return
  }
  dec(folder, key){
      if (this.props.store[folder][key] !== 0){
      this.props.dec(folder, key)
    }
  }
  handleTimer(){
    if (this.props.store.display.sec >= 1){
      this.props.dec('display', 'sec')
      return
    } else if (this.props.store.display.min >= 1){
      this.props.dec('display', 'min')
      this.props.set('display', 'sec', 4)
      return
    } else if (this.props.store.flip){
      this.props.set('display', 'min', this.props.store.timers.break - 1)
      this.props.set('display', 'sec', 4)
      this.props.flip()
      return
    } else {
      this.props.set('display', 'min', this.props.store.timers.session -1)
      this.props.set('display', 'sec', 4)
      this.props.flip()
    }
  }
  startStop(){
    if (!this.intervalId){
      this.intervalId = setInterval(this.handleTimer, 1000)
    } else {
      clearInterval(this.intervalId)
      this.intervalId = 0
    }
  }
  
  render(){
    return (
      <div>
        <h1 id='timer-label'>session</h1>
        <h1 id='time-left'>{this.props.store.display.min.toString().padStart(2, '0')}:{this.props.store.display.sec.toString().padStart(2, '0')}</h1>
        <h1 id='session-label'>session length</h1>
        <h1 id='session-length'>{this.props.store.timers.session}</h1>
        <button id='session-increment' onClick={() => this.inc('timers', 'session')}>increment session</button>
        <button id='session-decrement' onClick={() => this.timerLoop('timers', 'session')}>decrement session</button>
        <h1 id='break-label'>break length</h1>
        <h1 id='break-length'>{this.props.store.timers.break}</h1>
        <button id='break-increment' onClick={() => this.inc('timers', 'break')}>increment break</button>
        <button id='break-decrement' onClick={() => this.dec('timers', 'break')}>decrement break</button>
        <button id='start_stop' onClick={() => this.startStop('display', 'min')}>start/stop</button>
        <button id='reset'>reset</button>
      </div>
    )
  }
}
export default Clock