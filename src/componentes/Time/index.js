import Card from '../Card'
import './Time.css'

const Time = (props) => {
    const cssBackGroundColor = { backgroundColor: props.corPrimaria }
    const cssBorderColor = { borderColor: props.corSecundaria }

    return (
        (props.cards.length > 0) && <section className='time' style={cssBackGroundColor}>
            <h3 style={cssBorderColor}>{props.nome} </h3>
            <div className='cards'>
                {props.cards.map(membro => <Card corDeFundo={props.corSecundaria} key={membro.nome} nome={membro.nome} cargo={membro.cargo} imagem={membro.imagem} />)}
            </div>
        </section>
    )
}

/**props.cards.length && -> é como se fosse o if do java script, ele testa se a variavel é true, se sim, renderiza a section
 * também funciona com operador ternário
 */

export default Time