import { Container, Button, Nav, Navbar as NavbarBs} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return <NavbarBs sticky={top} className='bg-white shadow-sm mb-3'>
        <Container>
        <Nav className='me-auto'>
            <Nav.Link to={'/'} as={NavLink}> Home </Nav.Link>
            <Nav.Link to={'/store'} as={NavLink}> Store </Nav.Link>
            <Nav.Link to={'/about'} as={NavLink}> About </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (<Button 
        onClick={openCart}
        style={{width: '3rem', height: '3rem', position: 'relative'}} 
        variant='outline-primary' 
        className='rounded-circle'
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.975 8l.025-.5c0-.517-.067-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.323.049-.653.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/>
            </svg>
            <div className='rounded-circle bg-danger d-flex justify-content-center
             align-items-center' style={{ 
                color: 'white',
              width: '1.5rem',
               height: '1.5rem',
                position: 'absolute',
                bottom: 0,
              right: 0,
              transform: 'translate(25%, 25%)'
              }}
              >
                {cartQuantity}
              </div>
        </Button>)}
        </Container>
        </NavbarBs>
}