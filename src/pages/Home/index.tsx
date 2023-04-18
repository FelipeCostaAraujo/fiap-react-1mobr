import { Container, Content, UserInfoArea, UserInfoContent, LinksContent } from "./styles";

function Home() {
  return (
    <Container>
      <Content>
        <UserInfoArea>
          <img src="./me.png" alt="Avatar" />
          <UserInfoContent>
            <h1 className="title">Felipe Costa Araujo</h1>
            <span>
              <p className="text">
                Sou desenvolvedor mobile a 6 anos e comecei trabalhando com o Ionic na sua primeira versão com javascript em 2017 e fiquei 2 anos trabalhando com o Ionic em angular ate a versão 4 do Ionic.
                <br></br>
                <br></br>
                Trabalho com Flutter atualmente, mas ja trabalhei com Swift, Java Android.
                <br></br>
                Atualmente trabalho na Trakto uma startup de design que esta a muitos anos no mercado.
                <br></br>
                tenho conhecimento básico em Devops e desenvolvimento Backend com Go, Python e Nodejs.
              </p>
            </span>
            <LinksContent>
              <a className="link" href="https://www.linkedin.com/in/felipe-costa-araújo-8804a3100/" style={{ color: "#0e76a8" }}> <img src="./linkedin.avif" className="icon" /></a>
              <a className="link" href="https://github.com/FelipeCostaAraujo" style={{ color: "black" }}><img src="./github.jpg" className="icon" /></a>
              <a className="link" href="https://www.trakto.io" style={{ color: "#4743FFC" }}><img src="./trakto.png" className="icon" /></a>
            </LinksContent>
          </UserInfoContent>
        </UserInfoArea>
      </Content>
    </Container>
  );
}


export { Home };
