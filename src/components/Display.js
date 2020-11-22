import React from 'react';
import { Link } from "react-router-dom";
import quizObj from './quizObjects';
import Quiz from './Quiz';

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
    var string = this.getString("");
    var questions= quizObj.getFlowerDisplay();
    var names = quizObj.getNames();
    return (
    <div>
    <img src={require("./images/cherryblossom.png")} alt={names[0][0]} /> {names[0][0]}
    <img src={"./images/"+questions[0][1]} alt={names[0][1]} /> {names[0][1]}
    <img src={"./images/"+questions[0][2]} alt={names[0][2]} /> {names[0][2]}
    <img src={"./images/"+questions[0][3]} alt={names[0][3]} /> {names[0][3]}
    <img src={"./images/"+questions[0][4]} alt={names[0][4]} /> {names[0][4]}
    <img src={"./images/"+questions[0][5]} alt={names[0][5]} /> {names[0][5]}
    <img src={"./images/"+questions[0][6]} alt={names[0][6]} /> {names[0][6]}
    <img src={"./images/"+questions[0][7]} alt={names[0][7]} /> {names[0][7]}
    <img src={"./images/"+questions[0][8]} alt={names[0][8]} /> {names[0][8]} <br/>

    <Link to='/'>Return Home</Link><br/>
    <Link to='/quiz'>Return to Quizzes</Link><br/>
    </div>
    )
}
}
export default Display;