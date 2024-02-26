import { Container } from "react-bootstrap";
import CustomCard from "../components/card";

function FeaturesSection() {
  return (
    <div>
      <Container  className="row gx-lg-5 m-auto">
        <CustomCard
          icon=""
          title="Fresh new layout"
          description="With Bootstrap 5, we've created a fresh new layout for this template!"
        />
        <CustomCard
          icon=""
          title="Free to download"
          description="As always, Start Bootstrap has a powerful collectin of free templates."
        />
        <CustomCard
          icon=""
          title="Jumbotron hero header"
          description="The heroic part of this template is the jumbotron hero header!"
        />
      </Container>
      <Container  className="row gx-lg-5 m-auto">
        <CustomCard
          icon=""
          title="Feature boxes"
          description="We've created some custom feature boxes using Bootstrap icons!"
        />
        <CustomCard
          icon=""
          title="Simple clean code"
          description="We keep our dependencies up to date and squash bugs as they come!"
        />
        <CustomCard
          icon=""
          title="A name you trust"
          description="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
        />
      </Container>
    </div>
  );
}

export default FeaturesSection;
