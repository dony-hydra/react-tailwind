import { Route, Switch } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <div>Index</div>
    </Route>
    <Route path="/test" exact>
      <div>Test</div>
    </Route>
  </Switch>
);
