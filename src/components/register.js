import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { createBrowserHistory } from 'history'

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    getname = e => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
    }
    register = e => {
        e.preventDefault();
        const data = {
            name: this.state.name,
        }
        axios.post('http://localhost:4200/register', data).then(res => {
            console.log(res);
            this.setState({
                name: "",
            });
            if (res.data == '1') {
                alert("you can check your votes now , Hope you win ")
                createBrowserHistory.push("/compare");
            }

        }).catch(err => console.log(err));

    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="User Name" value={this.state.name} onChange={this.getname} />
                </div>
                <Button variant="outline-success" onClick={this.register} >Register</Button>
            </div>
        )
    }
}

export default Register
