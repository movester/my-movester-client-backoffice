import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { MdCancel } from "react-icons/md";

interface IProps {
  value: string | number;
  setValue: (e) => void;
  placeholder?: string;
  invisible?: boolean;
  onClear?: () => void;
}

interface IInput {
  $invisible: boolean;
}

const Input = (props: PropsWithChildren<IProps>) => {
  const { value, setValue, placeholder, invisible = false, onClear } = props;
  return (
    <Box>
      <InputBox
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        $invisible={invisible}
      ></InputBox>
      {value && onClear && (
        <IconBox onClick={onClear}>
          <MdCancel size={24} color={colors.g000}></MdCancel>
        </IconBox>
      )}
    </Box>
  );
};
export default Input;

const Box = styled.div`
  position: relative;
  display: block;
`;

const IconBox = styled.div`
  position: absolute;
  right: 16px;
  top: 14px;
`;

const InputBox = styled.input<IInput>`
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  border: ${({ $invisible }) =>
    $invisible ? "none" : `1px solid ${colors.g000}`};
  padding: ${({ $invisible }) => ($invisible ? "0px 16px" : "16px")};
  outline: none;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  font-size: 16px;
`;
