import imgsrc from './assets/react-core-concepts.png'
import compimgsrc from './assets/components.png';
import { CORE_CONCEPTS } from './data.js'


const desc = ['core', 'fundamental', 'cirtical'];

function genRandomValue(max) {
  return Math.floor(Math.random() * (max + 1))
}

const Header = () => {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
