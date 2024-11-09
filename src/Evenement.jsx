import React from 'react'
import {expertsData} from './ExpertsData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
function Evenement() {
  return (
    <div>
      <table className='table table-bordered'>
                <thead>
                 
                    <tr>
                        <th scope="col">Thème </th>
                        <th scope="col">Date début</th>
                        <th scope="col">Date fin</th>
                        <th scope="col">Description</th>
                        <th scope="col">Cout Journalier</th>
                        <th scope="col">Durée</th>
                        <th scope="col">Cout Total Event</th>
                    </tr>
                </thead>
                <tbody>
  {expertsData.map(expert => (
    <React.Fragment key={expert.id}>
      <tr>
        <td colSpan="7">{expert.name}</td>
      </tr>
      {expert.evenements.map(eventt => {
        const ct = eventt.duree * eventt.cout_journalier;
        return (
          <tr key={eventt.id}>
            <td>{eventt.theme}</td>
            <td>{eventt.date_debut}</td>
            <td>{eventt.date_fin}</td>
            <td>{eventt.description}</td>
            <td>{eventt.cout_journalier}</td>
            <td>{eventt.duree}</td>
            <td>{ct}</td>
          </tr>
        );
      })}
    </React.Fragment>
  ))}
</tbody><tfoot>
  <tr>
    <td colSpan="8">
      {`Total des coûts des événements assurés est :
      ${expertsData.reduce((total, expert) => {
        return total + expert.evenements.reduce((subTotal, event) =>
          subTotal + (event.duree * event.cout_journalier), 0);
      }, 0)} DH`}
    </td>
  </tr>
</tfoot>

            </table>
       
    </div>
  )
}

export default Evenement
