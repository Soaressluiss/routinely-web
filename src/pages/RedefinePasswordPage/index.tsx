import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import ButtonPrincipal from "../../components/buttons/ButtonPrincipal";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LinkAuth from "../../components/LinkAuth";
import LogoShared from "../../components/LogoShared";
import SubTitleAuth from "../../components/titles/SubTitleAuth";
import TitleAuth from "../../components/titles/TitleAuth";
import instance from "../../services/api";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { ImageContainer as ImageContainerStyle } from "../ForgotPasswordPage/styles";
import * as S from "./styles";

interface IFormCodeEmailVeryfication {
  code: string;
}

interface ICodeEmailVeryfication extends IFormCodeEmailVeryfication {
  accountId: string;
}
interface IResponseData {
  errors: Array<{ message: string }>;
}
export default function RedefinePasswordPage() {
  const [responseError, setResponseError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormCodeEmailVeryfication>();
  const navigate = useNavigate();
  const submitForm = async (dataForm: IFormCodeEmailVeryfication) => {
    try {
      window.localStorage.setItem("code", dataForm.code);
      const newDdata: ICodeEmailVeryfication = {
        code: dataForm.code,
        accountId: window.localStorage.getItem("accountId") as string,
      };
      await instance.post("/auth/validatecode", newDdata);
      navigate("/newPasswordPage");
    } catch (error) {
      const { response } = error as AxiosError;
      const { errors } = response?.data as IResponseData;
      setResponseError(errors[0].message);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header header="secundary" />
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <TitleAuth>Redefinir senha</TitleAuth>
          <SubTitleAuth>Insira o código de verificação enviado no email.</SubTitleAuth>
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              hasError={!!errors.code}
              type="text"
              placeholder="Código de verificação"
              register={register("code", {
                required: "Este campo é obrigatório.",
                maxLength: { value: 6, message: "Este campo deve ter 6 digitos." },
                minLength: { value: 6, message: "Este campo deve ter 6 digitos." },
              })}
            />
            {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}
            {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
            <LinkAuth path="/forgotPasswordPage" linkText="Enviar Novamente">
              Não recebeu?
            </LinkAuth>
            <ButtonPrincipal>Confirmar</ButtonPrincipal>
          </form>
        </S.Wrapper>
        <ImageContainerStyle>
          <img src={forgotPasswordImage} alt="Imagem da página redefinir senha" />
        </ImageContainerStyle>
      </S.Main>
    </>
  );
}
