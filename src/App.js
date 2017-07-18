import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
// import IconButton from 'material-ui/IconButton';
// import Paper from 'material-ui/Paper';
//import logo from './logo.svg';
import './App.css';
import MyApp from "./MyApp"

import FlatButton from 'material-ui/FlatButton';

// icons
import FontIcon from 'material-ui/FontIcon';

const App = () => (
  <MuiThemeProvider>
    <MyApp doug="0x4e700e5a001faf7ffe7f473dd5a8de34482f433d"/>
    {/*<MyApp doug=""/>*/}
  </MuiThemeProvider>
);

injectTapEventPlugin();

export default App;
