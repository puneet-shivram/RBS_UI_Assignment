import React from 'react';

export default class selectfield extends React.Component {
    constructor(props) {
        super(props);

    }

    updateValue = (event) => {
        this.props.newValues(event.target.value, this.props.columnName, this.props.field);
    };

    render() {
        return (
            <div className="selectfield">
                <div className="fieldname">
                    {this.props.fieldName}
                </div>
                <select  className="fieldvalue" onChange={this.updateValue} value={this.props.defaultValue}>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                </select>
            </div>
        );
    }
};