import styled from "styled-components";
import { Link } from "react-router-dom";

/**function for the page of the error
 * @component
 *
 * @returns (<ErrorPage />)
 */
function ErrorPage({ props }) {
    return (
        <Container>
            {props ? (
                <p>{props}</p>
            ) : (
                <StyleContainerDiv>
                    <h1>Oupppss!</h1>
                    <h1>404</h1>
                    <p>La page que vous recherchez n'existe pas</p>
                </StyleContainerDiv>
            )}

            <Link to="/">Retourner à la page d'accueil</Link>
        </Container>
    );
}

export default ErrorPage;

const Container = styled.div`
    flex: display;
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
const StyleContainerDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
