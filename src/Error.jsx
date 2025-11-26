import styles from './App.module.scss';
const errorAlert = {
	color: '#721c24',
	backgroundColor: '#f8d7da',
	padding: '.75rem 1.25rem',
	border: '1px solid transparent',
	borderRadius: '.25rem',
	boxSizing: 'border-box',
};

export default function Error() {
	return (
		<div className={styles.wrapper}>
			<div style={errorAlert}>
				К сожалению, сервер не смог обработать вашу форму. Попробуйте ввести данные
				ещё раз или попробуйте позже.
			</div>
		</div>
	);
}
