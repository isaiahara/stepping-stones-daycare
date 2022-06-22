import { React } from "react";
import { Container, Card } from "react-bootstrap";

const SchoolKids = () => {
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
          <card className="SchoolKids"></card>
        </div>

        <div class="row">
          <div class="col">
            <Card className="classroomInfo">
              <p>
                <h1 className="classroomTitle">SCHOOL KIDS</h1>
                <h4>
                  Every age group is provided Breakfast, lunch, and a P.M. snack
                  included in tuition
                </h4>
                Our school age program offers care before and after school along
                with a full summer camp during summer vacation. We currently
                offer transportation to Prairie wind, Jessup, Hobbs, Dildine,
                Anderson, and Buffalo Ridge.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SchoolKids;
