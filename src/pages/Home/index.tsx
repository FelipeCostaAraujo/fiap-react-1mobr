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
                <br/>
                <br/>
                Trabalho com Flutter atualmente na Trakto uma startup de design que esta a muitos anos no mercado, mas ja trabalhei com Swift, Java Android.
                <br/>
                Já trabalhei em inumeros projetos de backend, front e mobile.
                <br/>
                Tenho conhecimento básico em Devops e desenvolvimento Backend com Go, Python e Nodejs.
                <br/>
                <br/>
                Sou apaixonado por eletronica e iots e tenho varios projetos usando arduino.
              </p>
            </span>
            <LinksContent>
              <a className="icon" href="https://www.linkedin.com/in/felipe-costa-araújo-8804a3100/" style={{ color: "#0e76a8" }}>
                <img className="icon" src="./linkedin.avif" />
              </a>
              <a className="icon" href="https://github.com/FelipeCostaAraujo" style={{ color: "black" }}>
                <img className="icon" src="./github.jpg" />
              </a>
              <a className="icon" href="https://www.trakto.io" style={{ color: "#4743FFC" }}>
                <img className="icon" src="./trakto.png" />
              </a>
            </LinksContent>
          </UserInfoContent>
        </UserInfoArea>
      </Content>
    </Container>
  );
}


export { Home };
