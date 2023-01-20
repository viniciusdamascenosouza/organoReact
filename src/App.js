import Banner from './components/Banner/Banner.js';
import CampoTexto from './components/CampoTexto/CampoTexto.js';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
    </div>
  );
}

export default App;
