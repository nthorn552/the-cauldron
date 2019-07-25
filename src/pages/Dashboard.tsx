import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Theme,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";

const styles = ({ spacing }: Theme) =>
  createStyles({
    pageWrapper: {
      paddingTop: spacing(2)
    }
  });

class DashboardPage extends Component<WithStyles<typeof styles>> {
  render = () => {
    return (
      <Container className={this.props.classes.pageWrapper}>
        <Paper>test</Paper>
      </Container>
    );
  };
}

export default connect()(withStyles(styles)(DashboardPage));
