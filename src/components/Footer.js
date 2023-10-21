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
                <h3>HAYATUL</h3>
                <p>
                  S.L.P. 507 <br />
                  Bonga - Babati TC<br />
                  Manyara <br /><br />
                  <strong>Simu:</strong> +255 788 030 052<br />
                  <strong>Simu:</strong> +255 752 506 523<br />
                  <strong>Email:</strong> hayatulislamiyass@gmail.com<br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Nyumbani</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Kuhusu sisi</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Huduma zeu</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Fomu za kujiunga</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Huduma zetu</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">HISMS</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Jinsi ya kutumia HISMS</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Huduma ya Afya</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Matokeo</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">DEVELOPERS</Link></li>
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
                    <button type="submit" className="btn get-started-btn">Login</button>
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