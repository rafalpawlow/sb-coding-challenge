import { FC, Fragment } from 'react'
import { Response } from '@/queries/types/Swagger'

import { Code, Wrapper, HeaderText } from './MethodDetails.styles'

const DEFAULT_RESPONSE = 200

interface ParametersGridProps {
  responses: Response
}
export const ResponsesGrid: FC<ParametersGridProps> = ({ responses }) => {
  return (
    <Wrapper>
      <HeaderText>Code</HeaderText>
      <HeaderText>Description</HeaderText>
      {Object.keys(responses).map((key, idx) => (
        <Fragment key={`${key}-${idx}`}>
          <Code>{key === 'default' ? DEFAULT_RESPONSE : key}</Code>
          <div>{responses[key].description}</div>
        </Fragment>
      ))}
    </Wrapper>
  )
}
