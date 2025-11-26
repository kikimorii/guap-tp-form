import styles from './App.module.scss';
import { useNavigate } from 'react-router-dom';

const errorAlert = {
	color: '#721c24',
	backgroundColor: '#f8d7da',
	padding: '.75rem 1.25rem',
	border: '1px solid transparent',
	borderRadius: '.25rem',
	boxSizing: 'border-box',
	marginBottom: '20px',
};

export default function Error() {
	const navigate = useNavigate();
	return (
		<div className={styles.wrapper}>
			<div style={errorAlert}>
				К сожалению, сервер не смог обработать вашу форму. Попробуйте ввести данные
				ещё раз или попробуйте позже.
			</div>
			<button
				className="btn btn-text filled"
				onClick={() => {
					console.log('click');
					navigate('/', { replace: true });
				}}
			>
				Вернуться назад
			</button>
		</div>
	);
}
