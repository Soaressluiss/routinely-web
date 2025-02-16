import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LogoShared from "../../components/LogoShared";
import ButtonPrincipal from "../../components/buttons/ButtonPrincipal";
import SubTitleAuth from "../../components/titles/SubTitleAuth";
import TitleAuth from "../../components/titles/TitleAuth";
import instance from "../../services/api";
import { ScrollToTop } from "../../utils/ScrollToTop";
import * as S from "./styles";

interface IForgotPassword {
  email: string;
}

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();
  const navigate = useNavigate();
  const submitForm = async (dataForm: IForgotPassword) => {
    const { data } = await instance.post("/auth/resetpassword", dataForm);
    window.localStorage.setItem("accountId", data.accountId);
    console.log(data);
    navigate("/redefinePasswordPage");
  };

  return (
    <>
      <ScrollToTop />
      <Header header="secundary" />
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <TitleAuth>Esqueceu sua Senha?</TitleAuth>
          <SubTitleAuth>Digite o e-mail cadastrado na sua conta Routinely</SubTitleAuth>
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email"
              hasError={!!errors.email}
              type="text"
              placeholder="Email"
              register={register("email", {
                required: "Este campo é obrigatório.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Este campo precisa ser um email válido.",
                },
              })}
            ></Input>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <S.Span>Você receberá um código de verificação no seu e-mail</S.Span>
            <ButtonPrincipal>Enviar</ButtonPrincipal>
          </form>
        </S.Wrapper>
        <S.ImageContainer>
          <img src={forgotPasswordImage} alt="Imagem da página de esqueci senha" />
        </S.ImageContainer>
      </S.Main>
    </>
  );
}
