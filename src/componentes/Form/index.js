import { useState } from 'react'
import Botao from '../Botao'
import InputTexto from '../InputTexto'
import Lista from '../Lista'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()

        props.aoMembroCadastrado({
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
                <h2>Preencha os dados dos membros </h2>
                <InputTexto required={true}
                    label="Nome"
                    placeholder="digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <InputTexto required={true}
                    label="Cargo"
                    placeholder="digite o cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <InputTexto label="Imagem"
                    placeholder="especifique o caminho da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Lista required={true}
                    label="PTs da Asgard" itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Botao>
                    Cria Card
                </Botao>
            </form>
        </section>
    )

}

export default Form