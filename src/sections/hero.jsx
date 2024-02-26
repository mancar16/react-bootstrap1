import { Container, Button } from "react-bootstrap";

function HeroSection () {
    return (
        <>
            <Container className="justify-content-center align-items-center text-center bg-light mt-5 pt-5">
                <h1 className="display-5 fw-bold">A warm welcome!</h1>
                <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <Button className="btn btn-lg mb-5">Call to Action</Button>
            </Container>
        </>
    );
}

export default HeroSection; 