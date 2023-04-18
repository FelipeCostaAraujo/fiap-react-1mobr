import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60rem;
`;

const Content = styled.div`
  flex-direction: column;
  background: var(--white);
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 720px;
  width: 90%;
`;

const UserInfoArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    height: 100%;
    width: 350px;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);

  .title {
    display: table-cell;
    width: 250px;
    height: 3rem;
    vertical-align: middle;
    font-size: 25px;
    font-family: 'Open Sans';
  }

  .text {
    font-size: 1rem;
    font-family: 'Roboto';
    //font-weight: 400;
  }
`;

const LinksContent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-center;
  align-items: flex-end;
  margin-left: auto;
  margin-right: auto; 

  .link{
    margin-right: 10px;
  }

  .icon{
    height: 100%;
    width: 50px;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }
`;



export {
  Container,
  UserInfoArea,
  UserInfoContent,
  Content,
  LinksContent,
};
