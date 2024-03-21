import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const nave = useNavigate();

    const [user , setUser] = useState({
        username : "",
        password : "",
        email : ""
    });

    const signIn = (e) =>{
        e.preventDefault();
        axios.post('/login',{
            username : user.username,
            password : user.password
        }).then(res => {
            nave('/home');
        }).catch(error => {
            alert('로그인에 실패하였습니다. (아이디 혹은 비밀번호를 확인해주세요)');
        })
    }

    const signUp = () =>{
        nave("/joinForm");
    }

    const onChange = (e) =>{
        setUser({
            ...user, [e.target.name] : e.target.value
        });
    }
    
    return (
        <div>
            <Container className="panel" id="formDiv">
                <Form action='/login' method='POST'>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="text" placeholder="UserID" name='username' onChange={onChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}/>
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" onClick={signIn}>
                            Sign In
                        </Button>
                        <Button variant="secondary" type="submit" onClick={signUp} >
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
};

export default LoginForm;