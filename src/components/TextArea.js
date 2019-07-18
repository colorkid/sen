import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../styles/App.css';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.data.placeholder,
            value: this.props.data.value
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
                <textarea
                    className='form__textarea'
                    value={this.state.value}
                    placeholder={this.state.placeholder}
                    onChange={this.handleChange} 
                />
        );
    }
}

TextArea.propTypes = {
    data: PropTypes.object
}

export default TextArea;