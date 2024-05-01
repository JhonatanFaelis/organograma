

import Banner from './components/Banner/Banner';
import { Formulario } from './components/FormularioContainer/Formulario';
import RodaPe from './components/RodaPe';
import Time from './components/Time/index'
import {useState} from 'react'


function App() {

const times = [
  {
    nome : "Programação",
    corPrimaria : "#57C278",
    corSecundaria : "#D9F7E9"
  },
  {
    nome : "Front-End",
    corPrimaria : "#82CFFA",
    corSecundaria : "#E8F8FF"
  },
  {
    nome : "Data Science",
    corPrimaria : "#A6D157",
    corSecundaria : "#F0F8E2"
  },
  {
    nome : "Devops",
    corPrimaria : "#E06B69",
    corSecundaria : "#FDE7E8"
  },
  {
    nome : "UX e Design",
    corPrimaria : "#D86EBF",
    corSecundaria : "#EAE9F5"
  },
  {
    nome : "Mobile",
    corPrimaria : "#FFBA05",
    corSecundaria : "#FFF5D9"
  },
  {
    nome : "Inovação e Gestão",
    corPrimaria : "#FF8A29",
    corSecundaria : "#FFEEDF"
  },
]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) =>{
  console.log(colaborador)
  //ou seja, estou espalhando o objeto recebido nesse array antigo e adicionando ele no final.
  setColaboradores([...colaboradores,colaborador])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario> 
      {times.map( time => <Time 
      key={time.nome} 
      nomeTime={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <RodaPe/>
    </div>
  );
}

export default App;
