import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

// TODO inputs for abi and address

var appManagerABI = [{"constant":false,"inputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"addDevice","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"switchOffDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"switchOnDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"getDeviceById","outputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"},{"name":"device_active","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

var appManagerAddress = '0xcfe7f982f28ed0d1c34d648377f1f8c0db3a3cc9'

var appManagerContract = ETHEREUM_CLIENT.eth.contract(appManagerABI).at(appManagerAddress);

var dougABI = [{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"removeContract","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"addr","type":"address"}],"name":"addContract","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

var dougAddress = "0xa15277da77bf9e4f4fda138b47dc5d84b0ffbbb7";

var dougContract = ETHEREUM_CLIENT.eth.contract(dougABI).at(dougAddress);

class App extends Component {

  componentWillMount() {
    appManagerContract.addDevice.call("0x4d4be4a4526f1cfe2eee78c993626922407b7bf5", 123, "0x22db9bac1ef521aea55b6aa5549de009de8fd8a9");
    var data = appManagerContract.getDeviceById.call(0);
    this.setState({devices: data})
  }

  constructor(props)
  {
    super(props)
    this.state = {
      devices: ""
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ethereum IoT</h2>
        </div>
        <p className="App-intro">
          Devices registered on blockchain:
        </p>
        <ul>
          <li>{this.state.devices}</li>
        </ul>
      </div>
    );
  }
}

export default App;
