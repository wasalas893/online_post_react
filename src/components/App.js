import React,{ Component } from 'react';

import {database} from '../firebase';
 
import _ from 'lodash'


import {connect} from 'react-redux';

import {getNotes,saveNote,deleteNote} from '../actions/notesAction';

import NoteCard from './NoteCard'

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

componentDidMount(){
  database.on('value', snapshot=>{

    this.setState({
      posts:snapshot.val()

    });

  });
}

//render posts from firebase

renderPosts(){
 
    return _.map(this.state.posts,(post,key)=>{
      return(<NoteCard key={key}>
    <h2>{post.title}</h2>
      <p>{post.body}</p>

      <button className="btn btn-danger" onClick={()=>this.props.deleteNote(key)}>Delete</button>

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
     body:this.state.body
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
         
         {this.renderPosts()}
        </div>
      </div>
    </div>
  );
}
}


function mapStateTopProps(state,ownProps){
  return{
    notes:state.notes
  };
}

export default connect(mapStateTopProps,{getNotes,saveNote,deleteNote}) (App);


