import Centum from 'centum.js'
import {KEY} from '../env/env'

const centum = new Centum()

// persist data management with local storage

export let expenses = []

export let storage = localStorage.getItem(KEY) 

export const init = () => {
    expenses = JSON.parse(storage)
}

export const append = ({id, title, category, cost, dateUp}) => {
    let result = expenses.find(el => centum.search(el.title, title, 50))
    
    if (result === undefined) {
        localStorage.setItem(KEY, JSON.stringify([...expenses, {id, title, category, cost, dateUp}]))
    }

    init()
}

export const reset = () => {
    localStorage.setItem(KEY, JSON.stringify([]))
}