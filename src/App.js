import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

const Container = styled.div`
  color: ${props => props.theme.color};
`;

class CustomRenderer extends Component {
  render() {
    return (
      <Container>{this.props.value}</Container>
    );
  }
}

const gridOptions = {
  reactNext: true,
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
