import React from 'react';
import HomeContainer from './HomeContainer';


 class Home extends HomeContainer{
   constructor( props ){

     super( props );
     this.state={
       forName:"",
       lastName:"",
       linkGit:"",
       items:[]

     }
     this.onChange=this.onChange.bind(this)
     this.deleteUser = this.deleteUser.bind(this)
    }

  addStudent(event)
  {
     event.preventDefault()

     const { forName, lastName, linkGit } = this.state

     this.setState({
      forName: "",
      lastName: "",
      linkGit: "",
      items:[
        ...this.state.items,
        {
          forName,
          lastName,
          linkGit
        }
      ]
    });
  }
  onChange(event, name)
  {
 
   this.setState(
     {
    [name]:event.target.value
   })
  }
  deleteUser(event){
   event.preventDefault();
   const array = this.state.items;
   const index = array.indexOf(event.target.value);
   array.splice(index, 1);
   this.setState({
     items:array
   })

  }

  renderStudent(){
    return this.state.items.map
    (
      (item)=>
      {
        return (
          <div key={item}>
            <li>
              <span>{item.forName}</span> - <span>{item.lastName}</span> - <a href="#" target="_blank">{item.linkGit} </a> 
              <button onClick = { this.deleteUser.bind(this) } >X</button>
            </li>
          </div>
        )
      }
    )
  }

render() {
  return (
<section>
    <h1>Student List</h1>
    <form id="form">
      <fieldset>
        <legend>Insert your informations</legend> 
        <label>
          Nom
        </label>
        <input type="text" 
        value={this.state.forName} 
        onChange={(event) => this.onChange(event, 'forName')} 
        placeholder="Lassal" 
        id="firstname"/>
        <label>
          Prénom
        </label>
        <input type="text"
         value={this.state.lastName}
          onChange = {
            (event) => this.onChange(event, 'lastName')
          }
           placeholder="Jean" 
           id="lastname"/>
        <label>
          Lien Github
        </label>
        <input type="text"
         value={this.state.linkGit} 
         onChange = {
           (event) => this.onChange(event, 'linkGit')
         }
         placeholder="Link" id="link"/>
        <button 
        onClick={this.addStudent.bind(this)}
         type="button">
         send
         </button>
      </fieldset>
    </form>
    <div>{this.renderStudent()}</div>
    </section>
  );

}
 }

export default Home;
