import * as React from "react";
import { connect } from "react-redux";

import DeviceCard from "../deviceCard/DeviceCard";

import { ApplicationState } from "../../store";
import { Device } from "../../store/devices/types";

type DeviceListProps = {
  deviceList: Device[];
};

class DeviceList extends React.Component<DeviceListProps> {
  render() {
    return (
      <div>
        {this.props.deviceList.map(thisDevice => {
          return <DeviceCard {...thisDevice} key={thisDevice.uid} />;
        })}
      </div>
    );
  }
}

function mapStateToProps({ devices }: ApplicationState): DeviceListProps {
  return {
    deviceList: devices.list
  };
}

export default connect(mapStateToProps)(DeviceList);
