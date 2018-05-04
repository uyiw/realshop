import React from 'react';
import {Banner,Header,Bottom} from './Element';
import { config,Http } from '../../Common'
export default class Firstpage extends React.Component{
  constructor(props){
    super(props);
    // this.params = this.props.match.params || {};
    let self = this;
    this.defautHeader = {
         logo:[{type:'header_logo'}],
         deng:[{type:'header_deng'}],
        // nav:[{type:"header_nav"}],
        // search:[{type:"header_search",event:this.event_search.bind(this)}],
        // shopcar:[{type:"header_shopcar"}],
        //message:[{type:"header_message"}]
    };
  }
  async event_search(event){

      // if(event.target.value === ''){
      //     this.loadData()
      //     return;
      // }

      // var url = config.api.search.format({searchText:event.target.value})
      // var res = await Http.get(url,3000);
      // if(res.error || res.code!==1){
      //     console.log(res.msg || res.state);  
      //     return ;
      // }
      // this.setState({data:res.data});
  }

  async componentWillMount(){ // run before the render method
   
  };
  async componentDidMount(){
    global.WebApp.header.setHeader(this.defautHeader);
  } 
  render() {
    return (<div>
        <Banner />
        <Bottom />
    </div>
    );
  }
}