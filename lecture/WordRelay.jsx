const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Hello,webpack',
        };
    }


    render() {
        return <h1>{this.state.text}</h1>
    }

}

module.exports = WordRelay;