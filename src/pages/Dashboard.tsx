import React, { Component } from "react";
import { connect } from "react-redux";

import { ApplicationState } from "../store";
import { Device } from "../store/devices/types";

import {
  Theme,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import DeviceList from "../components/deviceList/DeviceList";

const styles = ({ spacing }: Theme) =>
  createStyles({
    pageWrapper: {
      paddingTop: spacing(2)
    }
  });

interface DashboardProps {
  deviceList: Device[];
}

type allProps = WithStyles<typeof styles> & DashboardProps;

class DashboardPage extends Component<allProps> {
  render = () => {
    return (
      <Container className={this.props.classes.pageWrapper}>
        Num of devices: {this.props.deviceList.length}
        <DeviceList />
      </Container>
    );
  };
}

function mapStateToProps({ devices }: ApplicationState): DashboardProps {
  return {
    deviceList: devices.list
  };
}

export default connect(mapStateToProps)(withStyles(styles)(DashboardPage));
