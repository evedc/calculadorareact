
import { ButtonContainer } from "./styles";

const Button = ({label, onCLick}) => { 

    return (
    <ButtonContainer onClick={onCLick}>
      {label}
      </ButtonContainer>
    
      );
}

export default Button;
