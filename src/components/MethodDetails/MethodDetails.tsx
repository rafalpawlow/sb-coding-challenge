import { FC } from 'react'

import { ExpandableTab } from '@/components/ExpandableTab'
import { HttpMethod, Parameter, Response } from '@/queries/types/Swagger'
import { colors } from '@/styles'

import { ParametersGrid } from './ParametersGrid'
import { ResponsesGrid } from './ResponsesGrid'
import { Label } from './MethodDetails.styles'

interface MethodDetailsProps {
  name: string
  parameters: Parameter[]
  responses: Response
  deprecated?: boolean
}

export const MethodDetails: FC<MethodDetailsProps> = ({ name, parameters, responses, deprecated }) => {
  return (
    <ExpandableTab
      label={name}
      disabled={deprecated}
      accentColor={!deprecated ? colors[name as HttpMethod] : undefined}
    >
      <div>
        <Label>Parameters</Label>
        <ParametersGrid parameters={parameters} />
      </div>
      <div>
        <Label>Responses</Label>
        <ResponsesGrid responses={responses} />
      </div>
    </ExpandableTab>
  )
}
