import React from 'react';
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logo:[],
            nav:[],
            search:[],
            shopcar:[],
            deng:[],
            message:[],
            searchText: '',
        }
    };
    setHeader(data){
        this.setState({
            ...data,
        });

    }
    getElement(el,key){
        switch (el.type) {
            case 'header_logo':{
                return <div key={key} className="header_logo">
                            <img src="./static/img/logow.png" atl="" class="logoImg" />
                        </div>
            }
            case "header_deng":{
                return <div key={key} className="header_deng">
                            <a href="#"><img src="./static/img/loginw.png" />登录</a>
                            <a href="#"><img src="./static/img/enterw.png" />加入我们</a>
                            <a href="#"><img src="./static/img/shopcarw.png" />购物车</a>
                            <a href="#"><img src="./static/img/phonew.png" />联系我们</a>
                        </div>
            }
            case'header_nav':{
                return (<div key={key} className="header_nav">
                            <a href="#">首页</a>
                            <a href="#">家居</a>
                            <a href="#">配件</a>
                            <a href="#">服装</a>
                            <a href="#">电器</a>
                            <a href="#">洗护</a>
                            <a href="#">饮食</a>
                            <a href="#">餐厨</a>
                            <a href="#">婴童</a>
                            <a href="#">文体</a>
                        </div>);
            }
            case'header_search':{
                return (<div key={key} className="header_search float-left">
                            <input type="text" />
                            <div class="searchImg">
                                <img src="./static/img/search.png" alt="" />
                            </div>
                        </div>)
            }
            case'header_shopcar':{
                return (<div key={key} className="header_shopcar float-left">
                            <img src="./static/img/car.png" alt="" />
                        </div>)
            }
            case'header_message':{
                return (<div key={key} className="header_message container">
                            <div className="header_message_left float-left">
                                <span className="header_message_nr_label"></span>
                                <img src="" />
                                <span className="header_message_nr_day"></span>
                            </div>
                            <div className="header_message_right float-right">
                                <ul>
                                    <li class="float-left"><a href="#">登陆<i></i> 注册</a></li>
                                    <li class="float-left"><a href="#">消息</a><img src="./static/img/line.png" /></li>
                                    <li class="float-left"><a href="#">我的订单</a><img src="./static/img/line.png" /></li>
                                    <li class="float-left"><a href="#">会员</a><img src="./static/img/line.png" /></li>
                                    <li class="float-left">
                                        <a href="#">客户服务</a>
                                        <img src="./static/img/line.png" />
                                        <ul>
                                            <li><a href="#">在线客服</a></li>
                                            <li><a href="#">帮助中心</a></li>
                                        </ul>
                                    </li>
                                    <li class="float-none"></li>
                                </ul>
                            </div>
                        </div>) 
            }
            default:<div></div>
        }
    }
    render(){
        return(<header>
                    <div className="header_top">
                            {this.state.logo.map((item,key)=>{
                                return this.getElement(item,key)
                            })}
                            {this.state.deng.map((item,key)=>{
                                return this.getElement(item,key)
                            })}
                    </div>
                    {/* <div className="header_bottom float-right">
                            {this.state.logo.map((item,key)=>{
                                return this.getElement(item,key)
                            })}
                            {this.state.search.map((item,key)=>{
                                return this.getElement(item,key)
                            })}
                            {this.state.shopcar.map((item,key)=>{
                                return this.getElement(item,key)
                            })}
                            {this.state.nav .map((item,key)=>{
                                return this.getElement(item,key)
                            })}
                        <div className="float-none"></div>
                    </div> */}
                </header>
        )
    };
}