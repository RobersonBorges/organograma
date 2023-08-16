import './InputTexto.css'
const InputTexto = (props) => {
    return (
        <div className="input-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default InputTexto