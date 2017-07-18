import React, {Component} from "react"
import Device from "./Device"

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

export default DevicesList
