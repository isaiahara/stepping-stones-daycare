import { React } from "react";
import { Container, Card } from "react-bootstrap";


const Ones = () => {
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
          <card className="Ones"></card>
        </div>

        <div class="row">
          <div class="col">
            <Card className="classroomInfo">
              <p>
                <h1 className="classroomTitle">ONES</h1>
                <h4>
                  Every age group is provided Breakfast, lunch, and a P.M. snack
                  included in tuition
                </h4>
                Our Toddler 1 curriculum is centered around the positive
                nurturing relationships the children develop with their
                caregivers. The routine care we provide and the play the
                children are involved in every day provides developmentally
                appropriate care and activities every day to support your
                child's physical, cognitive, language, social, emotional, and
                self-help skills.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Ones;
