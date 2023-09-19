import React, { useState, useRef } from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import axios from 'axios';
import './Services.css';

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/upload', formData);
      setClassificationResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };


  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Display the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
       <div>
        {/* Left side content */}
        {selectedImage && (
          <div>
          <div style={{ textAlign: 'center' }}>
            <h2>Selected Image:</h2>
            </div>
            <div style={{ textAlign: 'right' }}>
            <h2>RESULT</h2>
            </div>
            <div style={{ textAlign: 'left' }}>
            <img src={selectedImage} alt="Uploaded" width="50%" />
            </div>
          </div>
        )}
      </div> 
      <div style={{ textAlign: 'center' }}>
        {/* Right side content */}
        <h1>Upload and Display Image
        </h1><br></br>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelect}
          
        />
          <form onSubmit={handleSubmit}>
          <div class ='Chikki'>
        <label htmlFor="fileInput" className="custom-file-input">
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept=".jpg"
            style={{ display: 'none' }}
          />
          <div className="file-input-button">
            <span>No file chosen</span>
            <span>Choose file</span>
          </div>
        </label>
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
          }}
        >
          UPLOAD
        </button>
      </form>

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
