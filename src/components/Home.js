import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {loggedIn: false}
    }
    
    loginCheck = () =>{
       this.setState({loggedIn: true})
    }

    render(){
    var username = "";
    const location = this.props.location;
    console.log(this.state.loggedIn)
    if(this.state.loggedIn !== true){
        if (location && location.state && location.state.user) {
            username = location.state.user;    
            this.loginCheck();    
        }
    }
    if (location && location.state && location.state.user) {
        username = location.state.user;    
    }
        return (
        <div>
            <div>
                {username !== ""? <div>
                <Link to='/add'>Add Location</Link> { username }
                </div>
                :<div><Link to='/login'>Login to Continue</Link></div>}
            </div>

            <div>
            <Search/>
            </div>
        </div>
        )
    }
}
export default Home;