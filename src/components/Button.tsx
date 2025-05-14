import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, isSelected, onClick }) => {
    return (
        <button
            className={`${styles.button} ${isSelected ? styles.buttonSelected : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;