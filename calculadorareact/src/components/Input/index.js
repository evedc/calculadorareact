import { InputContainer } from "./styles";

const Input = ({ value }) => {
  return (
    <InputContainer>
      {/* Input desabilitado com valor vindo das props */}
      <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;
