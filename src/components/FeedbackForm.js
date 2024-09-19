import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported correctly

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // Replace URL with your backend or service endpoint
      await axios.post('/api/feedback', { email, feedback });
      setStatus('Feedback submitted successfully!');
      setFeedback('');
      setEmail('');
    } catch (error) {
      setStatus('Failed to submit feedback.');
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default FeedbackForm;
