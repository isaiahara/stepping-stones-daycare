import { React } from "react";
import { Container, Card } from "react-bootstrap";


const Infants = () => {
  return (
    <>
      <Container className="websiteBackground">
        <div class="row">
          <div class="col">
            <h1 className="steppingWordArt">Stepping</h1>
          </div>
          <div class="col">
            <h1 className="stonesWordArt">Stones</h1>
          </div>
        </div>
        <div class="row">
          <card className="Infants"></card>
        </div>

        <div class="row">
          <div class="col">
            <Card className="classroomInfo">
              <p>
                <h1 className="classroomTitle">Infants</h1>
                <h4>
                  Every age group is provided Breakfast, lunch, and a P.M. snack
                  included in tuition
                </h4>
                Our Infant curriculum promotes the development of the whole
                child. We provide an environment that addresses the physical,
                social, emotional, and cognitive development of each infant. Our
                teachers observe infants and provide experiences and activities
                that help meet each infant's individual needs. We can
                accommodate storage for breastmilk and formula.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Infants;
