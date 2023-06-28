import styled from 'styled-components';
import { getTheme } from 'styles';

const theme = getTheme();

export const Container = styled.main`
  color: ${theme.colors.red_300};
`;
