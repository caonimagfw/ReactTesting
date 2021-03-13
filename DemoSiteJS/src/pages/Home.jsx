import React from 'react';
import Header from './common/Header'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    render() {
        return <div>
            <Header />
            <p>Up is header , i am body </p>
        </div>
    }
}