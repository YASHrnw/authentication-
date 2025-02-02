import { useNavigate } from "react-router-dom";
import { bids } from "..//../data/bids";

const BidList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Live Bids</h3>
      <div className="row">
        {bids.map((bid) => (
          <div key={bid.id} className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{bid.bidNumber}</h5>
                <p>
                  <strong>From:</strong> {bid.origin}<br/>
                  <strong>To:</strong> {bid.destination}<br/>
                  <strong>Vehicle:</strong> {bid.vehicleType}
                </p>
                <button 
                  onClick={() => navigate(`/bid/${bid.id}`)}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidList;