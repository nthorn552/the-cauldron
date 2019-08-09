import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";
import Dashboard from "./pages/Dashboard";
import Shmac from "./pages/Shmac";

import store from "./store";
import { MuiThemeProvider } from "@material-ui/core/styles";

import AppContainer from "./components/AppContainer";

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Typography component="div">
              <Header />
              <AppContainer>
                <Switch>
                  <Route path="/shmac" component={Shmac} />
                  <Route path="/billing" render={() => <h3>Billing Page</h3>} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </AppContainer>
            </Typography>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </CssBaseline>
  );
};

export default App;
