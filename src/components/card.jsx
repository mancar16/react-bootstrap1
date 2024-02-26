import { Card } from "react-bootstrap";

function IconBox({ icon }) {
  return <div className={icon}></div>;
}

function CustomCard({icon,title,description}) {
  return (
    <Card className="card bg-light border-0 h-100 col-3 m-5">
      <Card.Body className="card-body text-center p-4">
        <IconBox icon={icon} />
        <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
        <Card.Text className="mb-0">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CustomCard