import React, { useEffect, useState } from 'react';
import { Button, Col, Image, ListGroup, Modal, Row } from 'react-bootstrap';
import KakaoApi from '../service/KakaoApi';

const BookSearchModal = ({ visible, onCancel, onSelect }) => {

        const [query, setQuery] = useState('');
        const [searchResults, setSearchResults] = useState([]);
      
        const handleSearch = async () => {
          if(query === ""){
            return alert('검색어를 입력해주세요');
          }
          const results = await KakaoApi(query);
          setSearchResults(results);
        };

        useEffect(()=>{
        },
        [visible, onCancel, onSelect]);

    return (
        <Modal
        aria-labelledby="도서 검색"
        size="lg"
        centered
        show={visible}
        onHide={onCancel}
      >
      <Modal.Header>
        <div style={{display : "flex"}}>
        <input
          placeholder="도서를 검색하세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)
          }
          onKeyUp={e =>{
            if(e.key === 'Enter'){
              handleSearch();
              }
          }}
        />
        <Button type="primary" onClick={handleSearch}>
          검색
        </Button>
        </div>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
        {searchResults.map((item) => (
                <ListGroup.Item
                  key={item.isbn}
                  onClick={() => {
                    onSelect(item);
                    onCancel();
                  }}
                 >
                  <div style={{display : 'flex', justifyContent : "space-between", alignItems: "center" }}>
                  <h4>
                  {item.title} || <br/>
                  {item.authors}
                  </h4>

                  <Row>
                        <Col xs={20} md={10}>
                          <Image src={item.thumbnail} thumbnail />
                        </Col>
                  </Row>

                  </div>
                </ListGroup.Item>
              ))}
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button key="cancel" onClick={onCancel}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default BookSearchModal;