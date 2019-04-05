import React, { Component } from 'react';
import styled, { ThemeProvider, ThemeConsumer } from 'styled-components';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

const Container = styled.div`
  color: ${props => props.theme.color};
`;

class CustomRenderer extends Component {
  render() {
    return (
      <ThemeConsumer>
        {theme => {
          console.log('theme', theme);
          return (<Container theme={theme}>{this.props.value}</Container>);
        }}
      </ThemeConsumer>
    );
  }
}

const gridOptions = {
  frameworkComponents: {
    customRenderer: CustomRenderer,
  },
  columnDefs: [
    {
      headerName: 'Custom Column',
      field: 'myData',
      cellRenderer: 'customRenderer',
    },
  ],
  rowData: [
    { myData: 'Color Missing' },
  ]
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ color: 'blue' }}>
        <div className="App">
          <h1>Outside Grid:</h1>
          <Container>Color Blue</Container>

          <h1>Grid:</h1>
          <AgGridReact {...gridOptions} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
