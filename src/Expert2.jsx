// Experts2.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Experts2() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:8000/expertsData')
      .then(response => {
        setExperts(response.data.expertsData || response.data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
        setError('Une erreur est survenue lors du chargement des données.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement des experts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Liste des Experts et leurs Événements</h2>
      <ul>
        {experts.map(expert => (
          <li key={expert.id}>
            <strong className='text-success'>{expert.nom_complet}</strong>
            <ul>
              {expert.evenements.map((evenement, index) => (
                <li key={index}>
                  <p><strong>Thème:</strong> {evenement.theme}</p>
                  <p><strong>Date Début:</strong> {evenement.date_debut}</p>
                  <p><strong>Date Fin:</strong> {evenement.date_fin}</p>
                  <p><strong>Description:</strong> {evenement.description}</p>
                  <p><strong>Coût Journalier:</strong> {evenement.cout_journalier} DH</p>
                  <p><strong>Durée:</strong> {evenement.duree} jours</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experts2;
