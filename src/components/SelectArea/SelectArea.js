import './SelectArea.css'

export const SelectArea = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.nome}</label>
            <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} placeholder='Selecione um time'>
                <option></option>
                {/* Fiz um map para retornar os options de acordo com a lista de informações que estava la no item */}
                {props.itens.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })
                }
            </select>
        </div>

    )
}