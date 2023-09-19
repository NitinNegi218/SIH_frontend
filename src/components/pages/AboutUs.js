import React, { useState, useRef } from 'react';
import Cards from '../Cards';
import './AboutUs.css';
import Footer from '../Footer';
import axios from 'axios';

// function AboutUs() {
  // const [selectedImage, setSelectedImage] = useState(null);
  // const fileInputRef = useRef(null);

  // // Function to open the file input when the button is clicked
  // // const handleButtonClick = () => {
  // //   fileInputRef.current.click();
  // // };
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [classificationResult, setClassificationResult] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('file', selectedFile);

  //   try {
  //     const response = await axios.post('/upload', formData);
  //     setClassificationResult(response.data.result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  // // Function to handle file selection
  // const handleFileSelect = (event) => {
  //   const file = event.target.files[0]; // Get the selected file
  //   if (file) {
  //     // Display the selected image
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSelectedImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  function FAQCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="faq-card">
        <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
          {question}
          <div className={`faq-icon ${isOpen ? 'open' : ''}`}>{isOpen ? '-' : '+'}</div>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  }
  
  function AboutUs() {
    const faqData = [
      {
        question: 'Are there any costs with regard to the app?',
        answer: 'No, the website is completely free of charge and advertising. All you need is to upload the photo of the plant you want to identify.'
      },
      {
        question: 'How does Sankalp work?',
        answer: 'When you will open the website, you will first find the Home page where you will click on the upload button from where it will direct you to the services page where you can upload the photo to identify the plant',
      },
      {
        question: 'Can Sankalp identify wild plants only?',
        answer: 'No, this website exclusively focuses on the identification of medicinal plants as our primary concern is the well-being of individuals.',
      },
      // Add more FAQ items as needed
    ];
  
    return (
      <div>
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <br></br>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQCard key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
       <div style={{ width: '100%' }}>
        <Cards />
        <Footer />
      </div> 
      </div>
    );
}

export default AboutUs;
