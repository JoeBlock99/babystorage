import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/baby';

const Babyform = ({ onSubmit }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Nombre"
        value={value1}
        onChange={e => changeValue1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={value2}
        onChange={e => changeValue2(e.target.value)}
      />
      <button type="submit" onClick={
        () => onSubmit(value1, value2)
      }>
        {'Agregar'}
      </button>
    </Fragment>
  );
} 


export default connect(
  undefined,
  dispatch => ({
    onSubmit(value1, value2) {
      console.log({
        type: 'ESTO SE ACABA DE MANDAR MANO',
        payload: {
          name: value1,
          lastaname: value2,
          date: new Date(),
        },
      });
      dispatch(actions.addBaby(uuidv4(), value1, value2));
    },
  }),
)(Babyform);