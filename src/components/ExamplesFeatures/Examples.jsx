import React from 'react'
import TabButton from '../TabButton'
import { EXAMPLES } from '../../data'

const btn = ['Components', 'JSX', 'Props', 'State']
export default function Examples() {
    const [tabContent, setTabContent] = React.useState(null);
    function handleSelect(selected) {
        setTabContent(selected)
    }
    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                {btn.map((ele, index) => (
                    <TabButton key={index} isActive={tabContent === ele} onSelect={() => handleSelect(ele)}>{ele}</TabButton>
                ))}
            </menu>
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
        </section>
    )
}
