import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import BookSearchModal from '../../components/BookSearchModal';

const Detail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({
        id : "",
        isbn : "",
        title : "",
        authors : "",
        contents : "",
        thumbnail : ""
    });

    const url = `/book/${id}`;

    const [modalVisible, setModalVisible] = useState(false);

    const nave = useNavigate();
    const changeValue = (e) => {
        
        setBook({...book,
            [e.target.name] : e.target.value
        });
    }

    const changeDetail = (e) =>{
        e.preventDefault();
        axios.put(url,{
            id : book.id,
            title : book.title,
            authors : book.authors,
            contents : book.contents,
            thumbnail : book.thumbnail
            
    })
        .then((res)=>{
            alert('수정 완료 되었습니다.');
            nave('/home');
        })
        .catch((error)=>{
            alert('처리 도중 에러가 발생하였습니다.');
        });
    }

    const deleteBook = (e)=>{
        e.preventDefault();
        if(window.confirm("정말 삭제하시겠습니까?")){
            axios.delete(url,{
                data : book
            })
            .then((res)=>{
                alert('삭제 완료 되었습니다.');
                nave('/home');
            })
            .catch((error)=>{
                alert('처리 도중 에러가 발생하였습니다.');
            });
        }else{
            alert('취소되었습니다.');
        }
    }

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            if(res.status === 200){
                setBook(res.data);
            }
        }).catch((error)=>{
            alert('처리 도중 에러가 발생하였습니다.');
        });
    },[]);

    const handleSelectBook = (selectBook) => {
        // 선택된 도서에 대한 처리를 수행하세요
        setBook({...book,
            isbn  : selectBook.isbn,
            title : selectBook.title,
            authors : selectBook.authors.toString(),
            contents : selectBook.contents,
            thumbnail : selectBook.thumbnail
        });
      };

    const styles = {
        display : "flex",
        alignItems: "center"
    };

    return (
            <>
            <h1>책 상세보기</h1>
            <Form>
                <Button variant="primary" type="submit" onClick={changeDetail}>
                    수정
                </Button>
                {'  '}
                <Button variant="danger" type="submit" onClick={deleteBook}>
                    삭제
                </Button>
                <Form.Group className="mb-3" >
                    
                    <Form.Label>Title</Form.Label>
                    <div style={styles}>
                <Form.Control type="text" placeholder="Enter Title" name="title" value={book.title} onChange={changeValue} className="custom-input-width"/>
                <Button onClick={() => {setModalVisible(true)}}>도서 검색</Button>
                </div>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" name="author" value={book.authors} onChange={changeValue} className="custom-input-width"/>
                </Form.Group>
                <Form.Group>
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
                </Form>
                <BookSearchModal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onSelect={handleSelectBook}
            />
            </>
          );
};

export default Detail;