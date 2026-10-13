import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const Player = ({ 
  id = 0,
  nom = "Joueur Inconnu", 
  équipe = "Libre", 
  nationalité = "Inconnue", 
  numéro_de_maillot = 0, 
  âge = 0, 
  Image = "/src/Photo vide.png"
}) => {
  return (
    <div className="col-md-4 mb-4" style={{ 
  background: 'linear-gradient(135deg, #0f172a 0%, #15803d 100%)',
  color: '#ffffff', 
  borderRadius: '16px', 
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  padding: '15px',
  margin: '5%' 
}}> 
    <div className="card h-100 bg-transparent border-0 text-white" style={{ width: '18rem', margin: '10px' }}>
      <img 
      src={Image} 
      className="card-img-top w-100" 
      alt={nom} 
      style={{ height: '400px', objectFit: 'cover', width: '100%', display: 'block' }} />

      <div className="card-body">
        <h5 className="card-title">{id}</h5>
        <h5 className="card-title">{nom}</h5>
        <p className="card-text"><strong>Équipe :</strong> {équipe}</p>
        <p className="card-text"><strong>Nationalité :</strong> {nationalité}</p>
        <p className="card-text"><strong>Âge :</strong> {âge} ans</p>
        <span className="badge bg-primary">N° {numéro_de_maillot}</span>
      </div>
    </div>
    </div>
  );
};



export default Player;
