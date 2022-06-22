import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import experienced from "./components/images/experienced.png";
import fun from "./components/images/fun.png";
import smart from "./components/images/smart.png";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div>
          <script
            src="https://kit.fontawesome.com/ca178149e3.js"
            crossorigin="anonymous"
          ></script>
          <body className="websiteBackground">
            <h1 className="homeWelcome">Welcome</h1>

            <div class="container-fluid bg-light text-dark p-5">
              <div className="homeHeader">
                <h1 class="display-2">Stepping Stones</h1>
                <p>
                  <h1>Day school and nursey</h1>
                  As a parent oursleves, we truly understand the worry when
                  seeking a child care program. Our desire to ensure that our
                  children were attending a safe, high quality program filled
                  with loving teachers and caregivers led to us starting our own
                  daycare.
                </p>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <h1 class="text-center">Curriculum</h1>
                  <h2 class="font-italic font-weight-light m-5">
                    "We use Funshine Express, Moffat Girls, the mailbox and
                    other age-appropriate curriculum for our day to day learning
                    curriculum. Children learn by doing; they are interested in
                    hands-on materials and should be offered opportunities to
                    make meaningful choices. We offer a wide variety of ideas to
                    build early literacy, math, science, social skills, and
                    more. We help you address each child socially, physically,
                    emotionally, and cognitively. Our curriculum stimulates
                    thinking, reasoning, decision-making, and problem-solving.
                    Lesson plans are flexible: we pick and choose from our
                    activities to meet the individual needs of the children in
                    our classrooms."
                  </h2>
                  <p className="homeSignature">
                    -Nicole and Liz,
                    <span class="text-weight-light">Owners and directors</span>
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <h2 class="text-center .display-4 my-4">
                    Why Stepping Stones?
                  </h2>
                  <h3 class="text-center">
                    <a href="tel:3076325855">Call us at 307-632-5855</a>
                  </h3>

                  <h3 class="text-center .display-4 ">
                    Visit our main facility at 611 East Carlson Street Suite 107
                  </h3>
                </div>
              </div>

              <div class="row justify-content-center mb-5">
                <div class="col-8 col-md-4">
                  <div class="card border-0">
                    <img
                      src={experienced}
                      class="card-img-top"
                      alt="experienced logo"
                    />
                    <div class="card-body">
                      <p class="card-text text-center">
                        Our role is to supplement, but not take the place of,
                        the primary role of families in providing care for their
                        children. By establishing and maintaining open and
                        ongoing communication with families, we are able to
                        strengthen the ties that connect the home with our
                        center and enhance the individual development of the
                        children in our care.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-8 col-md-4">
                  <div class="card border-0">
                    <img src={fun} class="card-img-top" alt="fun logo" />
                    <div class="card-body">
                      <p class="card-text text-center">
                        We currently have two facilities located in the Indian
                        Hills shopping center. Our facility at 611 East Carlson
                        Street provides care for children 6 weeks to 2 years.
                        Our facility located at 603 East Carlson Street provides
                        care for children 3 years to 12 years.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-8 col-md-4">
                  <div class="card border-0">
                    <img src={smart} class="card-img-top" alt="smart logo" />
                    <div class="card-body">
                      <p class="card-text text-center">
                        The mission of Stepping Stones is to be a leader in
                        childcare by inspiring lifelong learning by providing a
                        quality program that benefits the child, the parent, the
                        staff, and our community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row bg-dark rounded-top">
              <div class="col">
                <h2 class="text-white text-center display-6 my-5">
                  Visit our main facility at 611 East Carlson Street Suite 107
                </h2>
              </div>
            </div>

            <div class="row bg-dark rounded-bottom pb-5">
              <div class="col">
                <p align="center">
                  <iframe
                    title="stepping stones address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.339901763198!2d-104.82161318430909!3d41.17075301735911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3ac802068299%3A0x424d7d498f89f6ce!2sStepping%20Stones%20Day%20School%20and%20Nursey!5e0!3m2!1sen!2sus!4v1655576024102!5m2!1sen!2sus"
                    width="300"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
                <h3 class="text-center">
                  <a href="tel:3076325855">Call us at 307-632-5855</a>
                </h3>
              </div>
            </div>
          </body>
        </div>
      </>
    );
  }
}

export default HomePage;
