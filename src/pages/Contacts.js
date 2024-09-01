const Contacts = () => {
    return ( 
        <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Deutschland, Nürnberg</p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p><a href="tel:+4917840383000">+49 178 40383000</a></p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Email</h2>
            <a href="mailto:hildebrandtilias@gmail.com"
              >hildebrandtilias@gmail.com</a
            >
          </li>
        </ul>
      </div>
    </main>
     );
}
 
export default Contacts;