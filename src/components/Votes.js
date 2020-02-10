import React, { Component } from 'react'
import axios from 'axios';
import { createBrowserHistory } from 'history'

export class Votes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
        }
    } 
    componentDidMount(){
       
        axios.get('http://localhost:4200/allusers').then(res => {
            console.log(res.data);
            this.setState({
                candidates:res.data
            })

        }).catch(err => console.log(err));

    }
    
    voteAperson = e => {
        alert("voted")
        alert(e.target.value)
        e.preventDefault();
        const data = {
            name: e.target.value,
        }
        axios.post('http://localhost:4200/voteAperson', data).then(res => {
            
            if (res==200) {
                alert("Thanks for your vote")
                // createBrowserHistory.push("compare");
            }

        }).catch(err => console.log(err));

    }


    render() {
        return (
            <div>
                {/* <button onClick={this.voteAperson} value="laveesha">vote laveeesha</button> */}
                
            </div>
        )
    }
}

export default Votes
