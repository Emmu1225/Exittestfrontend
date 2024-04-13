import React from 'react';
import Feedback from './Feedback';

const AddCoursePage = () => {
    const handleSubmit = async (course) => {
        try {
          const response = await fetch('http://localhost:8080/feedbacks/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
          });
      
          if (!response.ok) {
            throw new Error('Failed to submit course. Please try again later.');
          }
      
          console.log('Course submitted successfully!');
          // Optionally, you can handle any success behavior here, such as showing a success message to the user
        } catch (error) {
          console.error('Error submitting course:', error.message);
          // Optionally, you can handle any error behavior here, such as showing an error message to the user
        }
      };
      

  return (
    <div>
      <h1>Add New Course</h1>
      <Feedback onSubmit={handleSubmit} />
    </div>
  );
};

export default AddCoursePage;