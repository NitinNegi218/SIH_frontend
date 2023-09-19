/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import axios from 'axios';
import './Services.css';
import CardItem from '../CardItem';

function Services() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Function to open the file input when the button is clicked
  // const handleButtonClick = () => {
  //   fileInputRef.current.click();
  // };
  const [selectedFile, setSelectedFile] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/upload', formData);
      setClassificationResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  // Function to handle file selection
  // const handleFileSelect = () => {
  //   const file = selectedFile; // Get the selected file
  //   if (file) {
  //     // Display the selected image
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSelectedImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
       
      <div style={{ textAlign: 'center' }}>
        {/* Right side content */}
        <h1>Upload and Display Image
        </h1><br></br>
          <form onSubmit={handleSubmit}>
            <div class ='Chikki'>
              <label htmlFor="fileInput" className="custom-file-input">
                
                <div className="file-input-button">
                  {selectedFile ? (<span>{selectedFile.name}</span>) : (<></>)}
                  <span>Choose file</span>
                </div>
              </label>
              <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept=".jpg"
                  style={{ display: 'none' }}
                />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#242222',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop : '10px',
              }}
              onClick = {console.log(selectedImage)}

            >
              UPLOAD
            </button>
          </form>
          {/* use this code after the backend call */}
          {classificationResult ? (
            <>
    
            <CardItem
            src={selectedImage}
            text={classificationResult.description}
            label={classificationResult.result}
            path='#'
            />

            </>
          ) : (<p>The model was not able to classify the uploaded image</p>)}
          {/* <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelect}
           */}
      

      </div>
      {classificationResult && (
        <div>
          <h2>Classification Result:</h2>
          <pre>{JSON.stringify(classificationResult, null, 2)}</pre>
        </div>
      )}
      <div style={{ width: '100%' }}>
        <Cards />
        <Footer />
      </div>
    
    </div>
   
  );
}

export default Services;
