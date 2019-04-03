import React, { Component } from 'react';

class User extends Component{
    render(){
        return(
            <div>
                <p>Id: {this.props.eachElement.id}</p>
                <p>Name: {this.props.eachElement.name}</p>
                <p>username: {this.props.eachElement.username}</p>
                <p>email: {this.props.eachElement.email}</p>
            </div>
        );
    }
}

export default User;