import styles from './App.module.scss';
import { useNavigate } from 'react-router-dom';
const successAlert = {
	color: '#155724',
	backgroundColor: '#d4edda',
	padding: '.75rem 1.25rem',
	border: '1px solid transparent',
	borderRadius: '.25rem',
	boxSizing: 'border-box',
	marginBottom: '20px',
};

export default function Success() {
	const navigate = useNavigate();
	return (
		<div className={styles.wrapper}>
			<div style={successAlert}>Ваша заявка была успешно отправлена.</div>
			<button
				className="btn btn-text filled"
				onClick={() => navigate('/', { replace: true })}
			>
				Вернуться назад
			</button>
		</div>
	);
}
