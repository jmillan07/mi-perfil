import styled from "styled-components"
import Containert from "../elements/Containert";
import Article from "../blocks/Article"
import Row from "../elements/Row";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import DevChange from "../blocks/DevChange";


const Articles = ({className}) =>{
    let [user] = useContext(UserContext); 

return (
        <div className={className}>
            <Containert>
                <h2>estos son mis articusssddlos  . to</h2>
                <p> {user.devToUserName}</p>
                <DevChange/>
                <Row>
                {
                    user.articlesFromDev.map((article)=>{
                        return (
                            <Article article={article}/>
                        )
                    })
                }
                </Row>
            </Containert> 
        </div>
    )
    
}

export default styled(Articles)`
    background-color: ${props => props?.theme?.colors?.background || "#14213d"};
    color: ${props => props?.theme?.colors?.lightText || "#fff"};
    padding-top: 50px;
    padding-bottom: 60px;
    
`;