import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './style.css'

const Colaborador = (props) => {

	const favoritar = () => {
		props.aoFavoritar(props.id)
	}

	return (
		<div className='colaborador'>
			<AiFillCloseCircle
				size={25}
				onClick={() => props.aoDeletar(props.id)}
				className='deletar'
			/>
			<div style={{ backgroundColor: props.corCabecalho }} className='cabecalho'>
				<img src={props.imagem} alt={props.nome} />
			</div>
			<div className='rodape'>
				<h4>{props.nome}</h4>
				<h5>{props.cargo}</h5>
				<div className='favoritar'>
					{props.favorito
						? <AiFillHeart size={25} onClick={favoritar} color='#FF0000' />
						: <AiOutlineHeart size={25} onClick={favoritar} />
					}
				</div>
			</div>
		</div>
	)
}

export default Colaborador
