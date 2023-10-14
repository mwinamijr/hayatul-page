import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

function Footer() {
  return (
    <Card>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Mentor</h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 ">
                <h4>Staff login</h4>
                <form action="">
                  <div className="row mb-3">
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="inputEmail" placeholder="email" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword" placeholder="password" />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              
              Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
            <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
            <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
            <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
            <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
          </div>
        </div>
        </footer>
    </Card>
  )
}

export default Footer