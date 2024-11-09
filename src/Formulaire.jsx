import React, { useRef, useState } from 'react';

function Formulaire() {
  const themeref = useRef();
  const date_debutref = useRef();
  const date_finref = useRef();
  const coutref = useRef();
  const expertref = useRef();

  const [formData, setFormData] = useState({
    theme: '',
    date_debut: '',
    date_fin: '',
    cout: '',
    expert: '',
    duree: 0,
    cout_total: 0,
  });

  const [minDateFin, setMinDateFin] = useState(''); 
  function handleDateDebutChange(e) {
    const selectedDateDebut = e.target.value;
    setMinDateFin(selectedDateDebut);
  }

  function afficher(e) {
    e.preventDefault();

    const theme = themeref.current.value;
    const date_debut = date_debutref.current.value;
    const date_fin = date_finref.current.value;
    const cout = parseFloat(coutref.current.value);
    const expert = expertref.current.value;

    const duree = Math.round(
      (new Date(date_fin) - new Date(date_debut)) / (1000 * 60 * 60 * 24)
    );
    const cout_total = duree * cout;

    setFormData({ theme, date_debut, date_fin, cout, expert, duree, cout_total });
  }

  return (
    <div>
      <form onSubmit={afficher}>
        <label className="form-label">Theme</label>
        <input
          type="text"
          className="form-control"
          name="theme"
          ref={themeref}
          placeholder="theme"
        />

        <label className="form-label">Date de début</label>
        <input
          type="date"
          className="form-control"
          name="date_debut"
          ref={date_debutref}
          onChange={handleDateDebutChange} 
          placeholder="date de debut"
        />

        <label className="form-label">Date de fin</label>
        <input
          type="date"
          className="form-control"
          name="date_fin"
          ref={date_finref}
          min={minDateFin} 
          placeholder="date de fin"
        />

        <label className="form-label">Cout</label>
        <input
          type="number"
          className="form-control"
          name="cout"
          ref={coutref}
          placeholder="Cout"
        />

        <label className="form-label">Expert</label>
        <input
          type="text"
          className="form-control"
          name="expert"
          ref={expertref}
          placeholder="expert"
        /><br/>
        <button type="submit" className="btn btn-success">
          Confirmer
        </button>
      </form><br/>

      <div className="container">
        L'expert : <b>{formData.expert}</b>  assurera le théme :  <b> {formData.theme}</b>, avec un coût journalier : <b>{formData.cout}</b> DH,
        pour une durée de : <b>{formData.duree}</b> jours, soit un coût total de <b>{formData.cout_total}</b> DH.
      </div>
    </div>
  );
}

export default Formulaire;
