import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    render() {
        return <div id="dHeader" style={ { width: "300px", borderColor: "#000", borderWidth:"1px", borderStyle:"solid" } }>
            Hello Header 
        </div> 
    }
}