import { useState, useCallback, useEffect } from 'react'
import * as S from './styles'
import { IoIosCheckmark } from 'react-icons/io'
import Switch from 'react-switch'

const Main = () => {
  const [checked, setChecked] = useState<any>(false)
  const [value, setValue] = useState('8')
  const [discount, setDiscount] = useState('')
  const [views, setViews] = useState('')

  const handlePageViews = useCallback(() => {
    switch (value) {
      case '8':
        setViews('10k')
        break
      case '12':
        setViews('50k')
        break
      case '16':
        setViews('100k')
        break
      case '24':
        setViews('500k')
        break
      case '36':
        setViews('1M')
        break
      default:
        break
    }
  }, [value])

  useEffect(() => {
    handlePageViews()
  }, [handlePageViews])

  const promotion = useCallback(() => {
    let result
    switch (value) {
      case '8':
        result = 8 - (8 * 25) / 100
        setDiscount(String(result))
        break
      case '12':
        result = 12 - (12 * 25) / 100
        setDiscount(String(result))
        break
      case '16':
        result = 16 - (16 * 25) / 100
        setDiscount(String(result))
        break
      case '24':
        result = 24 - (24 * 25) / 100
        setDiscount(String(result))
        break
      case '36':
        result = 36 - (36 * 25) / 100
        setDiscount(String(result))
        break
      default:
        break
    }
  }, [value])

  useEffect(() => {
    if (checked) promotion()
  }, [checked, promotion])

  return (
    <S.Wrapper>
      <section>
        <article>
          <div className="price-in-month-to-views">
            <p className="page-count">
              {!!views && <span>{views}</span>} Pageviews
            </p>

            <p className="month">
              {checked
                ? !!discount && (
                    <span className="price">
                      ${Number(discount).toFixed(2)}
                    </span>
                  )
                : !!value && (
                    <span className="price">${Number(value).toFixed(2)} </span>
                  )}
              / month
            </p>

            <S.Ranger
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="discount">
            <p>Monthly Billing</p>
            <Switch
              height={22}
              width={40}
              handleDiameter={14}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor="#a5f3eb"
              onChange={() => setChecked((prevState: boolean) => !prevState)}
              checked={Boolean(checked)}
            />
            <p>
              Yearly Billing{' '}
              <span>
                25% <span className="inner-discount">discount</span>
              </span>
            </p>
          </div>
        </article>

        <footer>
          <ul>
            <li>
              <IoIosCheckmark /> Unlimited websites
            </li>
            <li>
              <IoIosCheckmark /> 100% data ownership
            </li>
            <li>
              <IoIosCheckmark /> Email reports
            </li>
          </ul>

          <button type="button">Start my trial</button>
        </footer>
      </section>
    </S.Wrapper>
  )
}

export default Main
