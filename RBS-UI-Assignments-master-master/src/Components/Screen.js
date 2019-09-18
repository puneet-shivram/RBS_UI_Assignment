import React from 'react';
import Populate from './Populate';

export default class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultValues: this.props.defaultval
        };
        this.changeValues = (value, columnName, field) => {
            let stateData = this.state.defaultValues;
            const idx = stateData.findIndex(ele => ele.columnName === columnName);
            const data = stateData[idx].aValues;
            const fidx = data.findIndex(ele => ele.field === field);
            data[fidx]['value'] = value;

            this.setState({
                defaultValues: stateData
            })

        };
        this.populateColumn = () => {
            const getAdata = this.state.defaultValues.find(ele => ele.columnName === this.props.col1).aValues;
            let stateData = this.state.defaultValues.filter(ele => ele.columnName !== this.props.col2);
            const obj =
            {
                columnName: this.props.col2,
                aValues: getAdata
            };
            let newObj = JSON.parse(JSON.stringify(obj));
            stateData.push(newObj);
            this.setState({
                defaultValues: stateData
            })
        };
    }

    render() {
        const { defaultValues } = this.state;
        return (
            <div className="screen">
                <div className="button">
                    <h2>Screen {this.props.col1} to {this.props.col2}</h2>
                </div>
                <div className="columns">
                    <div className="column">
                        <Populate name={this.props.col1} defaultValues={defaultValues} newValues={this.changeValues} />
                    </div>
                    <div className="column">
                        <Populate name={this.props.col2} defaultValues={defaultValues} newValues={this.changeValues} />
                    </div>
                </div>
                <div className="button">
                    <button onClick={this.populateColumn}>Populate</button>
                </div>
            </div>
        );
    }
};