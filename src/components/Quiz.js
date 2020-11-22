import React from 'react';
import { Link } from "react-router-dom";
import Home from './Home';
import quizObj from './quizObjects';
import cherryblossom from './images/cherryblossom.png'
import daffodil from './images/daffodil.png'
import daisy from './images/daisy.jpg'
import lily from './images/lily.jpg'
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
        <Link to='/take' onClick={() => quizObj.change(0)}><img src={require('./images/cherryblossom.png')} alt="cherryblossom" /></Link>
        <Link to='/daff' onClick={() => quizObj.change(1)}><img src={require('./images/daffodil.png')} alt="daffodil" /></Link>
        </div>
        )
    }
}
export default Quiz;