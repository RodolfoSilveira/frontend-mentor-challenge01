import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Main from '.'

describe('<Main />', () => {
  it('should render the input ranger', () => {
    const { container } = renderWithTheme(<Main />)

    expect(screen.getByLabelText(/ranger values/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should calc correct without discount', () => {
    const { getByLabelText } = renderWithTheme(<Main />)

    fireEvent.change(getByLabelText(/ranger values/i), {
      target: {
        value: '8'
      }
    })

    expect(getByLabelText(/ranger result/i)).toContainHTML(
      '<span aria-label="ranger result">10k</span>'
    )

    fireEvent.change(getByLabelText(/ranger values/i), {
      target: {
        value: '12'
      }
    })

    expect(getByLabelText(/ranger result/i)).toContainHTML(
      '<span aria-label="ranger result">50k</span>'
    )

    fireEvent.change(getByLabelText(/ranger values/i), {
      target: {
        value: '16'
      }
    })

    expect(getByLabelText(/ranger result/i)).toContainHTML(
      '<span aria-label="ranger result">100k</span>'
    )

    fireEvent.change(getByLabelText(/ranger values/i), {
      target: {
        value: '24'
      }
    })

    expect(getByLabelText(/ranger result/i)).toContainHTML(
      '<span aria-label="ranger result">500k</span>'
    )

    fireEvent.change(getByLabelText(/ranger values/i), {
      target: {
        value: '36'
      }
    })

    expect(getByLabelText(/ranger result/i)).toContainHTML(
      '<span aria-label="ranger result">1M</span>'
    )
  })
})
