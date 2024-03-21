import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
    const {id, isbn,title, authors, thumbnail} = props.book;
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title style={{
                display : "flex",
                justifyContent : "space-evenly",
                alignItems : "center",

            }}>
            {title} || {authors}
                          <Image src={thumbnail} thumbnail name="thumbnail" width={"10%"} height={"10%"} />
            </Card.Title>
                <Link to={`/book/${id}`} className="btn btn-primary">
                    상세보기
                </Link>
            </Card.Body>    
        </Card>
        <br/>
        </>
    );
};

export default BookItem;