import React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
    }

    updateValue = (event) => {
        this.props.newValues(event.target.value, this.props.columnName, this.props.field);
    };

    render() {
        return (
            <div className="inputfield">
                <div className="fieldname">
                    {this.props.fieldName}
                </div>
                <div className="fieldvalue">
                    <input type="text" name="fname" value={this.props.defaultValue} onChange={this.updateValue}></input>
                </div>

            </div>
        );
    }
};