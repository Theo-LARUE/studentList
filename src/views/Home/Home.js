import React from 'react';
// import HomeContainer from './HomeContainer';

const Home = () => (
  <section>
    <h1>Student List</h1>
    <h1>Insert your informations</h1>
    <form id="form">
      <fieldset>
        <label> Nom </label>
        <input onChange={this.ChangeInput} type="text" placeholder="Lassal" id="firstname"/>

        <label> Prénom </label>
        <input onChange={this.ChangeInput} type="text" placeholder="Jean" id="lastname"/>

        <label> Lien Github </label>
        <input onChange={this.ChangeInput} type="text" placeholder="Link" id="link"/>

        <input type="submit" value="Send"/>
      </fieldset>
    </form>
  </section>
)

export default Home;