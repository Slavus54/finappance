import Navbar from './Navbar'
import {LayoutPropsType} from '../env/types'

const Layout = ({defaultTitle, children}: LayoutPropsType) => {
    return (
        <div className='main'>
            <Navbar />

            <h1 className='upper'>{defaultTitle}</h1>
            
            {children}
        </div>
    )
}

export default Layout