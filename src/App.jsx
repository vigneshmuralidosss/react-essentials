import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';

const btn = ['Components', 'Props', 'JSX', 'State']
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((ele) => (
              <CoreConcept image={ele.image} title={ele.title} description={ele.description}></CoreConcept>
            ))}
          </ul>
        </section>
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          {console.log(btn)}
          
          {btn.map((ele,index)=>(
            <TabButton key ={index}>{ele}</TabButton>
          ))}
        </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
