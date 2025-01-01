import React from "react";
import { useState } from "react";
const Request = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };
  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="question"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div> */}
        
        <div className="form-group input-group mb-1 " style={{ width: '600px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">
          <button type="submit" className="btn btn-secondary mt-2" style={{ color: 'rgb(249, 232, 217)' }} >
          Submit
        </button>

          </span>
        </div>

        {/* <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Request;
