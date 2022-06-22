import { React } from "react";
import { Container, Card } from "react-bootstrap";


const FourFive = () => {
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
          <card className="FourFive"></card>
        </div>

        <div class="row">
          <div class="col">
            <Card className="classroomInfo">
              <p>
                <h1 className="classroomTitle"> Pre k 4/5</h1>
                We offer a full day or part day kindergarten readiness 
                program. The program is designed around the school district's 
                standards to ensure the kids are ready for kindergarten.
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

export default FourFive;
