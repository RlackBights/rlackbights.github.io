import logo from '../assets/logo.svg';

function Navbar() {
    return (
        <ul id="navbar-container">
            <li>
                <a href="#" id='logo-container'><img src={logo} alt="logo"/></a>
            </li>
            <li>
                <div id='navbar-buttons'>
                    <a href="https://github.com/RlackBights">GitHub</a>
                    <a href="https://rlackbights.github.io/anki-card-generator">Anki Card Generator</a>
                    <a href="https://rlackbights.github.io/uni-calendar-manager">Uni Calendar Manager</a>
                    <a href="https://rlackbights.github.io/dm-app">DM App</a>
                </div>
            </li>
        </ul>
    )
}

export default Navbar;
