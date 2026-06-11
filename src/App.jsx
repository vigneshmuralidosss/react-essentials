import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/ExamplesFeatures/Examples.jsx';
import Header from './components/Header/Header.jsx';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />        
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
