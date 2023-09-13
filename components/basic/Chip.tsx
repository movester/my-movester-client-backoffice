import { PropsWithChildren } from "react";
import Box from "./Box";
import { colors } from "../../constants/style";
import Typography from "./Typography";

interface IProps {
  variants?: "primary" | "secondary";
  size?: "sm" | "md";
}

const sizeProps = {
  sm: { height: 24, borderRadius: 12, padding: "0 8px" },
  md: { height: 30, borderRadius: 15, padding: "0 16px" },
};

const variantsProps = {
  primary: {
    backgroundColor: colors.softPrimaryColor,
    color: colors.f000,
    border: "none",
  },
  secondary: {
    backgroundColor: colors.f000,
    color: colors.vividPrimaryColor,
    border: `1px solid ${colors.vividPrimaryColor}`,
  },
};

const Chip = (props: PropsWithChildren<IProps>) => {
  const { children, variants = "primary", size = "md" } = props;
  return (
    <Box
      backgroundColor={variantsProps[variants].backgroundColor}
      border={variantsProps[variants].border}
      width={"fit-content"}
      height={sizeProps[size].height}
      borderRadius={sizeProps[size].borderRadius}
      padding={sizeProps[size].padding}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSahdow="4px 4px 4px rgba(0,0,0,0.1)"
    >
      <Typography
        variants={size == "md" ? "heading3" : "body2"}
        color={variantsProps[variants].color}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Chip;
