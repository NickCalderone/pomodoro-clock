import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleBeep = this.handleBeep.bind(this)
    this.reset = this.reset.bind(this)
  }
  intervalId = 0
  inc(folder, key){
    if (!this.props.store.started){
      if (this.props.store[folder][key] < 60){
        this.props.inc(folder, key)
        this.props.inc('display', 'min')
        this.props.set('display', 'sec', 0)
      }   else return
    }
  }
  dec(folder, key){
    if (!this.props.store.started){
        if (this.props.store[folder][key] > 1){
        this.props.dec(folder, key)
        this.props.dec('display', 'min')
        this.props.dec('display', 'sec', 0)
      }
    }
  }
  handleTimer(){
    if (this.props.store.display.sec >= 1){
      this.props.dec('display', 'sec')
      return
    } else if (this.props.store.display.min >= 1){
      this.props.dec('display', 'min')
      this.props.set('display', 'sec', 59)
      return
    } else if (this.props.store.flip){
      this.handleBeep()
      this.props.set('display', 'min', this.props.store.timers.break)
      this.props.set('display', 'sec', 0)
      this.props.flip('flip')
      return
    } else {
      this.handleBeep()
      this.props.set('display', 'min', this.props.store.timers.session)
      this.props.set('display', 'sec', 0)
      this.props.flip('flip')
    }
  }
  startStop(){
    
    if (!this.intervalId){
      this.intervalId = setInterval(this.handleTimer, 1000)
    } else {
      clearInterval(this.intervalId)
      this.intervalId = 0
    }
    this.props.flip('started')
  } 
  handleBeep(){
    const beep = document.getElementById('beep')
    beep.play()
  }
  reset(){
    let audio = document.getElementById('beep')
    audio.pause()
    audio.currentTime = 0
    this.props.reset()
    if (this.intervalId){
      clearInterval(this.intervalId)
      this.intervalId = 0
    }
  }
  
  render(){
    return (
      <div>
        <h1 id='timer-label'>{this.props.store.flip ? 'session' : 'break'}</h1>
        <h1 id='time-left'>{this.props.store.display.min.toString().padStart(2, '0')}:{this.props.store.display.sec.toString().padStart(2, '0')}</h1>
        <h1 id='session-label'>session length</h1>
        <h1 id='session-length'>{this.props.store.timers.session}</h1>
        <button id='session-increment' onClick={() => this.inc('timers', 'session')}>increment session</button>
        <button id='session-decrement' onClick={() => this.dec('timers', 'session')}>decrement session</button>
        <h1 id='break-label'>break length</h1>
        <h1 id='break-length'>{this.props.store.timers.break}</h1>
        <button id='break-increment' onClick={() => this.inc('timers', 'break')}>increment break</button>
        <button id='break-decrement' onClick={() => this.dec('timers', 'break')}>decrement break</button>
        <button id='start_stop' onClick={() => this.startStop('display', 'min')}>start/stop</button>
        <button id='reset' onClick={this.reset}>reset</button>
        <audio
                id='beep'
                src='https://actions.google.com/sounds/v1/alarms/beep_short.ogg'
              />
      </div>
    )
  }
}
export default Clock