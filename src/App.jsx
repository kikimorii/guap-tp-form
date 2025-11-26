import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { getBuildingsList, schema, sendDateToServer } from './utils';
import { TextInput, SelectInput, ImageUploadingWrapper } from './components';
import styles from './App.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const buildingsList = getBuildingsList();

export default function App() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: '',
			email: '',
			title: '',
			building: null,
			auditorium: '',
		},
	});

	const values = watch();
	const isFormEmpty = Object.values(values).every(v => !v);
	const isFormFull = Object.values(values).every(v => v);
	const [images, setImages] = useState([]);

	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<div className={styles.wrapper}>
				{isLoading ? (
					<>
						<h4>Отправка данных...</h4> <div className={styles.loader}></div>
					</>
				) : (
					<>
						<h3>
							Нашёл поломку?
							<br />
							Сообщи нам!
						</h3>
						<form
							className={styles.form}
							onSubmit={handleSubmit(data =>
								sendDateToServer(data, images, navigate, setIsLoading),
							)}
						>
							<TextInput
								placeholder="Как Вас зовут?"
								register={register}
								error={errors.name}
								registerField="name"
							/>
							<TextInput
								placeholder="Укажите почту для обратной связи"
								register={register}
								error={errors.email}
								registerField="email"
							/>
							<TextInput
								placeholder="Что случилось?"
								register={register}
								error={errors.title}
								registerField="title"
								textarea={true}
							/>
							<SelectInput
								placeholder="В каком корпусе это приключилось?"
								name="building"
								control={control}
								options={buildingsList}
								error={errors.building}
							/>
							<TextInput
								placeholder="Какая аудитория рядом?"
								register={register}
								error={errors.auditorium}
								registerField="auditorium"
								disabled={values.building === null}
							/>
							<ImageUploadingWrapper images={images} setImages={setImages} />
							<button
								className={`btn-text filled ${!isFormFull ? 'disabled' : 'primary'}`}
								type="submit"
								disabled={!isFormFull}
							>
								Отправить
							</button>
							<button
								className={`btn-text ${isFormEmpty ? 'disabled' : 'secondary'} filled`}
								type="button"
								onClick={() => reset()}
								disabled={isFormEmpty}
							>
								Сбросить
							</button>
						</form>
					</>
				)}
			</div>
		</>
	);
}
