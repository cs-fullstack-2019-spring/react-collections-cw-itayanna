import React, { Component } from 'react';
import User from "./User";
import UserMapping from './UserMapping'

class UserResidence extends Component{
    render(){

        return(
            <div>
                <p>Street:{this.props.array.address.street}</p>
                <p>City:{this.props.array.address.city}</p>
                <p>Zipcode:{this.props.array.address.zipcode}</p>
                <p>Geo: lat-{this.props.array.address.geo.lat} long-{this.props.array.address.geo.lng}</p>
            </div>
        );
    }
}

export default UserResidence;