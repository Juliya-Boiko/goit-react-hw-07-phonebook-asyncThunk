import 'modern-normalize';
import { Container } from './components/common/Container.styled';
import { Title } from 'components/common/Title.styled';
import { MyForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';

export function App() {
  return (
    <Container>
      <Title>Contact App</Title>
      <MyForm />
      <Title>Search by name</Title>
      <Filter />
      <ContactsList />
    </Container>
  );
}
