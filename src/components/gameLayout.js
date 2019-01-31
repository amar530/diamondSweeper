import React, { Component } from 'react'
import questionImage from '../assets/images/question.png'
import diamond1 from '../assets/images/diamond.png';
import '../style/index.css'
import GameBoardLayout from './GameBoardTable';
import ScoreLayout from './scoreLayout';
export default class GameLayout extends Component {
    constructor(props){
        super(props);
        this.state={
            hiddenImage:questionImage,
            diamond_list:[],
            countDiamond:0,
        }    
        this._click=this._click.bind(this);
    }
    
    countRandom(n){
        for(var i=0;i<n;i++){
            var randomValue=Math.floor((Math.random()*64)+1);
            this.state.diamond_list.push(`image_${randomValue}`)
            if(this.state.diamond_list.includes(`image_${randomValue}`)) continue;
            this.setState({
                diamond_list:this.state.diamond_list,
            })
        }
    }
    componentDidMount=()=>{
        this.countRandom(8)
        // console.log(this.state.diamond_list)
    }
// click on question    
    _click=(e)=>{
      const{diamond_list}=this.state;
      for(var i=0;i<diamond_list.length;i++){
          debugger
          if(diamond_list[i]===e.target.id){
            this.setState({
                [e.target.name]:e.target.src=diamond1,
                countDiamond:this.state.countDiamond+1
            })
            break;
          }
          else{
            this.setState({
                [e.target.name]:e.target.src='',
               })
          }
      }
    }

// render Table
    renderTable=()=>{
        var trs=[];
        var idCount=0;
        for (let index = 1; index <=8; index++) {
            var tds=[];
            for (let tds_index = 1; tds_index <=8; tds_index++) {
                idCount++
                tds.push(
                    <td onClick={this._click} key={tds_index}>
                        <img className={"hiddenImage image_"+idCount } id={"image_"+idCount} name={"name_"+idCount} src={this.state.hiddenImage} alt=""/>
                    </td>
                )                
            }
        trs.push(<tr key={index}>{tds}</tr>)
        }
        return trs;
    }
  render() {
      const{countDiamond}=this.state;
      const diamondLeft=8-countDiamond;
    return (
        <div className="game_layout">
        <br/>
            <ScoreLayout diamondLeft={diamondLeft}/>
            <br/>
            <GameBoardLayout cTable={this.renderTable()}/>
        </div>
    )
  }
}
