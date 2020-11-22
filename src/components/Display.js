import React from 'react';
import { Link } from "react-router-dom";
import quizObj from './quizObjects';
import Quiz from './Quiz';
import cherryblossom from './images/cherryblossom.png'
import daffodil from './images/daffodil.png'
import daisy from './images/daisy.jpg'
import lily from './images/lily.jpg'
import rose from './images/rose.png'
import sunflower from './images/sunflower.png'
import tulip from './images/tulip.png'
import waterlily from './images/waterlily.png'

class Display extends React.Component{
constructor(props){
    super(props)
    this.state = {value: ""}
}

getString(temp){
    var questions= quizObj.getFlowerDisplay();
    console.log(questions);
    var final = "";
    for(var index = 0; index < questions.length; index++){
        temp = "<img src={" +questions[0][index] + "} alt=" +questions[0][index]+" />"+ questions[0][index];
        final = final.concat(temp);
        console.log(final);
    }
    return final;
}

render(){
    var questions= quizObj.getFlowerDisplay();
    var names = quizObj.getNames();
    return (
    <div>
    <div class = "display">
    <table>
    <tr>
    <td><img src={cherryblossom} alt={names[0][0]} /> <p>{names[0][0]}</p></td>
    <td><img src={daffodil} alt={names[0][1]} /><p>{names[0][1]}</p></td>
    <td><img src={daisy} alt={names[0][2]} /> <p>{names[0][2]}</p></td>
    <td><img src={lily} alt={names[0][3]} /> <p>{names[0][3]}</p>
    </td></tr>
    <tr><td>
    <img src={rose} alt={names[0][4]} /> <p>{names[0][4]}</p></td>
    <td><img src={sunflower} alt={names[0][5]} /> <p>{names[0][5]}</p></td>
    <td><img src={tulip} alt={names[0][6]} /> <p>{names[0][6]}</p></td>
    <td><img src={waterlily} alt={names[0][7]} /> <p>{names[0][7]}</p><br/>
    </td></tr></table>
    </div>
        <Link to='/'>Return Home</Link><br/>
        <Link to='/quiz'>Return to Quizzes</Link><br/>
    </div>
    )
}
}
export default Display;