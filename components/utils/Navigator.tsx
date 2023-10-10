import { styled } from "styled-components";
import Typography from "../basic/Typography";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";
import Box from "../basic/Box";
import { useEffect, useState } from "react";

const isSelected = (currentPath, navigatorPath): boolean => {
  return currentPath.startsWith(navigatorPath);
};

const Navigator = () => {
  const router = useRouter();

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router]);

  return (
    <Wrapper>
      <Typography variants="heading2">Movester - backoffice</Typography>
      <NavigatorItemWrapper>
        <Box
          onClick={() => router.push("/stretching")}
          backgroundColor={
            isSelected(currentPath, "/stretching")
              ? colors.softPrimaryColor
              : colors.f000
          }
          width={"100%"}
          padding={"8px 8px 8px 16px"}
          borderRadius={4}
          height={"fit-content"}
        >
          <Typography
            variants="heading2"
            color={
              isSelected(currentPath, "/stretching")
                ? colors.f000
                : colors.softPrimaryColor
            }
          >
            스트레칭
          </Typography>
        </Box>
        <Box
          onClick={() => router.push("/users")}
          backgroundColor={
            isSelected(currentPath, "/users")
              ? colors.softPrimaryColor
              : colors.f000
          }
          width={"100%"}
          padding={"8px 8px 8px 16px"}
          borderRadius={4}
          height={"fit-content"}
        >
          <Typography
            variants="heading2"
            color={
              isSelected(currentPath, "/users")
                ? colors.f000
                : colors.softPrimaryColor
            }
          >
            스트레칭
          </Typography>
        </Box>
      </NavigatorItemWrapper>
    </Wrapper>
  );
};

export default Navigator;

const Wrapper = styled.div`
  background-color: ${colors.f000};
  /* height: auto; */
  padding: 16px;
  gap: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const NavigatorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
