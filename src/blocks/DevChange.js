import { useContext } from "react";
import styled from "styled-components";
import { SecondayButton } from "../collections/Buttons";
import { UserContext } from "../context/UserContext";

const DevChange = ({className}) => {

    let [user,setUser] = useContext(UserContext); 

    const chanUserName =()=>{
        const newUsername = user.devToUserName ==='uriel_hedz'? 'microsoft':'uriel_hedz'
        setUser({...user,devToUserName: newUsername})
    }
    return (

    <div className={className}>
        <p>
            Tambien puedes Cambiar a los
            <SecondayButton onClick={chanUserName}>
                Ver los 
                { user.devToUserName ==='uriel_hedz'? 'de mi empresa':'mio' }
            </SecondayButton>
        </p>
    </div>
        );
}

export default styled(DevChange)``;