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
    

    render(){
        return (
        <div>
        <Link to='/quiz'><img src={require('./images/cherryblossom.png')} alt="cherryblossom" /></Link>
        <Link to='/quiz'><img src={require('./images/daffodil.png')} alt="daffodil" /></Link>
        <Link to='/quiz'><img src={require('./images/daisy.jpg')} alt="daisy" /></Link>
        <Link to='/quiz'><img src={require('./images/lily.jpg')} alt="lily" /></Link>
        </div>
        )
    }
}
export default Quiz;