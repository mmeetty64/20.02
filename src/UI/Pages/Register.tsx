import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Service from '../../Services/Service';

const Register = () => {
    const navigation = useHistory();

    const userRegisterHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Service.Reg(target[0].value, target[1].value, target[2].value)
        navigation.push("/Login")
        console.log(data)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Form onSubmit={userRegisterHandler} style={{ width: "40%" }}>
                <p style={{ fontSize: "2rem", marginTop: "5rem" }}>Регистрация:</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control type="text" placeholder="Введите адрес" />
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
export default Register;
