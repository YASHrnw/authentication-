import { useState } from "react";
import PropTypes from "prop-types";

const ResponseForm = ({ bidId }) => {
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Response submitted for Bid ${bidId}`);
    console.log(message);
    
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4>Submit Response</h4>
      <div className="mb-3">
        <label className="form-label">Your Price (₹)</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        Submit Response
      </button>
    </form>
  );
};

ResponseForm.propTypes = {
  bidId: PropTypes.number.isRequired,
};

export default ResponseForm;
