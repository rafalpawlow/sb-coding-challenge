import styled from '@emotion/styled'
import { colors, sizes } from '@/styles'

export const Label = styled.div`
  background-color: ${colors.backgroundLight};
  padding: ${sizes(0.5)} ${sizes(2)};
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${sizes(4)};
  row-gap: ${sizes(1)};
  padding: ${sizes(2)};
`

export const Name = styled.div<{ required?: boolean }>`
  display: flex;
  font-weight: ${({ required }) => (required ? 'bold' : 'unset')};
`

export const Type = styled.span`
  font-size: 12px;
  font-style: italic;
`

export const Required = styled.sup<{ required?: boolean }>`
  color: red;
  font-size: 10px;
  margin-left: ${sizes(1)};
`

export const HeaderText = styled.span`
  font-weight: bold;
  font-size: 12px;
`

export const Code = styled.code``
