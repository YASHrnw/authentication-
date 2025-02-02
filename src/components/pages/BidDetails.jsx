import { useParams, useNavigate } from "react-router-dom";
import { bids } from "../../data/bids";
import ResponseForm from "./ResponseForm";

const BidDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bid = bids.find(b => b.id === parseInt(id));

  return (
    <div className="container mt-4">
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">
        Back
      </button>
      <div className="card shadow">
        <div className="card-body">
          <h3>{bid.bidNumber}</h3>
          <div className="row mt-4">
            <div className="col-md-6">
              <p><strong>Origin:</strong> {bid.origin}</p>
              <p><strong>Destination:</strong> {bid.destination}</p>
              <p><strong>Vehicle Type:</strong> {bid.vehicleType}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Material:</strong> {bid.material}</p>
              <p><strong>Weight:</strong> {bid.weight}</p>
              <p><strong>Start Date:</strong> {bid.startDate}</p>
            </div>
          </div>
          <ResponseForm bidId={bid.id} />
        </div>
      </div>
    </div>
  );
};

export default BidDetails;