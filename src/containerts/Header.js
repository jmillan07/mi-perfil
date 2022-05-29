import styled from "styled-components";
import Container from "../elements/Containert"
import StyledSpand from "../elements/StyledSpand"
import CircleImag  from "../elements/CircleImag";
import Row from "../elements/Row";
import {titleStyles} from "../collections/styles"
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";


const H1Title = styled.h1`
    ${ titleStyles };
    margin:0;
`;

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2em;
`;



const Header =({className})=>{
    let [user] = useContext(UserContext); 
    return (
        <Container>
            <header className={className}>
                <InfoContainer>
                    <H1Title>
                        Bienvenidos, mi nombre es <StyledSpand> Javier Millan</StyledSpand>
                        Desarrollador web 
                    </H1Title>
                    <Row>
                        <LinkPrimaryButton>Mi proyectos</LinkPrimaryButton>
                        <LinkPrimaryButton>Descarga mi CV</LinkPrimaryButton>
                    </Row>
                    <LinkSecondaryButton>O lee mis articulos({user.articlesFromDev.length})</LinkSecondaryButton>
                </InfoContainer>
                    <CircleImag src="/desca.jpg" alt="mi avatar"/>
            </header>
        </Container>
    )
}

export default styled(Header)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: blue;
    padding-top: 60px;
    padding-bottom: 60px;
    align-items:    center;
`;