import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return(
    // Headerコンポーネントを呼び出す
    <>
    <Header />
    <Skills />
    <Contact />
    </>
  );
};

export default App;
