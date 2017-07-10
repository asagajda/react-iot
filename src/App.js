import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

// TODO inputs for abi and address


//------------------------

class DevicesList extends Component {
  render(){
    var es = this.props.es
    //var dm = this.props.dm
    var deviceHashes = [];
    //var devicesCount = dm.getDevicesCount.call()

    var currentIndex = es.getDllIndex("0x0",true);
    deviceHashes.push(currentIndex)

    //console.log("CurrIndex="+currentIndex)
    while (currentIndex !== "0x0")
    {
      var device = es.getInfoByHash.call(currentIndex)
      deviceHashes.push(device)
      currentIndex = es.getDllIndex(currentIndex, true)
    }

    var output =
    <p>Iterated through devices: {deviceHashes}</p>

    return output;
  }
}

class ContractsInfo extends Component {
  render(){
  var output = ""
    if (this.props.am === "")
    {
      output =
      <div>
        <p>No Address manager provided</p>
      </div>
    }
    else
    {
      output =
      <div>
        <p>Address Manager address:</p>
        <p>App Manager address:</p>
        <p>Address Manager address:</p>
      </div>
    }
    return output;
  }
}

class App extends Component {

  componentWillMount() {
    //appManagerContract.addDevice.call("0x4d4be4a4526f1cfe2eee78c993626922407b7bf5", 123, "0x22db9bac1ef521aea55b6aa5549de009de8fd8a9");
    /*appManagerContract.addDevice("0x4d4be4a4526f1cfe2eee78c993626922407b7bf5", 123, "0x22db9bac1ef521aea55b6aa5549de009de8fd8a9",{from:ETHEREUM_CLIENT.eth.accounts[0], gas:3000000,}, function(e,result){console.log(result)});
    var data = appManagerContract.getDeviceById.call(0);
    this.setState({devices: data})*/
  }

  constructor(props)
  {
    super(props)

    var dougABI = [{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"removeContract","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"addr","type":"address"}],"name":"addContract","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

    var appManagerABI = [{"constant":false,"inputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"addDevice","outputs":[{"name":"idx","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"switchOffDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDevicesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"switchOnDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idx","type":"uint256"}],"name":"getDeviceById","outputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"},{"name":"device_active","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

    var dmABI = [{"constant":true,"inputs":[],"name":"isAppManager","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"addDevice","outputs":[{"name":"idx","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"updateDeviceById","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"switchOffDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDevicesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eternalStorage","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"switchOnDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getDeviceById","outputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"},{"name":"device_active","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_eternalStorage","type":"address"}],"payable":false,"type":"constructor"}]

    var esABI = [{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getBytes32Value","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getBooleanValue","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"bytes32"}],"name":"setBytes32Value","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"setUIntValue","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"bool"}],"name":"setBooleanValue","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getBytesValue","outputs":[{"name":"","type":"bytes"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getAddressValue","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"address"}],"name":"setAddressValue","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_val","type":"bytes32"},{"name":"table","type":"string"},{"name":"column","type":"string"},{"name":"id","type":"uint256"}],"name":"setInfoToHash","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getIntValue","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"direction","type":"bool"}],"name":"getDllIndex","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getStringValue","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"int256"}],"name":"setIntValue","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getUIntValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"bytes"}],"name":"setBytesValue","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"HashInfoStorage","outputs":[{"name":"table","type":"string"},{"name":"column","type":"string"},{"name":"id","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"val","type":"bytes32"}],"name":"getInfoByHash","outputs":[{"name":"table","type":"string"},{"name":"column","type":"string"},{"name":"id","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"string"}],"name":"setStringValue","outputs":[],"payable":false,"type":"function"}]

    var dougAddress = "0x37e80474b7a647fcab6f48aef9b639794408aa82";
    var dougContract = ETHEREUM_CLIENT.eth.contract(dougABI).at(dougAddress);

    var appManagerAddress = dougContract.contracts.call("AppManager");
    var dmAddress = dougContract.contracts.call("DeviceManager");
    var esAddress = dougContract.contracts.call("EternalStorage");

    var appManagerContract = ETHEREUM_CLIENT.eth.contract(appManagerABI).at(appManagerAddress);
    var dmContract = ETHEREUM_CLIENT.eth.contract(dmABI).at(dmAddress);
    var esContract = ETHEREUM_CLIENT.eth.contract(esABI).at(esAddress);


    this.state = {
      amContract: appManagerContract,
      esContract: esContract,
      dmContract: dmContract
    }
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Ethereum IoT</h2>
        </div>

        <p>Enter contract manager address:</p>
        <input name="dougAddr"></input>

        <ContractsInfo am=""/>

        <p className="App-intro">
          Devices registered on blockchain:
        </p>
        <DevicesList es={this.state.esContract} dm={this.state.dmContract}/>

      </div>
    );
  }
}

export default App;
