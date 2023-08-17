import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Form from './componentes/Form';


function App() {
  const [membros, setMembros] = useState([])

  const aoNovoMembroAdicionado = (membro) => {
    console.log(membro)
    setMembros([...membros, membro])

  }

  return (

    <div className="App">
      <Banner />
      <Form aoMembroCadastrado={membro => aoNovoMembroAdicionado(membro)} />
    </div>
  );
}

export default App;
