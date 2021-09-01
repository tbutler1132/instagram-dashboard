import Home from './Home';

function DashboardContainer({instagramId, token}) {


    return (
        <div>
            <Home token={token} instagramId={instagramId}/>
        </div>
    );
}

export default DashboardContainer;