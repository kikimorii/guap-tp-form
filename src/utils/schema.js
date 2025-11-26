import * as yup from 'yup';

export const schema = yup.object().shape({
	name: yup.string().required('Нам нужно знать героя. Имя обязательно'),
	email: yup
		.string()
		.email('Укажите корректную почту')
		.required('Мы сообщим о результате. Почта обязательна'),
	title: yup
		.string()
		.required('Помогите нам понять, что сломалось. Опишите суть случившегося'),
	building: yup.object().required('Укажи корпус, иначе не найдём проблему'),
	auditorium: yup
		.string()
		.required('Без номера аудитории мы починим что-то другое'),
});
