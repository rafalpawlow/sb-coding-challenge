import styled from '@emotion/styled'
import { sizes, colors } from '@/styles'

export const Wrapper = styled.div`
  background: ${colors.backgroundLight};
  padding: ${sizes(6)};
`
export const Title = styled.h1`
  font-size: 60px;
  margin: 0;
  color: ${colors.primary};
`

export const InfoLink = styled.a`
  display: block;
`
