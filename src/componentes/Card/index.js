import './Card.css'
const Card = ({ nome, cargo, imagem, corDeFundo }) => {
    return (
        <div className='card'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

/**dentro do parametor do Card, foi feita desestruturação de Props, ao invés de trazer o objeto inteiro
 * utilizamos apenas as propriedades que usamos no componente
 */

export default Card;