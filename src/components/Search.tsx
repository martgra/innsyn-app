// src/components/Hello.tsx

import * as React from 'react';
import { MouseEvent } from 'react';
import './Search.css';

export interface Props {
  search_placeholder: string;
  button: string;
  url: string;
}

export interface State {
  search_state?: string;
}


class Search extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {search_state: props.search_placeholder}; 
    }
    onSearch(event: MouseEvent) {
      const url_append = this.props.url + this.state.search_state;

      fetch(url_append, {method: 'GET'})
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            search_state: result.body
          });
          });
        }
      
  handleKeywordKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{

  if( e.key === 'Enter' ){
    const url_append = this.props.url + this.state.search_state;

    fetch(url_append, {method: 'GET'})
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            search_state: result.body
          });
          });
    
  }
};

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({search_state: e.target.value});
      //e.preventDefault();
   }
    render() {  
  
      return (
        <div className="search">
          <div className="searchField">
            <input type="text" placeholder={this.props.search_placeholder} value={this.state.search_state} onKeyPress={this.handleKeywordKeyPress}  onChange={this.handleChange}/>
            
          </div>
          <div><button className="Button" onClick={this.onSearch.bind(this)}>{this.props.button}</button></div>
        </div>
      );
    }
  }

  export default Search;
