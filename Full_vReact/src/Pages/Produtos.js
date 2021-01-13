import { useState, useEffect } from 'react';
import Produto from '../Components/Produto';
import { Container, Row, ListGroup, Col } from 'react-bootstrap';
import React from 'react'


export default function Produtos() {
        
    const [produtos, setProdutos] = useState([]);

        useEffect( async () => {
                const answer  = await fetch('http://localhost:1910/')
                const data = await answer.json()
                setProdutos(data);
                console.log(data);
        }, []);

        return (

            <Container fluid>
            <Row>
            <Col sm={3}>
            <ListGroup >
                 <ListGroup.Item as="li" active action onclick="exibirTodos()"  variant="success">
                     Todas as marcas (12)
                 </ListGroup.Item>
                 <ListGroup.Item action onclick="filtrar('televisao')" variant="success">
                     Motorola (5)
                </ListGroup.Item>
                 <ListGroup.Item action onclick="filtrar('celular')" variant="success">
                     Nokia (3)
                 </ListGroup.Item>
                 <ListGroup.Item action onclick="filtrar('maquinaDeLavar')" variant="success">
                     SonyEricsson (3)
                 </ListGroup.Item>
                 <ListGroup.Item action onclick="filtrar('geladeira')" variant="success">
                    Siemens (1)
                 </ListGroup.Item>
             </ListGroup>
             </Col>
         </Row>

            <Row>
                 { produtos && produtos.map(item => <Produto key={item.id} categoria={item.categoria} descricao={item.descricao} 
                preco={item.preco} imagem={item.imagem}/>)}
            </Row>

            </Container>
            
        )}

        // useEffect( async () => {
        //         const answer  = await fetch('http://localhost:1910/')
        //         const data = await answer.json()
        //         setProdutos(data);
        //         console.log(data);
        // }, []);

        
        