import React, { useContext } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedPicture, picturesSelector } from '../reducer';
import { selectPicture } from '../actions';

const Container = styled.div`
  padding: 1rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  margin: 10px;
  object-fit: contain;
  transition: transform 1s;
  max-width: fit-content;
  &:hover {
    transform: scale(1.2);
  }
`;
const Pictures = () => {
  const pictures = useSelector(picturesSelector);
  const selected = useSelector(getSelectedPicture);
  const dispatch = useDispatch();

  return (
    <Container>
      {pictures.map((picture, index) => (
        <Image key={index} src={picture === selected ? picture.largeFormat : picture.previewFormat } alt={picture.author} onClick={() => dispatch(selectPicture(picture))}/>
      ))}
    </Container>
  );
};

export default Pictures;
