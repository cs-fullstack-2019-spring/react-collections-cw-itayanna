import React, { Component } from 'react';
import User from "./User";

class UserMapping extends Component{
    render(){

        const userMapping = this.props.array.map(
            (eachElement)=>{
                return(<User eachElement={eachElement}/>)
            }
        );

        return(
            <div>
                {userMapping}
            </div>
        );
    }
}

export default UserMapping;