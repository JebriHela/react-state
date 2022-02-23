import React, { Component } from 'react'

export default class Profile extends Component {
    state={
        time:0
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                time :this.state.time +1
            })
        },1000);
    }
  render() {
    return (
      <div>
          <h1>{this.props.profile.fullName}</h1>
          <h4>{this.state.time}</h4>
          <h3>{this.props.profile.bio}</h3>
          <h3>{this.props.profile.profession}</h3>
          <img src={this.props.profile.imgSrc}/>
      </div>
    )
  }
}
