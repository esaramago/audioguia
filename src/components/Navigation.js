import { NavLink  } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <ul className="c-navigation">
                <li className="c-navigation__item">
                    <NavLink className="c-navigation__link" exact to="/">Info</NavLink>
                </li>
                <li className="c-navigation__item">
                    <NavLink className="c-navigation__link" to="/guide">Guia</NavLink>
                </li>
                <li className="c-navigation__item">
                    <NavLink className="c-navigation__link" to="/map">Mapa</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;