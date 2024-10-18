import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

const Login = () => {
  const { 
    watch, 
    control, 
    formState: { errors, isValid } 
  } = useForm();

  const form = watch();

  console.log(form);

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" placeholder="Email" control={ control } />
          <Spacing />
          <Input name="password" placeholder="Senha" control={ control } />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;