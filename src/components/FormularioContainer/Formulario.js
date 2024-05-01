import { Botao } from '../Botao/Botao'
import InputArea from '../InputArea/InputArea'
import { SelectArea } from '../SelectArea/SelectArea'
import {useState} from 'react'
import './Formulario.css'


export const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ]


        //vai ter que ter um estado para cada input para receber o valor mocado e o valor que vai ser alterado
        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')

        const aoSalvar = (e) =>{
            e.preventDefault()
            //console.log(`O formulario foi submetido com a seguintes informações ${nome}, ${cargo}, ${imagem}, ${time}`)

            //pegando a função que esta no app.js e mandando o objeto para cadastro. 
            props.aoColaboradorCadastrado({
                nome,
                cargo,
                imagem,
                time
            })

            setNome('')
            setCargo('')
            setImagem('')
            setTime('')
        }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputArea 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                label='Nome' 
                placeholder='Digite o seu Nome' 
                />
                <InputArea 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                label='Cargo' 
                placeholder='Digite o seu Cargo' 
                />
                <InputArea 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                label='Imagem' placeholder='Digite a Url da Imagem' />
                <SelectArea 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                nome='Times' 
                itens={times}
                />
                <Botao texto='Criar Card' ></Botao>
            </form>
        </section>
    )
}