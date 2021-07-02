import { Switch, Route } from 'react-router-dom';
import Login from '@/components/login/index.jsx';
import Register from '@/components/register/index.jsx';
import WidthTest from '@/components/size-test.js';

const RouteConfig = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/w" component={WidthTest} />
  </Switch>
);

export default RouteConfig;
