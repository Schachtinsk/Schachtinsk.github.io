import Header from "./../components/header/Header"

const Home = () => {
    return ( 
        <div>
        <Header />

        <main className="section">
          <div className="container">
    
    
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2 sklp">Skills</h2>
                <p>
                HTML, CSS, JavaScript, ReactJS, TailwindCSS
                </p>
                <img 
                src="https://www.codewars.com/users/Kotyi/badges/large" 
                alt="Codewars Badge" 
                />
              </li>
            </ul>
          </div>
        </main>
        </div>
     );
}
 
export default Home;