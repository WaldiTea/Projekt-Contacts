const Contact = (props) => {
  return (
    <section>
      <img
        src={props.pictureUrl}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = 'http://www.ballonssansfrontiere.com/wp-content/plugins/download-manager/assets/images/img-404.png'
        }} 
        alt="-"
      />
      <p>{props.name}</p>
      <p>{props.popularity}</p>
    </section>
  );
}

export default Contact;