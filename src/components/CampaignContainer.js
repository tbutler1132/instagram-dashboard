import Campaign from './Campaign';


import {Route, Switch, useRouteMatch} from 'react-router-dom'

function DashboardContainer() {

    let match = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route path={`${match.url}/green`}><Campaign /></Route>
            </Switch>
        </div>
    );
}

export default DashboardContainer;