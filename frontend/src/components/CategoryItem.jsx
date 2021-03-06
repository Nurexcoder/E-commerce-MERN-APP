import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    ${mobile({
        height: "30vh",
    })}
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h2`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: grey;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 1px;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/Products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
