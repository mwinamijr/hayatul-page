import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="container">
      <header id="header" className="">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><Link to="/">Hayatul Islamiya</Link></h1>
          
          <Link to="/" className="logo me-auto"><img src="../assets/img/logo.png" alt="" className="img-fluid" /></Link>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link className="active" to="/">Home</Link></li>
              <li><Link to="/about">Kuhusu</Link></li>
              <li><Link to="courses.html">Huduma</Link></li>
              <li><Link to="events.html">Picha</Link></li>
              <li><Link to="pricing.html">Blogu</Link></li>

              <li className="dropdown"><Link to="#"><span>Elimu</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to="#">Awali</Link></li>
                  <li><Link to="#">Msingi</Link></li>
                  <li><Link to="#">Sekondari</Link></li>
                </ul>
              </li>
              <li><Link to="trainers.html">Afya</Link></li>
              <li><Link to="/contact-us">Wasiliana nasi</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Link to="courses.html" className="get-started-btn">Changia Ujenzi</Link>

        </div>
      </header>
    </div>
  )
}

export default Header