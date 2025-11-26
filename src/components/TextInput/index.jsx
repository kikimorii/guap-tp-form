export const TextInput = ({
	placeholder,
	register,
	registerField,
	error,
	textarea,
	disabled,
}) => {
	return (
		<>
			{error && <p className="error_message">{error.message}</p>}
			{textarea ? (
				<textarea
					className="resize-none"
					style={{ height: '150px' }}
					placeholder={placeholder}
					{...register(registerField)}
				/>
			) : (
				<input
					type="text"
					placeholder={placeholder}
					{...register(registerField)}
					disabled={disabled}
				/>
			)}
		</>
	);
};
