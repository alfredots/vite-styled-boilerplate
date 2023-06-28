import styled from 'styled-components'
import { getTheme } from 'styles'

const theme = getTheme()

export const Container = styled.div`
  color: ${theme.colors.gray_300};
`
