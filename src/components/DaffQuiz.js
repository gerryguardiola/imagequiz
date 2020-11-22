import React from 'react';
import { Link } from "react-router-dom";
import quizObj from './quizObjects';
import Quiz from './Quiz';

class DaffQuiz extends React.Component{
    constructor(props){
        super(props)
        this.state = {i: 0, j:0}
    }

    grade(question, answer){
        if (answer === question) {
            var curr = this.state.i;
            var score = this.state.j;

            curr = curr+1;
            score = score+1;

            this.setState({i: curr});
            this.setState({j: score});
        }
        else{
        var curr = this.state.i;
        curr = curr+1;
        this.setState({i: curr});
        }
    }
    score(){
        var score = quizObj.getScore();

        this.setState({j: score});
    }

    render(){
        var val = this.state.i;
        var final = this.state.j;
        var questions = quizObj.getDaffodil();
        var answers = quizObj.getDaffodilOptions(this.state.i);
        var image = "./images/" + questions[0][this.state.i]+ ".png";
        return (
        <div>
        {val !== 6 ? 
        <div>
        <img src={image} alt={questions[0][this.state.i]} /> <br/>Which word matches the image?<br/>
        <button type="submit" onClick ={() => this.grade(questions[0][val], answers[0])}>{answers[0]}</button>
        <button type="submit" onClick ={() => this.grade(questions[0][val], answers[1])}>{answers[1]}</button>
        <button type="submit" onClick ={() => this.grade(questions[0][val], answers[2])}>{answers[2]}</button>
        <button type="submit" onClick ={() => this.grade(questions[0][val], answers[3])}>{answers[3]}</button>
        </div>: <div>You recieved a score of {this.state.j}/6 <br/>
        <Link to='/'>Return Home</Link><br/>
        <Link to='/quiz'>Return to Quizzes</Link><br/></div>}
        </div>
        )
    }
}
export default DaffQuiz;