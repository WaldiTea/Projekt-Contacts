import React, { useState } from 'react';
import contacts from '../Data/contacts.json';
import Contact from './contact';

const Main = () => {
  const [contactArr, setContactArr] = useState(contacts.slice(0, 5));
  const [sort, setSort] = useState(true);

  const addRandom = () => {
    let randomNum = Math.floor(Math.random() * contacts.length + 5);
    let addContact = contacts[randomNum];
    let newArr = contactArr.concat(addContact);
    setContactArr(newArr);
  }

  const sortName = () => {
    let sortName;
    if (sort === true) {
      sortName = contactArr.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setSort(false);
    } else {
      sortName = contactArr.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      setSort(true);
    }
    setContactArr(sortName);
  }

  const sortPopularity = () => {
    let sortPop;
    if(sort === true) {
      sortPop = contactArr.sort((a, b) => {
        let popA = a.popularity;
        let popB = b.popularity;
        if(popA < popB) {
          return -1;
        }
        if(popA > popB) {
          return 1;
        }
        return 0;
      });
      setSort(false);
    } else {
      sortPop = contactArr.sort((a, b) => {
        let popA = a.popularity;
        let popB = b.popularity;
        if(popA < popB) {
          return 1;
        }
        if(popA > popB) {
          return -1;
        }
        return 0;
      });
      setSort(true);
    }
    setContactArr(sortPop);
  }
  
  return (
    <main>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <div className='title-wrapper'>
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
      </div>
      {contactArr.map((contact) => <Contact
        pictureUrl = {contact.pictureUrl}
        name = {contact.name}
        popularity = {contact.popularity}
      />)}
  </main>
  );
}

export default Main;