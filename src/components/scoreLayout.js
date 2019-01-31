import React, { Component } from 'react'

export default class ScoreLayout extends Component {
  render() {
    return (
      <div className="score_board">
        <strong>Diamond Left :  {this.props.diamondLeft} </strong>
      </div>
    )
  }
}
