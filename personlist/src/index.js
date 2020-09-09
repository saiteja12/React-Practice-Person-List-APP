import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Person = ({img,name,Job,children}) => {
  return (
    <article className="person">
      <img src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`} alt=''/>
      <h4>{name}</h4>
      {children}
      <h5>{Job}</h5>
      
    </article>
  )
}


const PersonList = () => {
  return <section className="person-list">
    <Person img="45" name= "Saiteja" Job="Developer"/>
    <Person img="10" name= "RaviBabu" Job="Designer">
    <p>lorem</p>
    </Person>
    <Person img="76" name= "Krishna" Job="Analyst"/>
    <Person img="7" name= "Rakhesh" Job="Manager"/>
  </section>
};






ReactDOM.render(<PersonList></PersonList>,document.getElementById('root'))