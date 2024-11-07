const Card = ({ name, detail }) => {
  return (
    <div className="card">
      <h3>¡Gracias por enviar tus datos!</h3>
      <br />
      <p>Hola <strong>{name}</strong>, sabemos que eres <strong>{detail}</strong>, nos alegramos por ti.</p>
    </div>
  );
};

export default Card;