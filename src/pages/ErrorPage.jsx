import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Render a classic 404 page.
 * @returns {JSX.Element}
 * @constructor
 */
function ErrorPage() {
    return (
        <Container>
            <h1>Oupppss!</h1>
            <h1>404</h1>
            <p>La user ou la page que vous recherchez n'existe pas</p>
            <Link to="/">Retourner à la page d'accueil</Link>
        </Container>
    );
}

export default ErrorPage;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 6rem;
        color: red;
    }
    p {
        font-size: 1.5rem;
        margin: 2rem;
    }
    a,
    a:visited {
        color: dodgerblue;
        font-size: 1.25rem;
    }
    a:hover {
        text-decoration: underline;
    }
`;
