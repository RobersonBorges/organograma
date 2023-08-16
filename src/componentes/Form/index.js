import Botao from '../Botao'
import InputTexto from '../InputTexto'
import Lista from '../Lista'
import './Form.css'

const Form = () => {

    const times = [
        'PT CHEI DE MACRO',
        'PT CHEI DE MULHER',
        'PT CHEI DE MÁ VONTADE',
        'PT CHEI DE GARIMPEIRO',
        'PT CHEI DE MIGUE'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados dos membros </h2>
                <InputTexto label="Nome" placeholder="digite o nome" />
                <InputTexto label="Cargo" placeholder="digite o cargo" />
                <InputTexto label="Imagem" placeholder="especifique o caminho da imagem" />
                <Lista label="PTs da Asgard" itens={times} />
                <Botao>
                    Cria Card
                </Botao>
            </form>
        </section>
    )

}

export default Form