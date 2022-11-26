import { useState } from 'react'
import Button from '../Button/Button'
import CampoInputs from '../CampoInputs/CampoInputs'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './style.css'

const Formulario = (props) => {

	const [nome, setNome] = useState('')
	const [cargo, setCargo] = useState('')
	const [imagem, setImagem] = useState('')
	const [time, setTime] = useState('')
	const [nomeTime, setNomeTime] = useState('')
	const [corTime, setCorTime] = useState('')


	const handleSubmit = (event) => {
		event.preventDefault()
		props.aoColaboradorCadastrado({
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

	const handleSubmitNovoTimeCadastrado = (evento) => {
		evento.preventDefault()
		props.cadastrarTime({nome: nomeTime, cor: corTime})
		setNomeTime('')
		setCorTime('')
	}


	return (
		<section className='formulario'>
			<form onSubmit={handleSubmit}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoInputs
					type={'text'}
					valor={nome}
					aoAlterado={valor => setNome(valor)}
					label={"Nome"}
					placeholder={"Digite o seu nome"}
					obrigatorio={true}
				/>

				<CampoInputs
					type={'text'}
					valor={cargo}
					aoAlterado={valor => setCargo(valor)}
					label={"Cargo"}
					placeholder={"Digite o seu cargo"}
					obrigatorio={true}
				/>

				<CampoInputs
					type={'text'}
					valor={imagem}
					aoAlterado={valor => setImagem(valor)}
					label={"Imagem"}
					placeholder={"Digite o endereço da imagem"}
					obrigatorio={false}
				/>

				<ListaSuspensa
					valor={time}
					aoAlterado={valor => setTime(valor)}
					label={"Time"}
					itens={props.times}
					obrigatorio={true}
				/>

				<Button>
					{/* Desse jeito eu uso children --> props.children lá no componente */}
					Criar Card
				</Button>
			</form>

			<form onSubmit={handleSubmitNovoTimeCadastrado}>
				<h2>Preencha os dados para criar um novo time.</h2>
				<CampoInputs
					type={'text'}
					valor={nomeTime}
					aoAlterado={valor => setNomeTime(valor)}
					label={"Nome do time"}
					placeholder={"Digite o nome do time"}
					obrigatorio={true}
				/>
				<CampoInputs
					type={'color'}
					valor={corTime}
					aoAlterado={valor => setCorTime(valor)}
					label={"Cor do time"}
					placeholder={"#A2C4E6"}
					obrigatorio={true}
				/>
				<Button>
					{/* Desse jeito eu uso children --> props.children lá no componente */}
					Criar um novo time
				</Button>
			</form>
		</section>
	)
}

export default Formulario