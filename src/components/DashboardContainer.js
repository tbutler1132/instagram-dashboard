import Campaign from './Campaign';
import Instagram from './Instagram';

function DashboardContainer({token}) {


    return (
        <div>
            DashboardContainer
            <Instagram token={token} />
        </div>
    );
}

export default DashboardContainer;