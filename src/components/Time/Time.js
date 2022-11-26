import Colaborador from '../Colaborador/Colaborador'
import hexToRgba from 'hex-to-rgba';
import './style.css'

const Time = (props) => {
	// Estilos do css inline
	const corFundo = { backgroundColor: hexToRgba(props.corPrimaria, '0.6') }
	const borda = { borderColor: props.corPrimaria }

	return (
		(props.colaboradores.length > 0) && <section className='time' style={corFundo}>
			<input
				value={props.corPrimaria}
				onChange={evento => props.mudarCor(evento.target.value, props.id)}
				type='color'
				className='input-cor'
			/>
			<h3 style={borda}>{props.nome}</h3>

			<div className='colaboradores'>
				{props.colaboradores.map(colaborador => {
					return (
						<Colaborador
							key={colaborador.nome}
							id={colaborador.id}
							nome={colaborador.nome}
							cargo={colaborador.cargo}
							imagem={colaborador.imagem}
							favorito={colaborador.favorito}
							aoFavoritar={props.aoFavoritar}
							corCabecalho={props.corPrimaria}
							aoDeletar={props.aoDeletar}
						/>
					)
				})
				}
			</div>

		</section>
	)
}

export default Time
