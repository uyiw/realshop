import React from 'react';
export default class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state={
            height:window.innerHeight
        }
    }
    async componentDidMount(){ 
        var height=window.screen.height;
        var swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function(){
                  if(this.isEnd){
                    this.navigation.$nextEl.css('display','none');
                  }else{
                    this.navigation.$nextEl.css('display','block');  
                  }
                },
            },
        });
    };
    render() {
      return (<div id="banner" style={{width:"100%",height:this.state.height}}>
            <div className="swiper-container" style={{height:this.state.height}}>
                <div className="swiper-wrapper" style={{height:this.state.height}}>
                    <div className="swiper-slide" style={{height:this.state.height}}>
                        <img src="./static/img/bgirl.jpg" />
                    </div>
                    <div className="swiper-slide">
                        <img src="./static/img/bman.jpg"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="./static/img/bchildren.jpg"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="./static/img/bnew.jpg"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="./static/img/bhot.jpg"/>
                    </div>
                </div>
                <div className="swiper-pagination">
                </div>
                <div className="swiper-button-prev swiper-button-white"></div>
                <div className="swiper-button-next swiper-button-white"></div>
            </div>
        </div>
      );
    }
  }
