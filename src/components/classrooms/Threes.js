import { React } from "react";
import { Container, Card } from "react-bootstrap";

const Threes = () => {
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
          <card className="Threes"></card>
        </div>

        <div class="row">
          <div class="col">
            <Card className="classroomInfo">
              <p>
                <h1 className="classroomTitle">Pre k 3</h1>
                <h4>
                  Every age group is provided Breakfast, lunch, and a P.M. snack
                  included in tuition
                </h4>
                Our preschool curriculum identifies specific experiences,
                skills, and knowledge that should be offered to all children to
                provide the necessary foundation for future learning. We
                understand that all children learn in different ways and at
                different rates. Children are not taught content exclusively
                through isolated drill, or worksheets. Children learn best when
                they are actively involved in learning experiences. We present
                information to children through a variety of methods and provide
                children with plenty of time to explore and discover on their
                own.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Threes;
