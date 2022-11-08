import React, {useState} from 'react'
import axios from 'axios';
import { Table } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import {
    Button,
    Input,
}from 'reactstrap';

export const OrderForm = () => {

  const url = `http://localhost:8090/api/v1/add`
  const navigate = useNavigate();

    const [data, setData]=useState({
      orderName:"",
      price:"",
      discount:"",
    })

    const [setDiscounted, getDiscounted] = useState([]);

    function submit(e) {
      e.preventDefault();
      axios.post(url, data)
        .then((response) => {
         // console.log(response);
          swal({
            title:"Order Added",
            text:"Order Added Successfully",
            icon:"success",
            button:"Back"
            
          })
           navigate("/");
      })
      .catch((error) => {
        console.log(error);
        swal({
          title:"Something Went Wrong",
          text:"Order Not Addedd Successfuly",
          icon:"error",
          button:"Back"
          
        })
         navigate("/");
      });
    }

    function handle(e) {
      const newData={...data}

      newData[e.target.id]=e.target.value
      setData(newData)
    }

    const checkboxHandler = (e) => {
      if (e.target.checked === true) { 
        setDiscounted(true);
      } else {
        setDiscounted(false);
      }
    };

  return (
    <div>
      <Table>
            
            <Table.Header>
              <Table.Row >
                <Table.HeaderCell >Order Item</Table.HeaderCell>
                <Table.HeaderCell >Price</Table.HeaderCell>
                <Table.HeaderCell >On 5% Promo?</Table.HeaderCell>
                <Table.HeaderCell >Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
  
            <Table.Body >
                <Table.Row >
                    <Table.Cell>
                        <Input type="text" placeholder="" name='orderName' id='orderName' required={true}
                        onChange={(e) => handle(e)}  value={data.orderName }></Input>
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="text" placeholder="" name='price' id='price' required={true}
                        onChange={(e) => handle(e)}  value={data.price }></Input>
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="checkbox" id="orderDiscountedEdit" className="checkboxedit"
                          onChange={checkboxHandler}
                          checked={getDiscounted == true ? 'checked' : ''}/>
                    </Table.Cell>

                    <Table.Cell>
                        <Button className="btn btn-success" onClick={submit}>
                            Submit</Button>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
          </Table>
          
    </div>
  )
}
