import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
    const nave = useNavigate();

    const [user , setUser] = useState({
        username : "",
        password : "",
        email : ""
    });

    const join = (e) =>{
        e.preventDefault();
        if(window.confirm('위 정보대로 회원가입을 진행하시겠습니까?')){
        axios.post('/join',{
                username : user.username,
                password : user.password,
                email : user.email
        }).then((res)=>{
            if(res.status === 200){
                alert('회원가입이 완료되었습니다.');
                nave('/');
            }else{
                alert('아이디가 중복되어 회원가입에 실패하였습니다.');
            }
        });
        }
    }

    const changeValue = (e)=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
    });
    }
    return (
        <div>
        <Container className="panel">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>
                        <Form.Control type="text" placeholder="UserID" name="username" onChange={changeValue} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={changeValue}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Col sm>
                        <Form.Control type="email" placeholder="Email Address" name="email" onChange={changeValue} />
                    </Col>
                </Form.Group>
                <br/>

                <div className="d-grid gap-1">
                    <Button variant="secondary" type="submit" onClick={join} >
                        Sign Up
                    </Button>
                </div>
            </Form>
        </Container>
    </div>
    );
};

export default JoinForm;