import styled from '@emotion/styled'
import { colors, sizes } from '@/styles'

export const Wrapper = styled.div<{ disabled?: boolean }>`
  border: 1px solid ${colors.border};
  border-top: 0;
  opacity: ${({ disabled }) => (disabled ? '0.5' : 'unset')};
`

interface HeadlineProps {
  isOpen?: boolean
  disabled?: boolean
  accentColor?: string
}
export const Headline = styled.div<HeadlineProps>`
  display: flex;
  padding: ${sizes(2)};
  cursor: pointer;
  width: 100%;
  align-items: center;
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : 'unset')};
  color: ${({ accentColor }) => accentColor ?? 'unset'};
  font-weight: bold;

  ::after {
    content: '';
    display: block;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    margin-left: auto;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${colors.black};
    transition: transform 0.2s ease-in-out;
  }
`

export const Content = styled.div<{ isOpen?: boolean; height?: number }>`
  overflow: hidden;
  height: ${({ isOpen, height }) => (isOpen && height ? `${height}px` : 0)};
  transition: height 0.2s ease-in-out;
  will-change: height;
`
