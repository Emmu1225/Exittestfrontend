import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    courseId: '',
    courseName: '',
    ou: 'Academic',
    trainingType: 'LTT',
    startDate: '',
    endDate: '',
    batchCount: '',
    trainerName: '',
    status: 'Upcoming',
    finalFeedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/feedbacks/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }
  
      // Optionally, you can handle the successful submission here
      console.log('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };
  

  return (
    <div>
      <h2>Course Feedback Form</h2>
      <form>
        <label>
          Course ID:
          <input
            type="text"
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          OU:
          <select
            name="ou"
            value={formData.ou}
            onChange={handleChange}
          >
            <option value="Academic">Academic</option>
            <option value="Corporate">Corporate</option>
            <option value="Retail">Retail</option>
            <option value="Government">Government</option>
          </select>
        </label>
        <br />
        <label>
          Training Type:
          <select
            name="trainingType"
            value={formData.trainingType}
            onChange={handleChange}
          >
            <option value="LTT">LTT (6 months)</option>
            <option value="MDT">MDT (2 months)</option>
            <option value="Microskill">Microskill (1 month)</option>
          </select>
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Batch Count:
          <input
            type="number"
            name="batchCount"
            value={formData.batchCount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Trainer Name:
          <input
            type="text"
            name="trainerName"
            value={formData.trainerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Hold">Hold</option>
          </select>
        </label>
        <br />
        <label>
          Final Feedback:
          <textarea
            name="finalFeedback"
            value={formData.finalFeedback}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
