import { styled } from "styled-components";
import Navigator from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import ShadowBox from "../../components/utils/ShadowBox";
import Typography from "../../components/basic/Typography";
import Button from "../../components/basic/Button";
import ComboBox from "../../components/basic/ComboBox";
import { useState } from "react";
import Input from "../../components/basic/Input";
import { useRouter } from "next/router";
import Box from "../../components/basic/Box";
import {
  EFFECT_CATEGORY,
  IComboBoxType,
  ITotalComboxType,
  LIST_ORDER_CATEGORY,
  LOWER_BODY_CATEGORY,
  LOWER_BODY_SEARCH_CATEGORY,
  STRETCHING_MAIN_CATEGORY,
  STRETCHING_MAIN_SEARCH_CATEGORY,
  UPPER_BODY_SEARCH_CATEGORY,
} from "../../constants";
import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";
import useListInquiry from "../../hooks/use-list-inquiry";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../../constants/text";
import Pagination from "../../components/utils/Pagination";

const StrechingPage = () => {
  const [mainCategoryValue, setMainCategoryValue] = useState<
    ITotalComboxType<StretchingMainCategoryType>
  >(STRETCHING_MAIN_SEARCH_CATEGORY[0]);
  const [subCategoryValue, setSubCategoryValue] =
    useState<ITotalComboxType<StretchingSubCategoryType>>(null);
  const [effectValue, setEffectValue] =
    useState<IComboBoxType<StretchingEffectType>>(null);
  const [listOrderValue, setListOrderValue] = useState<
    IComboBoxType<StretchingListOrderFilter>
  >(LIST_ORDER_CATEGORY[0]);
  const [searchKeywordValue, setSearchKeywordValue] = useState<string>("");
  const [searchQueryKeyword, setSearchKeywordQuery] =
    useState<string>(searchKeywordValue);
  const [page, setPage] = useState<number>(1);

  const router = useRouter();

  const getDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  const handleOnClickSearchButton = () => {
    setSearchKeywordQuery(searchKeywordValue);
  };

  const data = useListInquiry({
    page: page,
    title: searchQueryKeyword,
    mainCategory:
      mainCategoryValue?.id === "total" ? null : mainCategoryValue?.id,
    subCategory: subCategoryValue?.id === "total" ? null : subCategoryValue?.id,
    orderFilter: listOrderValue?.id,
  });

  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        <ShadowBox>
          <BreadCrumb>
            <Typography variants="heading2">스트레칭</Typography>
            <Button
              size="sm"
              width={160}
              onClick={() => router.push("/stretching/post")}
            >
              + 추가하기
            </Button>
          </BreadCrumb>
        </ShadowBox>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          width="100%"
        >
          <Box display="flex" justifyContent="start" alignItems="start" gap={8}>
            <ComboBox
              size="sm"
              list={STRETCHING_MAIN_SEARCH_CATEGORY}
              value={mainCategoryValue}
              setValue={setMainCategoryValue}
              label="대분류"
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!mainCategoryValue}
              list={
                mainCategoryValue?.id === "total"
                  ? UPPER_BODY_SEARCH_CATEGORY.concat(LOWER_BODY_CATEGORY)
                  : mainCategoryValue?.id === "UPPER_BODY"
                  ? UPPER_BODY_SEARCH_CATEGORY
                  : LOWER_BODY_SEARCH_CATEGORY
              }
              value={subCategoryValue}
              setValue={setSubCategoryValue}
              label="중분류"
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!subCategoryValue}
              list={EFFECT_CATEGORY}
              value={effectValue}
              setValue={setEffectValue}
              label="효과"
            ></ComboBox>
          </Box>
          <Box display="flex" justifyContent="end" alignItems="center" gap={8}>
            <Box width={400}>
              <Input
                placeholder="제목으로 검색"
                value={searchKeywordValue}
                setValue={(e) => setSearchKeywordValue(e.target.value)}
                onClear={() => setSearchKeywordValue("")}
              ></Input>
            </Box>
            <Button
              size="sm"
              variants="primary"
              onClick={handleOnClickSearchButton}
              width={80}
            >
              검색
            </Button>
          </Box>
        </Box>
        <ShadowBox>
          <Box
            padding={32}
            overflow="scroll"
            gap={32}
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="end"
              width={"100%"}
            >
              <Typography variants="body2" color={colors.g100}>
                {`총 ${data ? data.total : 0}개`}
              </Typography>
              <ComboBox
                size="xs"
                value={listOrderValue}
                setValue={setListOrderValue}
                list={LIST_ORDER_CATEGORY}
              ></ComboBox>
            </Box>
            <Table>
              <TableGrid>
                <TableItem>
                  <Box display="flex" justifyContent="center" width={"100%"}>
                    <Typography variants="body1" color={colors.g300}>
                      ID
                    </Typography>
                  </Box>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    제목
                  </Typography>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    부위
                  </Typography>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    효과
                  </Typography>
                </TableItem>
                <TableItem>
                  <Box display="flex" justifyContent="center" width={"100%"}>
                    <Typography variants="body1" color={colors.g300}>
                      조회수
                    </Typography>
                  </Box>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    등록일시
                  </Typography>
                </TableItem>
              </TableGrid>
              <TableGirdWrapper>
                {data && data.total > 0
                  ? data.stretchingList.map((list) => (
                      <TableGrid
                        key={`stretching-list-${list.id}`}
                        onClick={() =>
                          router.push({
                            pathname: `stretching/detail`,
                            query: { id: list.id },
                          })
                        }
                      >
                        <TableItem>
                          <Box
                            display="flex"
                            justifyContent="center"
                            width={"100%"}
                          >
                            <Typography variants="body1">{list.id}</Typography>
                          </Box>
                        </TableItem>
                        <TableItem>
                          <Typography variants="heading2">
                            {list.title}
                          </Typography>
                        </TableItem>
                        <TableItem>
                          <Typography variants="body1">
                            {STRETCHING_MAIN_CATEGORY_TEXT[list.mainCategory] +
                              " > " +
                              STRETCHING_SUB_CATEGORY_TEXT[list.subCategory]}
                          </Typography>
                        </TableItem>
                        <TableItem>
                          <Typography variants="body1">
                            {list.effectList
                              .map((item) => STRETCHING_EFFECT_TEXT[item])
                              .join(",")}
                          </Typography>
                        </TableItem>
                        <TableItem>
                          <Box
                            display="flex"
                            justifyContent="center"
                            width={"100%"}
                          >
                            <Typography variants="body1">
                              {list.views}
                            </Typography>
                          </Box>
                        </TableItem>
                        <TableItem>
                          <Typography variants="body1">
                            {getDate(list.createdAt)}
                          </Typography>
                        </TableItem>
                      </TableGrid>
                    ))
                  : "검색 결과가 없습니다"}
              </TableGirdWrapper>
            </Table>
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
              total={data?.total}
            ></Pagination>
          </Box>
        </ShadowBox>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StrechingPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f100};
`;

const ContentWrapper = styled.div`
  padding: 16px 16px 64px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 32px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.g300};
  gap: 1px;
`;

const TableGirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.f200};
  gap: 1px;
  :hover {
    div {
      background-color: ${colors.f100};
      cursor: pointer;
    }
  }
`;

const TableGrid = styled.div`
  background-color: ${colors.f200};
  gap: 1px;
  display: grid;
  grid-template-columns:
    minmax(60px, 1.5fr) minmax(360px, 9fr) minmax(200px, 5fr) minmax(280px, 7fr)
    minmax(80px, 2fr) minmax(120px, 3fr);
  align-items: end;
`;
const TableItem = styled.div`
  background-color: ${colors.f000};
  width: 100%;
  padding: 16px;
  height: 100%;
  text-align: start;
  display: flex;
  align-items: center;
`;
