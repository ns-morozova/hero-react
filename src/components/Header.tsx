import styles from '../styles/Header.module.css';

const menuItems = [
    { id: 1, href: '#our-work', text: 'Our work' },
    { id: 2, href: '#about-us', text: 'About us' },
    { id: 3, href: '#backstage', text: 'Backstage' },
    { id: 4, href: '#career', text: 'Career' },
    { id: 5, href: '#contact-us', text: 'Contact us' },
  ];

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.buttonWrapper}>
                <button className={styles.startProjectButton}>Start a project</button>
            </div>
        </header>
    );
};

export default Header;