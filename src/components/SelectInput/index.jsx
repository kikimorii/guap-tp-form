import { Controller } from 'react-hook-form';
import Select from 'react-select';
import selectStyles from './SelectStyles';
import './reactSelect.scss';

export const SelectInput = ({
	placeholder,
	control,
	name,
	options,
	error,
	isDisabled,
	changeAuditorium,
}) => (
	<>
		{error && <p className="error_message">{error.message}</p>}
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Select
					{...field}
					className="react-select-container"
					classNamePrefix="react-select"
					placeholder={placeholder}
					options={options}
					value={field.value}
					onChange={value => {
						field.onChange(value);
						if (changeAuditorium) {
							changeAuditorium(value.value);
						}
					}}
					isDisabled={isDisabled}
					styles={selectStyles}
				/>
			)}
		/>
	</>
);
