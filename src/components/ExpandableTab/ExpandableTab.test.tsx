import { fireEvent, screen, render, waitFor } from '@testing-library/react'

import { ExpandableTab, ExpandableTabProps } from './ExpandableTab'
import { expect } from 'vitest'

const TAB_CONTENT = 'Test content'

const props: ExpandableTabProps = {
  label: 'Test label',
  children: TAB_CONTENT,
}

describe('InfoBlock', () => {
  it('renders expandable tab', async () => {
    const { getByText } = render(<ExpandableTab {...props} />)

    expect(getByText(props.label)).toBeInTheDocument()
  })

  it('opens and closes properly expandable tab', async () => {
    const { getByText } = render(<ExpandableTab {...props} />)

    fireEvent.click(screen.getByText(props.label))
    await waitFor(() => {
      expect(getByText(TAB_CONTENT)).toBeVisible()
    })

    fireEvent.click(screen.getByText(props.label))
    await waitFor(() => {
      expect(getByText(TAB_CONTENT)).not.toBeVisible()
    })
  })

  it('renders expandable tab in disabled state', async () => {
    const { getByText } = render(<ExpandableTab {...props} disabled />)

    expect(getByText(props.label)).toHaveStyle('text-decoration: line-through')
  })
})
