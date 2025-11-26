import ImageUploading from 'react-images-uploading';
import styles from './imageUploadingWrapper.module.scss';

export const ImageUploadingWrapper = ({ images, setImages }) => {
	const maxNumber = 3;

	const onChange = imageList => {
		setImages(Array.isArray(imageList) ? imageList : []);
	};

	const renderImageList = (imageList, onImageUpdate, onImageRemove) => {
		if (!Array.isArray(imageList)) {
			console.error('imageList is not an array:', imageList);
			return null;
		}

		if (imageList.length > 0) {
			return (
				<div className={styles.imagesWrapper}>
					{imageList.map((image, index) => (
						<div key={index} className={styles.imagesItem}>
							<img src={image.data_url} alt="" />
							<div className={styles.imagesItemButtons}>
								<button
									type="button"
									className="btn-text primary filled"
									onClick={() => onImageUpdate(index)}
								>
									Обновить
								</button>
								<button
									type="button"
									className="btn-text secondary filled"
									onClick={() => onImageRemove(index)}
								>
									Удалить
								</button>
							</div>
						</div>
					))}
				</div>
			);
		} else return null;
	};

	return (
		<ImageUploading
			multiple
			value={images}
			onChange={onChange}
			maxNumber={maxNumber}
			dataURLKey="data_url"
			acceptType={['jpg', 'jpeg', 'png']}
		>
			{({
				imageList,
				onImageUpload,
				onImageRemoveAll,
				onImageUpdate,
				onImageRemove,
				isDragging,
				dragProps,
			}) => (
				<div className={styles.imageUploadWrapper}>
					{images.length < maxNumber ? (
						<button
							className={`${styles.addButton} ${isDragging ? styles.isDragging : ''}`}
							onClick={onImageUpload}
							type="button"
							{...dragProps}
						>
							Перетащите фотографию или нажмите для выбора
						</button>
					) : (
						''
					)}
					{images.length > 1 ? (
						<button className="btn-text secondary filled" onClick={onImageRemoveAll}>
							Удалить все фотографии
						</button>
					) : (
						''
					)}

					{renderImageList(imageList, onImageUpdate, onImageRemove)}
				</div>
			)}
		</ImageUploading>
	);
};
