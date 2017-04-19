import React, { Component } from 'react';
import './App.css';
import ListMessages from './component/ListMessages'

import { connect } from 'react-redux'
import { getUpdates, repeatRequests, getFoto } from './Actions/TelegramActions'


class App extends Component {


shouldComponentUpdate(nextProps, nextState) {
  console.log(JSON.stringify(this.props.messages) === JSON.stringify(nextProps.messages))
  // if (this.props.messages.length === nextProps.messages.length) {
  //   return false
  // }
  return !(this.props.messages.length === nextProps.messages.length)
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'} className="App-logo" alt="logo" />
          <h2>Telegram Bot message Api - @NishtyakBot</h2>

        </div>

        <ListMessages messages={this.props.messages } >

        </ListMessages>



      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    messages: state.TelegramMessages.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getUpdates: dispatch(getUpdates()),
    repeatRequests: dispatch(repeatRequests())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

