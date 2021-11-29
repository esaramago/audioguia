import './Header.css';
import logo from '@images/logo.svg';

export default () => {
    return (
        <header className="c-header">
            <img src={logo} className="c-header__logo" alt="logo" />
            <h1 className="c-header__title">Jardim dos patos</h1>
        </header>
    );
}