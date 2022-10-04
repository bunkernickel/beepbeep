import { Link } from 'react-router-dom';

import './Header.css';

const HeaderLink = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);

    return <Link to={`/${page}`} className='header-link'>{title}</Link>;
};

const Header = () => {
    return (
        <div className='header'>
            <HeaderLink page='home' />
            <HeaderLink page='links' />
            <HeaderLink page='users' />
            <HeaderLink page='videos' />
        </div>
    );
};

export default Header;