import { FC, Fragment } from 'react'
import { Parameter } from '@/queries/types/Swagger'

import { Name, Required, Wrapper, Type, HeaderText } from './MethodDetails.styles'

interface ParametersGridProps {
  parameters: Parameter[]
}
export const ParametersGrid: FC<ParametersGridProps> = ({ parameters }) => {
  return (
    <Wrapper>
      {!parameters.length ? (
        'No parameters'
      ) : (
        <>
          <HeaderText>Name</HeaderText>
          <HeaderText>Description</HeaderText>
          {parameters.map((parameter, idx) => (
            <Fragment key={idx}>
              <div>
                <Name required={parameter.required}>
                  {parameter.name} {parameter.required && <Required>* required</Required>}
                </Name>
                <Type>{parameter.type}</Type>
              </div>
              <div>{parameter.description}</div>
            </Fragment>
          ))}
        </>
      )}
    </Wrapper>
  )
}
