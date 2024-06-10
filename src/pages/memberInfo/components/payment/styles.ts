import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  gap: 10px;
  border-bottom: 1px solid ${colors.black};
`;

export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  section {
    display: flex;
    gap: 25px;
  }
`;

export const ListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 125px;
  p {
    color: ${colors.gray500};
  }
`;