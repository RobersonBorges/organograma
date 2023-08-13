import './InputTexto.css'
export const InputTexto = (props) => {
    return (
        <div className="input-texto">
            <label>{props.label}</label>
            <input placeholder={`${props.placeholder}...`} />
        </div>
    )
}
