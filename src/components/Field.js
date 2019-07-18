import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../styles/App.css';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.data.type,
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
                <input
                    className='form__field'
                    type={this.state.type}
                    value={this.state.value}
                    placeholder={this.state.placeholder}
                    onChange={this.handleChange} 
                />
        );
    }
}

Field.propTypes = {
    data: PropTypes.object
}


export default Field;