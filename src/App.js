import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
//import logo from './logo.svg';
import './App.css';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// icons
import FontIcon from 'material-ui/FontIcon';
const iconStyles = {
  marginRight: 24,
};

// Paper
const paper_style = {
  //height: 400,
  width: 600,
  margin: 20,
  display: 'inline-block',
  textAlign: "left",
};

const App = () => (
  <MuiThemeProvider>
    <MyApp doug="0x4e700e5a001faf7ffe7f473dd5a8de34482f433d"/>
    {/*<MyApp doug=""/>*/}
  </MuiThemeProvider>
);

injectTapEventPlugin();

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var ETHEREUM_CLIENT = window.web3

var dougABI = [{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"removeContract","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"addr","type":"address"}],"name":"addContract","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"contracts","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

var appManagerABI = [{"constant":false,"inputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"addDevice","outputs":[{"name":"idx","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"switchOffDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDevicesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idx","type":"uint256"}],"name":"switchOnDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idx","type":"uint256"}],"name":"getDeviceById","outputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"},{"name":"device_active","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

var dmABI = [{"constant":true,"inputs":[],"name":"isAppManager","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"addDevice","outputs":[{"name":"idx","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"}],"name":"updateDeviceById","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"switchOffDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDevicesCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eternalStorage","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"switchOnDeviceById","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getDeviceById","outputs":[{"name":"device_address","type":"address"},{"name":"device_pubkey","type":"bytes32"},{"name":"device_owner","type":"address"},{"name":"device_active","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_eternalStorage","type":"address"}],"payable":false,"type":"constructor"}]

var esABI = [{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getBytes32Value","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getBooleanValue","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"bytes32"}],"name":"setBytes32Value","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"setUIntValue","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"bool"}],"name":"setBooleanValue","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getBytesValue","outputs":[{"name":"","type":"bytes"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getAddressValue","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"address"}],"name":"setAddressValue","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_val","type":"bytes32"},{"name":"table","type":"string"},{"name":"column","type":"string"},{"name":"id","type":"uint256"}],"name":"setInfoToHash","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dougAddr","type":"address"}],"name":"setDougAddress","outputs":[{"name":"result","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getIntValue","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"direction","type":"bool"}],"name":"getDllIndex","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getStringValue","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"int256"}],"name":"setIntValue","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"record","type":"bytes32"}],"name":"getUIntValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"bytes"}],"name":"setBytesValue","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"HashInfoStorage","outputs":[{"name":"table","type":"string"},{"name":"column","type":"string"},{"name":"id","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"val","type":"bytes32"}],"name":"getInfoByHash","outputs":[{"name":"table","type":"string"},{"name":"column","type":"string"},{"name":"id","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"record","type":"bytes32"},{"name":"value","type":"string"}],"name":"setStringValue","outputs":[],"payable":false,"type":"function"}]

class MyApp extends Component {

  componentWillMount() {
  }

  componentDidMount() {

    if (this.props.doug !== "")
    {
      this.updateContracts(this.props.doug)
    }
  }

  constructor(props)
  {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDougInput = this.handleDougInput.bind(this)
    // this.state = {
    //   contractsInitialized: false,
    //   drawerOpened: false
    // }
    this.state =
    {
      contractsInitialized: false,
      dougAddress: props.doug,
      appManagerAddress: "0x0",
      dmAddress: "0x0",
      esAddress: "0x0",
      dougContract: undefined,
      amContract: undefined,
      esContract: undefined,
      dmContract: undefined,
      drawerOpened: false
    }
  }

  updateContracts(dougAddress) {
    var dougContract = ETHEREUM_CLIENT.eth.contract(dougABI).at(dougAddress);

    var appManagerAddress = "0x0"
    dougContract.contracts.call("AppManager", (e, r) => {
      if (!e) {
        sleep(2000)
        this.setState({
          appManagerAddress: r,
          amContract:  ETHEREUM_CLIENT.eth.contract(appManagerABI).at(r)
        })
      } else {
        console.log(e)
      }
    });

    var dmAddress = "0x0"
    dougContract.contracts.call("DeviceManager", (e, r) => {
      if (!e) {
        sleep(2000)
        this.setState({
          dmAddress: r,
          dmContract: ETHEREUM_CLIENT.eth.contract(dmABI).at(r)
        })
      } else {
        console.log(e)
      }
    });

    var esAddress = "0x0"
    dougContract.contracts.call("EternalStorage", (e, r) => {
      if (!e) {
        sleep(4000)
        this.setState({
          esAddress: r,
          esContract: ETHEREUM_CLIENT.eth.contract(esABI).at(r)
        })
      } else {
        console.log(e)
      }
    });
    // var dmAddress = dougContract.contracts.call("DeviceManager");
    // var esAddress = dougContract.contracts.call("EternalStorage");
    //
    //
    // var dmContract = ETHEREUM_CLIENT.eth.contract(dmABI).at(dmAddress);
    // var esContract = ETHEREUM_CLIENT.eth.contract(esABI).at(esAddress);

    /*if (parseInt(appManagerAddress, 16) !== 0 &&
      parseInt(dmAddress, 16) !== 0 &&
      parseInt(esAddress, 16) !== 0)
    {
      this.setState({
        contractsInitialized: true,
        dougAddress: dougAddress,
        appManagerAddress: appManagerAddress,
        dmAddress: dmAddress,
        esAddress: esAddress,
        dougContract: dougContract,
        amContract: appManagerContract,
        esContract: esContract,
        dmContract: dmContract,
        drawerOpened: false
      });
    }*/
  }

  handleToggle = () => this.setState({drawerOpened: !this.state.drawerOpened});
  handleClose = () => this.setState({drawerOpened: false});
  handleDougInput(newDoug){
    this.updateContracts(newDoug)
  }

  render() {

    // } else
    // {
    //   content = <DougForm address={this.state.dougAddress} onAddressChange={this.handleDougInput}/>
    // }

    return (
      <div className="App">

        <AppBar
          title="Ethereum IoT"
          onLeftIconButtonTouchTap={this.handleToggle}
        />

        <Drawer
          docked={false}
          width={200}
          open={this.state.drawerOpened}
          onRequestChange={(drawerOpened) => this.setState({drawerOpened})}
        >
          <MenuItem onTouchTap={this.handleClose}>Devices</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Offers</MenuItem>
        </Drawer>

        <div id="central">
            <ContractsInfo rootstate={this.state}/>
            <DevicesList es={this.state.esContract} dm={this.state.dmContract} am={this.state.amContract}/>
        </div>
      </div>
    );
  }
}

class DevicesList extends Component {

  DEVICE_FIELDS_COUNT = 4;

  constructor(props){
    super(props)
    this.state = {
      devices: {}
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.componentDidMount(nextProps)
  }

  componentDidMount(props){
    console.log("did mount")
    if (props === undefined || props.am === undefined || props.es === undefined) return;
    console.log("coo-coo")
    var es = props.es
    var am = props.am

    var devices = {}
    var counter;
    am.getDevicesCount((e,r) => {
      if (!e){
        counter = r.toString() * this.DEVICE_FIELDS_COUNT;
        var currentIndex;
        es.getDllIndex.call("0x0",true, (e, r) => {
          if (!e){
            currentIndex = r;
            //-----------async loop-------------
            this.asyncLoop(counter, (loop) => {

                    // getting next index r2
                    es.getDllIndex.call(currentIndex, true, (e2,r2) => {
                      if (!e2){
                        console.log("must not be 0x0",r2)
                        // if got next index than going to get current index info
                        es.getInfoByHash(currentIndex, (e,r) => {
                          if (!e){
                            var id = r[2].toString()
                            console.log("counter", counter)
                            // if already got entry for id of current index than not fethcing Info
                            // but going forward to next index (r2)
                            if (devices[id] === undefined) {

                              am.getDeviceById.call(id, (e1,r1) => {
                                if (!e1){
                                  // update devices list
                                  devices[id] = r1;
                                  // then go to next index
                                  currentIndex = r2
                                  loop.next();
                                } else {
                                  // didn't got dexice
                                  console.log(e1);
                                  loop.break();
                                }
                              })
                            } else {
                              // then go to next index, passing devices update
                              currentIndex = r2
                              loop.next();
                            }
                          } else {
                            // didn't got info
                            console.log(e);
                            loop.break();
                          }
                        });
                      } else {
                        // didnt got next index
                        console.log(e2);
                        loop.break();
                      }
                    });
            },
            // when all done
            ()=>{
              console.log('loop finished')
              console.log(devices)

              this.setState({devices: devices})
            }
          )
          //--------end asymc loop----------------
          } else {
            console.log(e)
          }
        });
      }
    });
  }

  asyncLoop(iterations, func, callback) {
      var index = 0;
      var done = false;
      var loop = {
          next: function() {
              if (done) {
                  return;
              }

              if (index < iterations) {
                  index++;
                  func(loop);
                  console.log(index,iterations)
              } else {
                  done = true;
                  callback();
              }
          },

          iteration: function() {
              return index - 1;
          },

          break: function() {
              done = true;
              callback();
          }
      };
      loop.next();
      return loop;
  }

  render(){
    if (this.props.am === undefined || this.props.es === undefined)
    {return (
      <div>loading devices list...</div>
    )}

    return (<div>
      <p>Devices registered on blockchain (iterated through devices full index): </p>
        {
        Object.keys(this.state.devices).map(function(key){
                    return <Device fields={this.state.devices[key]} key={key} id={key}/>;
                  }.bind(this))
        }
    </div>)

  }
}

class DougForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: this.props.address};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddressChange(this.state.value)
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
    <p>Enter contract manager address:</p>
      <label for="doug">
        Address:
      </label>
      <input
        id="doug"
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
      <input type="submit" value="Submit" />
    </form>
    )
  }
}


class Device extends Component {
  render(){

    const title = (
      <h3>
      <FontIcon className="material-icons" style={iconStyles}>devices_other
      </FontIcon>
      Device {this.props.id}</h3>
    );

    const card = (
      <Paper style={paper_style} zDepth={3}>
        <Card>
          <CardHeader
              title={title}
              subtitle="Device instance"
              actAsExpander={true}
              showExpandableButton={false}
          />
          <CardText>
            <p>Address: {this.props.fields[0]}</p>
            <p>Pubkey: {this.props.fields[1]}</p>
            <p>Owner: {this.props.fields[2]}</p>
            <p>Active: {this.props.fields[3].toString()}</p>
          </CardText>
        </Card>
      </Paper>
    );

    return card;
  }
}

class ContractsInfo extends Component {
  render(){
    var output =
    <Paper style={paper_style} zDepth={3}>
      <Card>
        <CardHeader
            title="Service Smart Contracts Info"
            actAsExpander={false}
            showExpandableButton={false}
        />
        <CardText>
            <p>Address Manager address: {this.props.rootstate.dougAddress}</p>
            <p>App Manager address: {this.props.rootstate.appManagerAddress}</p>
            <p>Device Manager address: {this.props.rootstate.dmAddress}</p>
            <p>Eternal Storage address: {this.props.rootstate.esAddress}</p>
        </CardText>
      </Card>
    </Paper>
    return output;
  }
}


export default App;
