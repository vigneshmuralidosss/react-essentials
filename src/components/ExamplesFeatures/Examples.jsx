import React from 'react'
import TabButton from '../TabButton'
import { EXAMPLES } from '../../data'
import Section from '../Ultity/Section';
import Tabs from '../Ultity/Tabs';

const btn = ['Components', 'JSX', 'Props', 'State']
export default function Examples() {
    const [tabContent, setTabContent] = React.useState(null);
    function handleSelect(selected) {
        setTabContent(selected)
    }
    return (
        <Section title='Examples' id='examples'>
            <Tabs 
            buttonContainer = "menu"
            buttons={
                <>
                    {btn.map((ele, index) => (
                        <TabButton key={index} isActive={tabContent === ele} onSelect={() => handleSelect(ele)}>{ele}</TabButton>
                    ))}
                </>
            }>
                {tabContent ?
                    <div id='tab-content'>
                        <h3>{tabContent && EXAMPLES[tabContent].title}</h3>
                        <p>{tabContent && EXAMPLES[tabContent].description}</p>
                        <pre>
                            <code>
                                {tabContent && EXAMPLES[tabContent].code}
                            </code>
                        </pre>
                    </div> : null
                }
            </Tabs>
        </Section>
    )
}
