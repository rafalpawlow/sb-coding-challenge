import { FC, PropsWithChildren, useRef, useState } from 'react'

import { Headline, Wrapper, Content } from './ExpandableTab.styles'

interface ExpandableTabProps extends PropsWithChildren {
  label: string
  disabled?: boolean
  accentColor?: string
}

export const ExpandableTab: FC<ExpandableTabProps> = ({ children, label, disabled, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Wrapper disabled={disabled}>
      <Headline onClick={handleToggleOpen} isOpen={isOpen} disabled={disabled} accentColor={accentColor}>
        {label}
      </Headline>
      <Content isOpen={isOpen} height={contentRef.current?.offsetHeight}>
        <div ref={contentRef}>{children}</div>
      </Content>
    </Wrapper>
  )
}
