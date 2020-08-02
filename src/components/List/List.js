import React from 'react';
import styled from 'styled-components';

const ListProfile = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`;

const ItemListProfile = styled.li`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 5px;
`;

const ItemLabel = styled.span`
    padding-right: 10px;
    font-weight: bold;
`;

const ItemValue = styled.span`
    font-weight: 300;
    word-break: break-word;
    overflow-wrap: anywhere;
`;

const TitleList = styled.h2`
    padding: 10px 0;
    border-bottom: 1px solid lightgray;
`;

const List = ({arr, titleList}) => {
    return (
        <>
            {titleList && <TitleList>{titleList}</TitleList>}

            <ListProfile>
                {arr.map(el => (el.value &&
                    <ItemListProfile key={el.label}>
                        <ItemLabel>{el.label}</ItemLabel>
                        <ItemValue>{el.value}</ItemValue>
                    </ItemListProfile>
                ))}
            </ListProfile>
        </>
    );
};

export default List;
