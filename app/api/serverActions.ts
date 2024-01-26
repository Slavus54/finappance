import axios from 'axios'

export const base_url: string = 'https://finappance-server.onrender.com'

export const get_cards = async () => {
    let {data} = await axios.get(base_url + '/cards')

    return data
}

export const create_expense = async ({title, category, cost, dateUp}) => {
    let {data} = await axios.post(base_url + '/create-expense', {title, category, cost, dateUp})

    return data
}