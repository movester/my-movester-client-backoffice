import { PropsWithChildren, useEffect, useMemo } from "react";
import { colorsType, typographyType } from "../../constants/types";
import { colors } from "../../constants/style";

interface IProps {
  variants?: typographyType;
  color?: string;
}

const variantsProperties: {
  [key in typographyType]: { fontSize: number; fontWeight: number };
} = {
  heading1: {
    fontSize: 24,
    fontWeight: 800,
  },
  heading2: {
    fontSize: 16,
    fontWeight: 800,
  },
  heading3: {
    fontSize: 12,
    fontWeight: 800,
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
  },
  body2: {
    fontSize: 12,
    fontWeight: 500,
  },
  body3: {
    fontSize: 8,
    fontWeight: 500,
  },
  caption: {
    fontSize: 4,
    fontWeight: 500,
  },
};

const Typography = (props: PropsWithChildren<IProps>) => {
  const { variants = "body2", color, children } = props;

  return (
    <span
      style={{
        fontSize: `${variantsProperties[variants].fontSize}px`,
        fontWeight: `${variantsProperties[variants].fontWeight}`,
        color: `${color}`,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
