import React from 'react';
import { Link } from "react-router-dom";
import Home from './Home';
import quizObj from './quizObjects';
import cherryblossom from './images/cherryblossom.png'
import daffodil from './images/daffodil.png'

class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.state = {current: 0}
    }
    
    setCurr = (val) =>{
        this.setState({current: val})
     }

    render(){
        return (
        <div>
        <table>
        <tr><td>
        <Link to='/take' onClick={() => quizObj.change(0)}><img src={cherryblossom} alt="cherryblossom" /><p>Quiz 1</p></Link>
        </td><td>
        <Link to='/daff' onClick={() => quizObj.change(1)}><img src={daffodil} alt="daffodil" /><p>Quiz 2</p></Link>
        </td></tr></table>
        <Link to='/'> Return Home </Link><br/>
        </div>
        )
    }
}
export default Quiz;