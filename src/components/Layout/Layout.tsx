import { ReactNode } from 'react'

import * as S from './styles'

export const Layout = ({ children }: { children: ReactNode }) => {
  return <S.Container>{children}</S.Container>
}
