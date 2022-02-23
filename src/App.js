import React, { Component } from 'react'
import Profile from './Profile'

export default class App extends Component {
  show = () => {
    this.setState ({ 
      shows : !this.state.shows
    });
  }
  state={
    fullName: "hella",
    bio:"cv",
    imgSrc : "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
    profession:"technicien" ,
    shows :false
  }
  render() {
    

    return (
      <div className='App'>
        <button onClick={this.show}>click me</button>
       {(this.state.shows)?
        <Profile profile={this.state}/>: null
       }
      </div>
    )
  }
}
