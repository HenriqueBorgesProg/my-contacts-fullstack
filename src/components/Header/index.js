import { Container } from './styles';

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return(
    <Container>
      <img src={logo} alt="MyContacts" width="220" />

    </Container>
  );
}
