import React,{Component} from 'react';

class Header extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
           
            keywords:''
          //  street:''
        }
    }
  
  
    inputChange=(event)=>{
        this.setState({keywords:event.target.value});
        //this.setState({street:event.target.value});
        this.props.newsSearch(event.target.value);
    
    }
    
    
    render(){
       /* const styles={
            header:{
                background:"#909090",
                fontWeight: 'normal'
            },
            logo:{
                color:'red',
                textAlign:'center',
                fontFamily:'Fantasy'
            }
        }

*/
        return(
            <header >
              <div className="logo">Logo</div>
              <div id="one">
              <input type="text" placeholder="Enter Search Queries here............." onChange={this.inputChange} />
              </div>
              </header>
        );
    }
}

export default Header;