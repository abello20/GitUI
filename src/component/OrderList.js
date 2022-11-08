import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {
    Button,
    Input
}from 'reactstrap';

export const OrderList = () => {

  const url = `http://localhost:8090/api/v1/orderList`;

    const [order, setOrder] = useState([]);
    

    useEffect(() => {
      axios.get(url)
          .then((getData) => {
              console.log(getData.data)
              setOrder(getData.data);
          })
    }, [])

    const getData = () => {
      axios.get(url)
          .then((getData) => {
            setOrder(getData.data);
          })
    }
    const remove = (id) => {
      axios.delete(`http://localhost:8090/api/v1/delete/${id}`)
      .then(() => {
          getData();
      })
  }

  const [setTotalRegular] = useState("");
  
  const getTotalRegular = async () => {
      const response = await axios.get(
        `http://localhost:8090/api/v1/total-regular`
      );
      const data = await response.data;
      setTotalRegular(data);
  };

  let regularBill = Number(getTotalRegular.data).toFixed(2);

  return (
    <div>
      <Table singleLine>
            
            <Table.Header>
              <Table.Row >
                <Table.HeaderCell >Order Item</Table.HeaderCell>
                <Table.HeaderCell >Price</Table.HeaderCell>
                <Table.HeaderCell >On 5% Promo?</Table.HeaderCell>
                <Table.HeaderCell >Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
  
            <Table.Body>
              {order.map((data) => 
                <Table.Row key={data.id}>
                  <Table.Cell>{data.orderName}</Table.Cell>
                  <Table.Cell>{data.price}</Table.Cell>
                  <Table.Cell>
                    <Input type="checkbox"/>
                  </Table.Cell>
                  
                    <Table.Cell>
                      <Link to={'update/'+data.id} className="btn btn-warning">
                        Edit</Link>
                      <Button onClick={() => remove(data.id)}
                        className="btn btn-danger" style={{marginLeft: "1rem"}}>
                          Delete</Button>
                    </Table.Cell>
                  
                </Table.Row>
              )}
            </Table.Body>
          </Table>
          <h2>Total Bill: {" "}</h2>
          <b>$ {regularBill}</b>
    </div>
  )
}

