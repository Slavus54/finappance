import React, {useState, useMemo} from 'react'
import shortid from 'shortid'
import Centum from 'centum.js'
import {Datus} from 'datus.js'
import {create_expense} from '~/api/serverActions'
import {EXPENSE_TYPES} from '~/env/env'
import {ExpenseType} from '~/env/types'

const Expenses: React.FC = () => {
    const [expenses, setExpenses] = useState<ExpenseType[]>([])
    const [expense, setExpense] = useState<ExpenseType | null>(null)
    const [form, setForm] = useState({
        title: '',
        category: EXPENSE_TYPES[0],
        cost: 1000
    })

    const {title, category, cost} = form

    const centum = new Centum()
    const datus = new Datus()

    const onMakeExpense = () => {
        setExpenses([...expenses, {id: shortid.generate().toString(), title, category, cost, dateUp: datus.move()}])
        create_expense({title, category, cost, dateUp: datus.move()})
    }

    return (
        <>
            <h2>New Expense</h2>
            <input value={title} onChange={e => setForm({...form, title: e.target.value})} placeholder='Title of expense' type='text' />

            <select value={category} onChange={e => setForm({...form, category: e.target.value})}>
                {EXPENSE_TYPES.map(el => <option value={el}>{el}</option>)}
            </select>

            <input value={cost} onChange={e => setForm({...form, cost: parseInt(e.target.value)})} placeholder='Cost of expense' type='text' />

            {isNaN(cost) ? 
                    <button onClick={() => setForm({...form, cost: 1000})}>Reset</button> 
                : 
                    <button onClick={onMakeExpense}>Create</button>
            }

            <h2>My Expenses</h2>
            <div className='items half'>
                {expenses.map(el => 
                    <div className='item card'>
                        {centum.shorter(el.title)}
                    </div>    
                )}
            </div>
        </> 
    )
}

export default Expenses