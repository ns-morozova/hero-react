import { useState } from 'react';
import styles from '../styles/HeroSection.module.css';
// import { Header } from '../components';
import { Button } from '../components';

const HeroSection = () => {
    const buttonData = [
        { id: 1, text: "What's new" },
        { id: 2, text: 'Business' },
        { id: 3, text: 'Life at Company' },
        { id: 4, text: 'Our work' },
    ];

    const [selectedButtonId, setSelectedButtonId] = useState(buttonData[0].id);

    const handleButtonClick = (id: number) => {
        setSelectedButtonId(id);
    };

    return (
        <section className={styles.heroSection}>
            {/* <Header /> */}
            <h1 className={styles.title}>
                The best things happen <span className={styles.highlight}>Backstage</span>
            </h1>
            <div className={styles.buttonGroup}>
                {buttonData.map((button) => (
                    <Button
                        key={button.id}
                        text={button.text}
                        isSelected={button.id === selectedButtonId}
                        onClick={() => handleButtonClick(button.id)}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;