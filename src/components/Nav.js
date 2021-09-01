import Header from "./Header";

function Nav() {
    return (
        <div style={{height: '100%'}}>
            <Header />
            <div className="nav-items">
                    <h1>Campaigns</h1>
                    <li>Red Ocean</li>
                    <li>Blue square</li>
                    <li>Green Tile</li>
            </div>
        </div>
    );
}

export default Nav;