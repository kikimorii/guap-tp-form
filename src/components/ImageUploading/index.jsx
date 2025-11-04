import ImageUploading from "react-images-uploading";

export const ImageUploadingWrapper = ({ images, setImages }) => {
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        console.log("Images changed:", imageList, addUpdateIndex);
        setImages(Array.isArray(imageList) ? imageList : []);
    };

    const renderImageList = (imageList, onImageUpdate, onImageRemove) => {
        if (!Array.isArray(imageList)) {
            console.error("imageList is not an array:", imageList);
            return null;
        }

        return imageList.map((image, index) => (
            <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
            </div>
        ));
    };

    return (
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg", "jpeg", "png"]}
        >
            {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
            }) => (
                <div className="upload__image-wrapper">
                    {images.length < maxNumber ? (
                        <button
                        style={isDragging ? { color: "red" } : null}
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        Click or Drop here
                    </button>
                    ) : ""}
                    {images.length > 1 ? (<button onClick={onImageRemoveAll}>Remove all images</button>) : ""}

                    {renderImageList(imageList, onImageUpdate, onImageRemove)}
                </div>
            )}
        </ImageUploading>
    );
};