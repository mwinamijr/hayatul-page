import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><Link to="index.html">Mentor</Link></h1>
          
          <Link to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></Link>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><Link tos="active" href="index.html">Home</Link></li>
              <li><Link to="about.html">About</Link></li>
              <li><Link to="courses.html">Courses</Link></li>
              <li><Link to="trainers.html">Trainers</Link></li>
              <li><Link to="events.html">Events</Link></li>
              <li><Link to="pricing.html">Pricing</Link></li>

              <li class="dropdown"><Link to="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to="#">Drop Down 1</Link></li>
                  <li class="dropdown"><Link to="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></Link>
                    <ul>
                      <li><Link to="#">Deep Drop Down 1</Link></li>
                      <li><Link to="#">Deep Drop Down 2</Link></li>
                      <li><Link to="#">Deep Drop Down 3</Link></li>
                      <li><Link to="#">Deep Drop Down 4</Link></li>
                      <li><Link to="#">Deep Drop Down 5</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Drop Down 2</Link></li>
                  <li><Link to="#">Drop Down 3</Link></li>
                  <li><Link to="#">Drop Down 4</Link></li>
                </ul>
              </li>
              <li><Link to="contact.html">Contact</Link></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Link to="courses.html" class="get-started-btn">Get Started</Link>

        </div>
      </header>
    </div>
  )
}

export default Header