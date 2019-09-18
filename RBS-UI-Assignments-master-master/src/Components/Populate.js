import React from 'react';
import TextField from './TextField';
import DateField from './DateField';
import SelectField from './SelectField';

export default class Populate extends React.Component {
    constructor(props) {
        super(props);

    }

    getValues = (defaultValues, name) => {
        const findValues = defaultValues.find(ele => ele.columnName === name);
        if (findValues && findValues.aValues && findValues.aValues.length > 0) {
            const controlsFields = findValues.aValues.map(
                (ele, index) => {
                    if (ele.type === 'text') {
                        return (
                            <TextField fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} newValues={this.props.newValues} columnName={this.props.name} />
                        )
                    } else if (ele.type === 'number') {
                        return (
                            <TextField fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} newValues={this.props.newValues} columnName={this.props.name} />
                        )
                    } else if (ele.type === 'date') {
                        return (
                            <DateField fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} newValues={this.props.newValues} columnName={this.props.name} />
                        )
                    } else if (ele.type === 'dropdown') {
                        return (
                            <SelectField fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} newValues={this.props.newValues} columnName={this.props.name} />
                        )
                    }
                }
            );
            return controlsFields;
        }

    }

    render() {
        const { defaultValues, name } = this.props;
        const getDefaultValues = this.getValues(defaultValues, name);
        return (
            <div className="columnname">
                {this.props.name}
                {getDefaultValues}
            </div>
        );
    }
};