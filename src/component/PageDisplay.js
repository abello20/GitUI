import React from 'react'
import { OrderForm } from './OrderForm';
import { OrderList } from './OrderList';
import { Table } from 'semantic-ui-react'

export const PageDisplay = () => {
  return (
    <div style={{maxWidth: "95rem", margin: "2rem 8rem"}}>
        <Table singleLine>
            <Table.Body>
                <Table.Row >
                    <Table.Cell>
                        <img src={require('../assets/menu.png')} alt='logo'></img>
                    </Table.Cell>
                    <Table.Cell>
                        <OrderForm /><br/><br/>
                        <OrderList />
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        
    </div>
  )
}
