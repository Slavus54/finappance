import {useState} from 'react'
import {useLoaderData} from '@remix-run/react'
import {json} from '@remix-run/node'
import Layout from '~/components/Layout'
import {get_cards} from '~/api/serverActions'
import {CardType} from '~/env/types'

export const loader = async () => {
    return json(await get_cards())
}

export default function Index() {
    const cards = useLoaderData<typeof loader>()
    const [card, setCard] = useState<CardType | null>(null)
   
    return (
        <Layout defaultTitle='Information'>
            <div className='items'>
                {cards.map(el => 
                    <div onClick={() => card === el ? setCard(null) : setCard(el)} className='card-item'>
                        <h3>{el.title}</h3>
                    </div>
                )}
            </div>

            {card !== null &&
                <>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                </>
            }
        </Layout>
    )
}
