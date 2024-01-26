import {Link} from '@remix-run/react'
import routes from '~/env/routes.json'
import {RouteItemType} from '../env/types'

const Navbar = () => {
    return (
        <div className='navbar'>
            {routes.map((el: RouteItemType) => <Link to={el.path} prefetch='intent' className='navbar__item'>{el.title}</Link>)}
        </div>
    )
}

export default Navbar