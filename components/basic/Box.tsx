import { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface IProps {
  flexDirection?: "column" | "row";
  gap?: number;
  justifyContent?: "center" | "start" | "end" | "space-between";
  alignItems?: "center" | "start" | "end";
  padding?: number | string;
  width?: number | string;
  height?: number | string;
  display?: "flex" | "block" | "inline" | "grid";
  overflow?: "scroll" | "hidden";
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
  gridTemplateColumns?: string;
  boxSahdow?: string;
  onClick?: () => void;
  onMouseOver?: () => void;
  ref?: any;
}

interface IBox {
  $flexDirection?: "column" | "row";
  $gap?: number;
  $justifyContent?: "center" | "start" | "end" | "space-between";
  $alignItems?: "center" | "start" | "end";
  $padding?: number | string;
  $width?: number | string;
  $height?: number | string;
  $display?: "flex" | "block" | "inline" | "grid";
  $overflow?: "scroll" | "hidden";
  $backgroundColor?: string;
  $border?: string;
  $borderRadius?: number;
  $gridTemplateColumns?: string;
  $boxSahdow?: string;
}

const Box = (props: PropsWithChildren<IProps>) => {
  const {
    children,
    flexDirection,
    gap = 0,
    justifyContent,
    alignItems,
    padding = 0,
    width,
    height = "100%",
    display,
    overflow,
    backgroundColor,
    border,
    borderRadius = 0,
    onClick,
    onMouseOver,
    gridTemplateColumns,
    ref,
    boxSahdow,
  } = props;

  return (
    <BoxWrapper
      $flexDirection={flexDirection}
      $gap={gap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $padding={padding}
      $width={width}
      $height={height}
      $display={display}
      $overflow={overflow}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderRadius={borderRadius}
      $gridTemplateColumns={gridTemplateColumns}
      $boxSahdow={boxSahdow}
      onClick={onClick}
      onMouseOver={onMouseOver}
      ref={ref}
    >
      {children}
    </BoxWrapper>
  );
};

export default Box;

const BoxWrapper = styled.div<IBox>`
  width: ${({ $width }) =>
    typeof $width === "string" ? $width : `${$width}px `};
  height: ${({ $height }) =>
    typeof $height === "string" ? $height : `${$height}px `};
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  padding: ${({ $padding }) =>
    typeof $padding === "string" ? $padding : `${$padding}px `};
  gap: ${({ $gap }) => `${$gap}px`};
  overflow: ${({ $overflow }) => $overflow};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: ${({ $border }) => $border};
  border-radius: ${({ $borderRadius }) => `${$borderRadius}px`};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};
  box-shadow: ${({ $boxSahdow }) => $boxSahdow};
  word-break: break-all;
`;
