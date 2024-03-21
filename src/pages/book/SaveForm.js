import axios from 'axios';
import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import BookSearchModal from '../../components/BookSearchModal';


const SaveForm = (props) => {
    let nave = useNavigate();

    const [modalVisible, setModalVisible] = useState(false);
    // const [selectedBook, setSelectedBook] = useState({
    //     isbn  : "",
    //     title : "",
    //     authors : "",
    //     contents : "",
    //     thumbnail : ""
    // });
    
    const [book,setBooks] = useState({
        isbn  : "",
        title : "",
        authors : "",
        contents : "",
        thumbnail : ""
    });


  
    const handleSelectBook = (selectBook) => {
        // 선택된 도서에 대한 처리를 수행하세요
        setBooks({...book,
            isbn  : selectBook.isbn,
            title : selectBook.title,
            authors : selectBook.authors.toString(),
            contents : selectBook.contents,
            thumbnail : selectBook.thumbnail
     });
      };

      const headers = {
        'Content-type': 'application/JSON; charset=UTF-8;',
        'Accept': '*/*'
      }

    const changeValue = (e) => {
        setBooks({
            ...book,
            [e.target.name] : e.target.value
        })
    }

    const submitBook = (e) => {
        e.preventDefault();//submit이 action을 안타고 자기 할일을 그만함
        axios.post('/book',
        book
        ,{headers}).then((res)=>{
            if(res.status === 201){
                if(res.data !== null){
                    alert("등록되었습니다.");
                    nave("/home");
                }else{
                    alert("책 등록에 실패하였습니다.");
                }
            }
        }).catch((error)=>{
            console.log('----error :'+error);
            alert("처리 도중 에러가 발생하였습니다.");
        })
    }

    const styles = {
        display : "flex",
        alignItems: "center"
    };
    return (
        
            <Form onSubmit={submitBook}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name='isbn' value={book.isbn} className='custom-input-width' hidden/>
                <Form.Label>Title</Form.Label>
                <div style={styles}>
                <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name='title' value={book.title} className='custom-input-width'/>
                <Button onClick={() => {setModalVisible(true)}}>도서 검색</Button>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name='author' value={book.authors} className='custom-input-width'/>
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Contents</Form.Label>
            <div style={styles}>
            <Form.Control as="textarea" rows={10} className='custom-input-width' onChange={changeValue} value={book.contents} name="contents"/>
            <Row>
                        <Col xs={30} md={30}>
                          <Image src={book.thumbnail} thumbnail onChange={changeValue} name="thumbnail" />
                        </Col>
            </Row>
            </div>
            </Form.Group>

            <Button variant="primary" type="submit">
                등록
            </Button>
            <BookSearchModal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onSelect={handleSelectBook}
            />
            </Form>
    );
};

export default SaveForm;