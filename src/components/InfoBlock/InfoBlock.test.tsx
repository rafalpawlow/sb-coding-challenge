import { render } from '@testing-library/react'

import { InfoBlock } from './InfoBlock'
import { Info } from '@/queries/types/Swagger'
import { expect } from 'vitest'

const DESCRIPTION = 'Markdown test'

const props: Info = {
  title: 'Test title',
  description: `# ${DESCRIPTION}`,
  version: '1.0.0',
  termsOfService: 'https://smartbear.com/terms-of-use/',
  contact: {
    email: 'test@test.com',
  },
  license: {
    name: 'Test license',
    url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
  },
}

describe('InfoBlock', () => {
  it('renders title and parsed description', async () => {
    const { getByText } = render(<InfoBlock {...props} />)

    expect(getByText(props.title)).toBeInTheDocument()
    expect(getByText(DESCRIPTION)).toBeInTheDocument()
    expect(getByText(props.version ?? '')).toBeInTheDocument()
  })

  it('renders links', async () => {
    const { getByText } = render(<InfoBlock {...props} />)

    expect(getByText('Terms of service')).toHaveAttribute('href', props.termsOfService)
    expect(getByText('Write to the author')).toHaveAttribute('href', `mailto:${props.contact?.email}`)
    expect(getByText(props.license?.name ?? '')).toHaveAttribute('href', props.license?.url)
  })
})
