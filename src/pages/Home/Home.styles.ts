import styled from '@emotion/styled'
import { sizes, colors } from '@/styles'

export const PathsWrapper = styled.div`
  display: grid;
  gap: ${sizes(8)};
`

export const Endpoint = styled.div`
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: ${sizes(1)} ${sizes(2)};
  border-radius: ${sizes(2)} ${sizes(2)} 0 0;
  font-weight: bold;
`
