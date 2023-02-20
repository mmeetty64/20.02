import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import { IProps } from '../../../Interfaces/Component.interfaces'
import Service from '../../../Services/Service'

export const ReqWhiteList: FC<IProps> = ({address}) => {
    const reqWLHandler = async(e: any) =>{
        e.preventDefault();
        const {target} = e;
        const req = await Service.ReqWhiteList(target[0].value, address)
    }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Form onSubmit={reqWLHandler} style={{width: "40%"}}>
        <p style={{fontSize: "2rem", marginTop: "5rem"}}>Запрос в вайтлист</p>  

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" placeholder="Введите имя" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  )
}
