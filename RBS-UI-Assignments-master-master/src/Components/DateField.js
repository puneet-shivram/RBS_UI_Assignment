import React from 'react';

export default class DateField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue
        }
    }

    updateValue = (event) => {
        this.props.newValues(event.target.value, this.props.columnName, this.props.field);
    };

    render() {
        return (
            <div className="datefield">
                <div className="fieldname">
                    {this.props.fieldName}
                </div>
                <div className="fieldvalue">
                    <input type="date" name="fname" value={this.props.defaultValue} onChange={this.updateValue}></input>
                </div>

            </div>
        );
    }
};