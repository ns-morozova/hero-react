import { useState, useEffect, useRef } from 'react';
import styles from '../styles/HeroSection.module.css';
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
        console.log(`Сейчас выбрана кнопка №${id}`);
    };

    const highlightRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (highlightRef.current) {
            highlightRef.current.classList.add(`${styles.active}`);
        }

        console.log(`Сейчас выбрана кнопка №${selectedButtonId}`);
    }, []);

    return (
        <section className={styles.heroSection}>
            <h1 className={styles.title}>
                The best things <br></br> happen <span ref={highlightRef} className={styles.highlight}>Backstage</span>
            </h1>
            <nav className={styles.buttonGroup} aria-label="Category filters">
                {buttonData.map((button) => (
                    <Button
                        key={button.id}
                        text={button.text}
                        isSelected={button.id === selectedButtonId}
                        onClick={() => handleButtonClick(button.id)}
                        aria-label={`Filter by ${button.text}`}
                    />
                ))}
            </nav>
        </section>
    );
};

export default HeroSection;