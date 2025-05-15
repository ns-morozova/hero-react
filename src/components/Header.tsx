import { useState } from 'react';
import styles from '../styles/Header.module.css';
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const menuItems = [
    { id: 1, href: '#our-work', text: 'Our work' },
    { id: 2, href: '#about-us', text: 'About us' },
    { id: 3, href: '#backstage', text: 'Backstage' },
    { id: 4, href: '#career', text: 'Career' },
    { id: 5, href: '#contact-us', text: 'Contact us' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleTheme = () => {
        const newIsDarkMode = !isDarkMode;

        setIsDarkMode(newIsDarkMode);

        document.body.classList.remove('dark-theme', 'light-theme');

        if (newIsDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.add('light-theme');
        }
      };

    return (
        <header className={styles.header}>
            <div className={styles.navBlock}>
                <div className={styles.buttonWrapper}>
                    <button className={styles.startProjectButton}>
                        Start a project
                        <MdArrowOutward className={styles.arrowIcon} />
                    </button>
                </div>

                <div className={styles.themeSwitcher} onClick={toggleTheme} aria-label="Toggle theme">
                    {isDarkMode ? (
                        <RiSunFill className={styles.sunIcon} />
                    ) : (
                        <RiMoonFill className={styles.moonIcon} />
                    )}
                </div>
            </div>

            <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                    <IoCloseOutline className={styles.crossIcon} />
                ) : (
                    <RxHamburgerMenu className={styles.burgerIcon} />
                )}
            </div>
            
            {/* Меню для десктопов */}
            <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                <ul className={styles.navList}>
                    {menuItems.map((item) => (
                        <li key={item.id} onClick={toggleMobileMenu}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;