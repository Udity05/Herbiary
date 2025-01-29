import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Find.css';

const FindPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const plants = [
    { id: '1', name: 'Amla (Indian Gooseberry)' },
    { id: '2', name: 'Ashwagandha' },
    { id: '3', name: 'Bael (Wood Apple)' },
    { id: '4', name: 'Neem' },
    { id: '5', name: 'Tulsi' },
    { id: '6', name: 'Bharangi' },
    { id: '7', name: 'Bhringraj' },
    { id: '8', name: 'Dita' },
    { id: '9', name: 'Rakta Chitraka' },
    { id: '10', name: 'Sandalwood' },
    { id: '11', name: 'Sarpagandha' },
    { id: '12', name: 'Turmeric' },
  ];

  // Filter plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="find-page">
      <h1>Find Your Plant</h1>
      <input
        type="text"
        placeholder="Search for a plant..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="plant-list">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-item">
              <h2>{plant.name}</h2>
              <Link to={`/plant/${plant.id}`} className="details-link">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No plants found.</p>
        )}
      </div>
    </div>
  );
};

export default FindPage;
