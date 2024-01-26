import React, {useState, useMemo} from 'react'
import Centum from 'centum.js'

const CreditCalculator: React.FC = () => {
    const [payment, setPayment] = useState<number>(0)
    const [base, setBase] = useState<number>(1e5)
    const [term, setTerm] = useState<number>(60)
    const [percent, setPercent] = useState<number>(50)

    const centum = new Centum()

    useMemo(() => {
        setPayment(centum.credit(base, percent, term, 1))
    }, [base, term, percent])

    return (
        <div className='calculator'>
            <h2>Credit Calculator</h2>
            <div className='items half'>
                <div className='item'>
                    <h4 className='pale'>Base</h4>
                    <input value={base} onChange={e => setBase(parseInt(e.target.value))} placeholder='Base of credit' type='text' className='white' />
                </div>  
                <div className='item'>
                    <h4 className='pale'>Term in months</h4>
                    <input value={term} onChange={e => setTerm(parseInt(e.target.value))} placeholder='Months of credit' type='text' className='white' />
                </div>
            </div>
            <p>Rate: {percent}%</p>
            <input value={percent} onChange={e => setPercent(parseInt(e.target.value))} type='range' step={1} />

            <p>Payment: {payment}₽/month</p>
        </div> 
    )
}

export default CreditCalculator