import React from 'react'
import imgsrc from '../../assets/react-core-concepts.png'
import "./Header.css"

const desc = ['core', 'fundamental', 'cirtical'];

function genRandomValue(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
    return (
        <header>
            <img src={imgsrc} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {desc[genRandomValue(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
