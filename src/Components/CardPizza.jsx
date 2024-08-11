import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormatearMonto from './FormatearMonto';
import { Container } from 'react-bootstrap';

export default function CardPizza({ nombre, precio, ingredientes, imagen }) {
    return (
        <Container className='m-3'>
            <Card style={{ width: '25rem' }} className='border border-3 p-2'>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title className='fs-3 border-bottom border-3 p-2'>Pizza {nombre}</Card.Title>
                    <div className='d-flex align-items-center border-bottom border-3 p-3 justify-content-center'>
                        <Card.Text><span className='fs-4 fw-light'>Ingredientes:</span><br />🍕
                            {ingredientes.map((ingrediente, index) => (
                                <span key={index}>{ingrediente}{index < ingredientes.length - 1 ? ', ' : ''}</span>
                            ))}
                        </Card.Text>
                    </div>
                    <div className='mt-3'>
                        <Card.Text className='fs-3 fw-semibold'>Precio: {FormatearMonto(precio)}</Card.Text>
                        <div className='d-flex justify-content-around'>
                        <Button variant="light" className='border border-3'>Ver Más 👀</Button>
                        <Button variant="dark" className='border border-3'>Añadir 🛒</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

