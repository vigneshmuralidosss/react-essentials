import React from 'react'

export default function Tabs({ children, buttons, buttonContainer }) {
    const ButtonsContainer = buttonContainer; // setting the component type
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}
