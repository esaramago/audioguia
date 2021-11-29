import { NavLink  } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="c-navigation">
            <ul className="c-navigation__list">
                <li className="c-navigation__item">
                    <NavLink className="c-navigation__link" to="/">Info</NavLink>
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