import './lista.css'
const Lista = (props) => {

    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select required={props.required}
                valor={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}

            </select>
        </div>
    )

}

export default Lista