import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    // API Django backend
    axios.get("http://127.0.0.1:8000/api/utilisateurs/")
      .then(res => setUtilisateurs(res.data))
      .catch(err => console.log(err));

    axios.get("http://127.0.0.1:8000/api/produits/")
      .then(res => setProduits(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {utilisateurs.map(u => <li key={u.id}>{u.nom} ({u.email})</li>)}
      </ul>

      <h1>Liste des produits</h1>
      <ul>
        {produits.map(p => <li key={p.id}>{p.nom} - {p.prix} €</li>)}
      </ul>
    </div>
  );
}

export default App;