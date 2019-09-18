import React from 'react';
import './App.css';
import Screen from './Components/Screen';

function App() {
  return (
    <div className="App">
      <Screen col1="A" col2="B" defaultval={[{
                columnName: 'A',
                aValues: [
                    {
                        field: 'Name',
                        type: 'text',
                        value: 'Abc'
                    },
                    {
                        field: 'Id',
                        type: 'number',
                        value: 123
                    },
                    {
                        field: 'DOB',
                        type: 'date',
                        value: '2019-09-17'
                    }
                ]
            }, {
                columnName: 'B',
                aValues: [
                    {
                        field: 'Name',
                        type: 'text',
                        value: ''
                    },
                    {
                        field: 'Id',
                        type: 'number',
                        value: ''
                    },
                    {
                        field: 'DOB',
                        type: 'date',
                        value: ''
                    }
                ]
            }]}/>
            <Screen col1="C" col2="D" defaultval={[{
                columnName: 'C',
                aValues: [
                    {
                        field: 'CompanyId',
                        type: 'number',
                        value: '987'
                    },
                    {
                        field: 'Name',
                        type: 'text',
                        value: 'Xyz'
                    },
                    {
                        field: 'Comment',
                        type: 'text',
                        value: 'Good'
                    },
                    {
                        field: 'Rating',
                        type: 'dropdown',
                        value: 'Excellent'
                    }
                ]
            }, {
                columnName: 'D',
                aValues: [
                    {
                        field: 'CompanyId',
                        type: 'number',
                        value: ''
                    },
                    {
                        field: 'Name',
                        type: 'text',
                        value: ''
                    },
                    {
                        field: 'Comment',
                        type: 'text',
                        value: ''
                    },
                    {
                        field: 'Rating',
                        type: 'dropdown',
                        value: ''
                    }
                ]
            }]}/>
    </div>
  );
}

export default App;
