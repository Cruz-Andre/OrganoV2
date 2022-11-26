import './style.css'

const ListaSuspensa = (props) => {

	const aoSelecionado = (evento) => {
		props.aoAlterado(evento.target.value)
	}

	return (
		<div className='campo-lista'>
			<label>{props.label}</label>
			<select
				value={props.valor}
				onChange={aoSelecionado}
				required={props.obrigatorio}
			>
				<option value={""}></option>
				{props.itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default ListaSuspensa