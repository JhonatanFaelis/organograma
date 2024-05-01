import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) =>{
    return (
        (props.colaboradores.length > 0) ? 
        <section className="time" style={{background: props.corSecundaria}}>
            <h3 style={{borderColor : props.corPrimaria}}>
                {props.nomeTime}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem ={colaborador.imagem}/>)}
            </div>
        </section>
            : ''
            ) 
}

export default Time

//criando um component novo, com a index. 
//primeiramente nos fazemos o import do css
//depois é feito a declaração do component em sim com const NOMECOMPONENT arrow function e dentro return (aqui vem toda a parte do codigo em html que vai ser retornado;)
// finalizando a estrutura basica, temos o export dafalt NOMEDOCOMPONENT