//import { ChangeEvent, useEffect, useState } from "react";
import useHome from "./hooks/useHome";


//************** HOME VIEW ******************/

//Styles
import { Container, Content, UserInfoArea, UserInfoContent} from "./styles";

//function Home({user}:HomeProps) {
function Home() {

  
  return (
    
    <Container>
       <img src="./src/assets/ProfilePhoto.jpg" alt="Avatar" />
      <Content>
      
        <UserInfoArea>
         
          <UserInfoContent>
            <h1>Felipe Costa Araujo</h1>
            <span>
            
              <p>Olá, Sou o Felipe</p>
              
            </span>
            
            <a href="https://www.linkedin.com/in/felipe-costa-araújo-8804a3100/">Linkedin</a>
            <a href="https://github.com/FelipeCostaAraujo">GitHub</a>
          </UserInfoContent>
        </UserInfoArea>
      </Content>
    </Container>    
    );

  
}

export { Home };
