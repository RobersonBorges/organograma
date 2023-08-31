import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'PT CHEI DE MACRO',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
    },
    {
      nome: 'PT CHEI DE STAFF',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'PT CHEI DE MÁ VONTADE',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69',
    },
    {
      nome: 'PT CHEI DE GARIMPEIRO',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome: 'PT CHEI DE MIGUE',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    }
  ]
  const [membros, setMembros] = useState([])

  const aoNovoMembroAdicionado = (membro) => {
    console.log(membro)
    setMembros([...membros, membro])

  }

  return (

    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} aoMembroCadastrado={membro => aoNovoMembroAdicionado(membro)} />

      {times.map(time => <Time key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        times={times.map(time => time.nome)}
        cards={membros.filter((membro) => membro.time === time.nome)} />)}
      <Rodape />
    </div>

  );
}

export default App;
