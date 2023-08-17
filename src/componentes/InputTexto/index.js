import './InputTexto.css'
const InputTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="input-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor}
                required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default InputTexto