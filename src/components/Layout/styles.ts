import { getTheme } from 'styles';

import styled from 'styled-components';

const theme = getTheme();

export const Container = styled.main`
  color: ${theme.colors.red_300};
`;
