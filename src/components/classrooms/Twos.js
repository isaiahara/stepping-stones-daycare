import { React } from "react";
import { Container, Card } from "react-bootstrap";

const Twos = () => {
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
          <card className="Twos"></card>
        </div>

        <div class="row">
          <div class="col">
            <Card className="classroomInfo">
              <p>
                <h1 className="classroomTitle">TWO'S</h1>
                <h4>
                  Every age group is provided Breakfast, lunch, and a P.M. snack
                  included in tuition
                </h4>
                      Our curriculum in the toddler 2 classroom is based on the idea
                that these children are naturally motivated to explore their
                environment and are active learners. We focus on the development
                of the whole child as we provide a safe engaging environment
                that is developmentally appropriate. We offer plenty of activities and experiences for
                these early preschoolers.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Twos;
