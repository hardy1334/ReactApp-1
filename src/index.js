import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
//registerServiceWorker();
import JSON from './db.json';
import NewsList from './components/news_list';
class App extends React.Component{
   constructor(props){
       super(props);

       this.state={
           news:JSON,
           filtered:JSON,
        //   filteredall:JSON
        }
   }
   
   filterNews(keywords){
      let filtered=this.state.news.filter((item)=>{
        return ( item.title.indexOf(keywords))>-1;
      })
    //  console.log(filtered)
    this.setState({filtered})
   }
   
  /* filterAll(street){
      let filteredall=this.state.newsreport.filter((stuff)=>{
          return stuff.title.indexOf(street)>-1;
      })
      */
   
   
    render() {
        return(
        <div>
           <Header newsSearch={keywords=>this.filterNews(keywords)} />
           <NewsList news={this.state.filtered}/>
         </div>
        );
    }
}


 ReactDOM.render(<App />, document.getElementById('root'));




