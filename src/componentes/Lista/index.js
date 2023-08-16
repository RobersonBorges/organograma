import './lista.css'
const Lista = (prop) => {

    return (
        <div className='lista'>
            <label>{prop.label}</label>
            <select>
                {prop.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default Lista