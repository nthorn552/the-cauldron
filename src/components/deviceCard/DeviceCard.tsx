import React from "react";
import { Paper } from "@material-ui/core";

import { Device } from "../../store/devices/types";

import useStyles from "./styles";

const DeviceCard = (device: Device) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <Paper>{device.id}</Paper>
    </div>
  );
};

export default DeviceCard;
