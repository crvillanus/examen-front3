import { useState } from 'react';
import Card from './Components/Card';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    if (!isSubmitted) {
      setName(e.target.value);
    }
  };

  const handleDetailChange = (e) => {
    if (!isSubmitted) {
      setDetail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || name.startsWith(' ') || detail.length < 6) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="App">
      {!isSubmitted && <h2>¿Cúal es tu profesión?</h2>}
      
      {!submitted && !isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="detail">Carrera: </label>
            <input
              type="text"
              id="detail"
              value={detail}
              onChange={handleDetailChange}
            />
          </div>
          <button type="submit">Enviar</button>
          {error && <p className="error">Por favor chequea que la información sea correcta</p>}
        </form>
      ) : (
        <Card name={name} detail={detail} />
      )}
    </div>
  );
};

export default App;