import { Link } from "react-router-dom";

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      {/* <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header> */}
      <Link
        to="/new"
        onClick={(e) => {
          console.log("Link clicado!", e.type);
        }}
      >
        Novo Contato
      </Link>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" width="20" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Henrique Borges</strong>
              <small>instagram</small>
            </div>
            <span>henriquebg@gmail.com.br</span>
            <span>(62) 99999-9999 </span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" width="22" />
            </Link>
            <button type="button" className="remove-button">
              <img src={trash} alt="Delete" width="22" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
