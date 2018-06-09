/**
 *create by mading on 2018/3/28
 */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { asyncRouter, nomatch } from 'choerodon-front-boot';

const App = asyncRouter(() => import('./appHome'), () => import('../../../stores/project/app/appHome'));
const BranchHome = asyncRouter(() => import('./branchHome'), () => import('../../../stores/project/app/branchManage'));

const EnvironmentIndex = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={App} />
    <Route exact path={`${match.url}/:name/:id/branch`} component={BranchHome} />
    <Route path={'*'} component={nomatch} />
  </Switch>
);

export default EnvironmentIndex;
