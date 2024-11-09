import React from 'react';
import { expertsData } from './ExpertsData';

function Expert() {
  return (
    <div><ul>
      {expertsData.map((expert) => (
        <div key={expert.id} style={{ marginBottom: '20px' }}>
          <li><h2>{expert.nom_complet}</h2></li>
          <li><table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }} className='table table-bordered' >
            <thead>
              <tr>
                <th>Theme</th>
                <th>Date Debut</th>
                <th>Date Fin</th>
                <th>Description</th>
                <th>Cout Journalier</th>
                <th>Duree (jours)</th>
              </tr>
            </thead>
            <tbody>
              {expert.evenements.map((event, index) => (
                <tr key={index}>
                  <td>{event.theme}</td>
                  <td>{event.date_debut}</td>
                  <td>{event.date_fin}</td>
                  <td>{event.description}</td>
                  <td>{event.cout_journalier} DH</td>
                  <td>{event.duree}</td>
              
                </tr>
              ))}
            </tbody>
            <tfoot>
               <tr>
            {`Total des coûts des événements assurés est :
      ${expertsData.reduce((total, expert) => {
        return total + expert.evenements.reduce((subTotal, event) =>
          subTotal + (event.duree * event.cout_journalier), 0);
      }, 0)} DH`}
          </tr></tfoot>
          </table></li>
        </div>
      ))}
      </ul>
    </div>
  );
}

export default Expert;
