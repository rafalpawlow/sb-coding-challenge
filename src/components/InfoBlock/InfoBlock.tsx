import { FC } from 'react'

import ParseMarkdown from 'react-markdown'

import { Info } from '@/queries/types/Swagger'
import Container from '@/components/_layout/Container'

import { Title, InfoLink, Wrapper } from './InfoBlock.styles'

export const InfoBlock: FC<Info> = ({ description, license, title, contact, version, termsOfService }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {version}
        <ParseMarkdown>{description}</ParseMarkdown>
        {termsOfService && <InfoLink href={termsOfService}>Terms of service</InfoLink>}
        {contact && <InfoLink href={`mailto:${contact.email}`}>Write to the author</InfoLink>}
        {license && <InfoLink href={license.url}>{license.name}</InfoLink>}
      </Container>
    </Wrapper>
  )
}
