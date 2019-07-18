import React, { Component } from "react";
import { connect } from 'react-redux';
import FieldsList from "./FieldsList";
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <form className='form'>
                <FieldsList fields={this.props.fields} />
                <input className='form__submit' type='submit' />
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        fields: state.fields
    };
}

export default connect(mapStateToProps)(App);