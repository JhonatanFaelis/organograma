
import './InputArea.css'

const InputArea = (props) =>{

    

    const aoDigitado = (evento) =>{
     props.aoAlterado(evento.target.value)
    }
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} className='tamanhoInput bordaSobreada' placeholder={props.placeholder}/>
         </div>
    )
}

export default InputArea;