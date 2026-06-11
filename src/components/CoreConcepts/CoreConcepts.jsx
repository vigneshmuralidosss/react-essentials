import React from 'react';
import { CORE_CONCEPTS } from '../../data';
import CoreConcept from '../CoreConcept';


export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((ele, index) => (
                    <CoreConcept key={index} {...ele}></CoreConcept>
                ))}
            </ul>
        </section>
    )
}
