import React, { Component } from "react";
import PropTypes from 'prop-types';
import Field from "./Field";
import TextArea from "./TextArea";

class FieldsList extends Component {
    constructor(props) {
        super(props);
    }

    createListFields() {
        return this.props.fields.map((field) => {
           if (field.type === 'textArea') {
            return <TextArea key={field.id} data={field} />
           } else {
            return <Field key={field.id} data={field} />
           }
        });
    }

    render() {
        return <div>{this.createListFields()}</div>
    }
}

FieldsList.propTypes = {
    fields: PropTypes.array
}

export default FieldsList;