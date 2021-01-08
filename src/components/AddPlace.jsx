import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import Title from './Title';
import City from './City';
import { getPlace } from '../helpers/getPlace';

const init = () => {

  return JSON.parse(localStorage.getItem('places')) || [];

}

const AddPlace = () => {

  const [places, setPlaces] = useState(init);

  useEffect( ()=> {
    localStorage.setItem('places', JSON.stringify( places ) );
  }, [places]);

  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {

    setInputValue(e.target.value)

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if( inputValue.trim().length > 2 ){

      getPlace(inputValue)
        .then( resp => {
          setPlaces([resp, ...places]);
        })
        .catch( err => {
          Swal.fire('Oops...', `No hay resultados para ${inputValue}`, 'error');
          console.log(err); 
        });

      setInputValue('');

    }

  }

  return (
    <section className="add">

      <Title title="Other" subtitle="Places"/>
    
      <form onSubmit={ handleSubmit }>

        <input 
          type="text"
          placeholder="Write a location"
          className="add__input"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button 
          type="submit"
          className="add__button"
        >
          <i className="fas fa-plus"></i> Add Location
        </button>

      </form>

      <div className="scroll">
        {
          places.map( item => (
            <City 
              key={item.id}
              id={item.id}
              location={item.location}
              country={item.country}
              lat={item.lat}
              lng={item.lng}
              places={places}
              setPlaces={setPlaces}
            />
          ))
        }
      </div>

    </section>  
  )
}

export default AddPlace;
