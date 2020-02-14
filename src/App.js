import React, { Component } from 'react';
import Button from './componen/Button';

class App extends Component {
  constructor() {
  super ()
  this.state = {
    data : [
      {
        nama:'chandra',
        warna :'red'
      },
      {
        nama:'mustofa',
        warna:'#cfe605'
      },
      {
        nama:'walid',
        warna:'blue'
      },
      {
        nama:'bibit',
        warna:'brown'
      },
      {
        nama:'ardhi',
        warna:'rgb(38, 230, 220)'
      },
      {
        nama:'waizal',
        warna:'lightgreen'
      },
    ]
  }
  }
  render() {  
    return (
    <div>
        {
          this.state.data.map((param)=> {
          return <Button warna ={param.warna}>{param.nama}</Button>
          })
        }
    </div>
    );
  }
}

export default App;
