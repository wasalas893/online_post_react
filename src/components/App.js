import React,{ Component } from 'react';

//import {database} from '../firebase';
 
import _ from 'lodash'

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {getNotes,saveNote,deleteNote} from '../actions/notesAction';

import NoteCard from './NoteCard'

import {getUser} from '../actions/userAction';

class App extends Component  {

//react method

constructor(props){
  super(props);

  //state

  this.state={
    title:'',
    body:'',
    posts:{}
  };

  //bind

  this.handleChange=this.handleChange.bind(this);

  this.handleSubmit=this.handleSubmit.bind(this);
}

//componentDidMount(){

 
 

  //this.props.getUser();
  //this.props.getNotes();
  
//}

//render posts from firebase

renderPosts(){
 
    return _.map(this.props.notes,(note,key)=>{
      return(<NoteCard key={key}>
      <Link to={`/${key}`}>
    <h2>{note.title}</h2>
    </Link>
      <p>{note.body}</p>

      {note.uid===this.props.user.uid && (

      <button className="btn btn-danger" onClick={()=>this.props.deleteNote(key)}>Delete</button>

      )}

      </NoteCard>)
    });

}
//handlechange function
handleChange(e){
  this.setState({
    [e.target.name]:e.target.value
  });
}
// hndle submit function
handleSubmit(e){
  e.preventDefault();
   const note= {
     title:this.state.title,
     body:this.state.body,
     uid:this.props.user.uid
   };
 //  database.push(note);
 this.props.saveNote(note);
 this.setState({
    title:'',
    body:''
    
 });
}


 


    render(){
  return (


    
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 mt-2 container ">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input 
              onChange={this.handleChange}
              value={this.state.title}
              type="text" name="title" className="form-control no-border" placeholder="Title...." required/>
            </div>

            <div className="form-group">
              <textarea  
              onChange={this.handleChange}
              value={this.state.body}
               type="text" name="body" className="form-control no-border" placeholder="body...."  required/>
            </div>

            <div className="form-group">
              <button className="btn btn-primary col-sm-12">Save</button>
            </div>
           
          </form>
         <br/>
         {this.renderPosts()}
        </div>
      </div>
    </div>
  );
}
}


function mapStateTopProps(state,ownProps){
  return{
    notes:state.notes,
    user:state.user
  };
}

export default connect(mapStateTopProps,{getNotes,saveNote,deleteNote,getUser}) (App);


