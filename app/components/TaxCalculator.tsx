import React, {useState, useMemo} from 'react'
import Centum from 'centum.js'
import taxes from '~/env//taxes.json'
import {SALARY_BASE, ALL_TAX_PERCENT} from '~/env/env'
import {TaxType} from '~/env/types'

const TaxCalculator: React.FC = () => {
    const [tax, setTax] = useState<TaxType | null>(null)
    const [salary, setSalary] = useState<number>(0)
    const [percent, setPercent] = useState<number>(50)
    const [volume, setVolume] = useState<number>(0)

    const centum = new Centum()

    useMemo(() => {
        let result = centum.part(percent, SALARY_BASE)

        setSalary(result)
    }, [percent])

    useMemo(() => {
        if (tax !== null) {
            let before_tax_result = centum.part(ALL_TAX_PERCENT, salary)
            let result = centum.part(tax.percent, before_tax_result)
        
            setVolume(result)
        }
    }, [tax, salary])

    return (
        <div className='calculator'>
            <h2>Tax Calculator</h2>
            <p>Salary: {salary}₽ (after taxes)</p>
            <input value={percent} onChange={e => setPercent(parseInt(e.target.value))} type='range' step={1} />

            <h2>Taxes</h2>
            <div className='items'>
                {taxes.map(el => 
                    <div onClick={() => tax === el ? setTax(null) : setTax(el)} className='calc-card'>
                        {el.title}
                    </div>    
                )}
            </div>

            {tax !== null &&
                <>
                    <h1>{tax.title}</h1>

                    <div className='items small'>
                        <h4 className='pale'>Rate: {tax.percent}%</h4>
                        <h4 className='pale'>Bill: {volume}₽</h4>
                    </div>
                </>
            }
        </div> 
    )
}

export default TaxCalculator