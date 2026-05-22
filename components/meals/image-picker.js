"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();
  const handleImageClick = () => {
    imageInput.current.click();
  };

  const onImagePicked = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="the image selected by user" fill />
          ) : (
            <p>No Image picked yet!</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png,image/jpeg"
          ref={imageInput}
          onChange={onImagePicked}
          required
        />
      </div>
      <button
        type="button"
        onClick={handleImageClick}
        className={classes.button}
      >
        Pick an Images
      </button>
    </div>
  );
};

export default ImagePicker;
