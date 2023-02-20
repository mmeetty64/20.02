import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Context } from '../../Context/ContextWrapper'
import Service from '../../Services/Service'

const Login = () => {
    const [address, setAddress] = useState<string>("")

    const {getUser} = useContext(Context)

    const navigation = useHistory();
    const userLoginHandler = async(e: any) =>{
        e.preventDefault();
        const {target} = e;
        const data = await Service.Auth(target[1].value, target[2].value, address)
        if(data){
            getUser({address, ...data})
            navigation.push('/Home')
            console.log(data)
        }
    }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Form onSubmit={userLoginHandler} style={{width: "40%"}}>
        <p style={{fontSize: "2rem", marginTop: "5rem"}}>Вход</p>  
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Адрес</Form.Label>
            <Form.Control type="text" placeholder="Введите адрес" onChange={({target}) => setAddress(target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Логин</Form.Label>
            <Form.Control type="text" placeholder="Введите логин" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  )
}
export default Login;
