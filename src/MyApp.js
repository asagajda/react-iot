import React, {Component} from "react"
import {ETHEREUM_CLIENT} from "./index"
import * as ABI from "./ABI"
import {sleep} from "./utils"
import AppBar from "material-ui/AppBar"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import ContractsInfo from "./ContractsInfo"
import DevicesList from "./DevicesList"

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
    var dougContract = ETHEREUM_CLIENT.eth.contract(ABI.dougABI).at(dougAddress);

    var appManagerAddress = "0x0"
    dougContract.contracts.call("AppManager", (e, r) => {
      if (!e) {
        sleep(2000)
        this.setState({
          appManagerAddress: r,
          amContract:  ETHEREUM_CLIENT.eth.contract(ABI.appManagerABI).at(r)
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
          dmContract: ETHEREUM_CLIENT.eth.contract(ABI.dmABI).at(r)
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
          esContract: ETHEREUM_CLIENT.eth.contract(ABI.esABI).at(r)
        })
      } else {
        console.log(e)
      }
    });
  }

  handleToggle = () => this.setState({drawerOpened: !this.state.drawerOpened});
  handleClose = () => this.setState({drawerOpened: false});
  handleDougInput(newDoug){
    this.updateContracts(newDoug)
  }

  render() {
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

export default MyApp
