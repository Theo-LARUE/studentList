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
    }

  addStudent(event)
  {
     event.preventDefault()
     this.setState({
     forName: "",
     lastName: "",
     linkGit: "",
     items:[...this.state.items, this.state.forName, this.state.lastName, this.state.linkGit]
    });
  }
  onChange(event, name)
  {
 
   this.setState(
     {
    [name]:event.target.value
   })
  }

  renderStudent(){
    return this.state.items.map
    (
      (item)=>
      {
        return (
          <div key={item}>
          {
            item
          }
          </div>
        )
      }
    )
  }


render() {
  return (
<section>
    <h1>Student List</h1>
    <h1>Insert your informations</h1>
    <form id="form">
      <fieldset>
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
