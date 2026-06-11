import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import Card from './components/Card.jsx';
import { useState } from 'react';

const btn = ['Components', 'JSX', 'Props', 'State']
function App() {
  const [tabContent, setTabContent] = useState(null);
  function handleSelect(selected) {
    setTabContent(selected)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((ele, index) => (
              <CoreConcept key={index} image={ele.image} title={ele.title} description={ele.description}></CoreConcept>
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {btn.map((ele, index) => (
              <TabButton key={index} onSelect={() => handleSelect(ele)}>{ele}</TabButton>
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

        {/* <section>
          <Card name="viki">
            <p>sample text to be displayed</p>
            <p>the tags which present inside this card opening and closing tag will consider as children props(in this we have two p tags, which will consider as children tags for card component), and name is attribute props</p>
          </Card>
        </section> */}
      </main>
    </div>
  );
}

export default App;
