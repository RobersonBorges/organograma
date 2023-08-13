import Banner from './componentes/Banner/banner';
import InputTexto from './componentes/InputTexto';

function App() {
  return (
   
    <div className="App">
       <Banner/>
       <InputTexto label="Nome" placeholder="digite o nome"/>
       <InputTexto label="Cargo" placeholder="digite o cargo"/>
       <InputTexto label="Imagem" placeholder="especifique o caminho da imagem"/>
     
    </div>
  );
}

export default App;
