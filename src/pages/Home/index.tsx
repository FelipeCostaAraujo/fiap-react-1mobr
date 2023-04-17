import { Container, Content, UserInfoArea, UserInfoContent} from "./styles";

function Home() {
  return (
    <Container>
      <Content>
  
        <UserInfoArea>
        <img src="./src/assets/me.png" alt="Avatar"/>
          <UserInfoContent>
            <h1>Felipe Costa Araujo</h1>
            <span>
            
              <p></p>
              
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
