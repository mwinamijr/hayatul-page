import { Link } from "react-router-dom"

function HomeScreen() {
  return (
    <div>
      <section id="hero" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h1>Learning Today,<br />Leading Tomorrow</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <Link to="courses.html" class="btn-get-started">Get Started</Link>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen