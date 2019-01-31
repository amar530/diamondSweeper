import React, { Component } from 'react'
export default class GameBoardLayout extends Component {    
    render(){
        return(
            <table>
                <tbody>
                    {this.props.cTable}
                </tbody>
            </table>
        )
    }
}