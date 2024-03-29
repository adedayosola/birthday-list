import React from 'react';

const List = ({people}) => {
  console.log({people})
  return (
    <>
      {
        people.map((person)=>{
          const {id,name,age,image} = person
          return(
          <article key={id} className="person">
            <img src={image} alt={person.name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>)
        })
      }
    </>
  );
};

export default List;
