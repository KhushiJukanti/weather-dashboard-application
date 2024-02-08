
import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='mt-2' htmlFor="feedback">Feedback:</label>
        <textarea
          className="form-control mt-2"
          id="feedback"
          rows="3"
          value={feedback}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default FeedbackForm;
