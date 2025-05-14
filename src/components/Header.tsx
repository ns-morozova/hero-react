// src/components/Header.tsx
import { useState } from 'react';
import styles from '../styles/Header.module.css';
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={styles.header}>
            {/* Кнопка "Start a project" */}
            <div className={styles.buttonWrapper}>
                <button className={styles.startProjectButton}>Start a project</button>
            </div>

            {/* Бургер для мобильной версии */}
            <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                    // <span className={styles.crossIcon}>×</span>
                    <IoCloseOutline className={styles.crossIcon} />
                ) : (
                    // <span className={styles.burgerIcon}>☰</span>
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