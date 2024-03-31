import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NewPasswordPageImage from "../../assets/imagens/NewPasswordPageImage.svg";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LogoShared from "../../components/LogoShared";
import ButtonPrincipal from "../../components/buttons/ButtonPrincipal";
import instance from "../../services/api";
import { ScrollToTop } from "../../utils/ScrollToTop";
import * as S from "./styles";

interface INewPasswordProps {
  password: string;
  newPassword: string;
}

interface IResponseData {
  errors: Array<{ message: string }>;
}
export function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [erroPassword, setErroPassword] = useState(false);
  const [erroNewPassword, setErroNewPassword] = useState(false);
  const [responseError, setResponseError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<INewPasswordProps>();

  const password = watch("password");
  const newPassword = watch("newPassword");
  const navigate = useNavigate();
  const handleSubmitNewPassword = async (data: INewPasswordProps) => {
    try {
      const newData = {
        password: data.password,
        code: window.localStorage.getItem("code") as string,
        accountId: window.localStorage.getItem("accountId") as string,
      };
      await instance.put("/auth/changepassword", newData);
      window.localStorage.clear();
      navigate("/signInPage");
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

      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(handleSubmitNewPassword)}>
          <LogoShared />
          <S.Title>Criar nova senha</S.Title>
          <S.Caption>Escolha uma nova senha abaixo ela precisa ser diferente da senha anterior</S.Caption>

          <S.InputContainer>
            <S.InputWrapper>
              <Input
                label="Senha"
                hasError={erroPassword}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="senha"
                register={register("password", {
                  required: "Este campo é obrigatório.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                    message:
                      "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
                  },
                  onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
                    const matchErro = target.value.match(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                    );
                    console.log(newPassword, "teste");
                    if (matchErro) {
                      setErroPassword(false);
                    } else {
                      setErroPassword(true);
                    }
                    if (target.value === newPassword && matchErro) {
                      setErroNewPassword(false);
                      setErroPassword(false);
                    }
                    if (target.value === "") {
                      setErroPassword(false);
                    }
                  },
                })}
                errorMessage={errors.password && errors.password.message}
                autoComplete="password"
              >
                <>
                  <S.ShowPasswordButton type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "ESCONDER" : "EXIBIR"}
                  </S.ShowPasswordButton>
                </>
              </Input>
            </S.InputWrapper>
            <S.InputWrapper>
              <Input
                label="Confirmar senha"
                hasError={erroNewPassword}
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                placeholder="confirmar senha"
                register={register("newPassword", {
                  required: "Este campo é obrigatório.",
                  validate: (value) => value === password || "As senhas devem ser iguais",
                  onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
                    if (target.value !== password) {
                      setErroNewPassword(true);
                    } else {
                      setErroNewPassword(false);
                    }
                    if (target.value === "") {
                      setErroNewPassword(false);
                    }
                  },
                })}
                errorMessage={erroNewPassword ? errors.newPassword && errors.newPassword.message : undefined}
                autoComplete="newPassword"
              >
                <>
                  <S.ShowPasswordButton type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? "ESCONDER" : "EXIBIR"}
                  </S.ShowPasswordButton>
                </>
              </Input>
            </S.InputWrapper>
            {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
          </S.InputContainer>
          <ButtonPrincipal>Atualizar Senha</ButtonPrincipal>
        </S.Form>
        <img src={NewPasswordPageImage} alt="Imagem da Página de nova senha" />
      </S.Wrapper>
    </>
  );
}
