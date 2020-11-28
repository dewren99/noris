import React from 'react';
import './Location.css';
import mapButtonImg from '../../imgs/map-button-image.png';

export default function Location() {
    return (
        <div className="location-page-bg">
            <div className="wrapper location-page">
                <p className='header' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 100, fontSize: "50px", lineHeight: "70px", textAlign: "center", color: "#FFFFFF", marginBottom:120}}>
                    <span style={{fontWeight:700}}>노리스페이스</span>
                    <span className='newline'>로 놀러오세요!</span>
                </p>
                <div className="map-wrapper" style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-evenly', color:'#fff'}}>
                    <div className="map-1" style={{display:'flex', flexDirection:'column', width:'70%', marginRight:27, }}>
                        <div style={{ border: "1px solid #FFFFFF", borderRadius: "20px", width:'100%', height: 428, display:'flex', justifyContent:'center', alignItems:'center', position:'relative', marginBottom:42}}>
                            <p style={{color:'#fff'}}>MAP #1</p>
                            <div id="map-button">
                                <img src={mapButtonImg} alt="" style={{width:41, height:37}}/>
                                <span style={{ fontFamily: "Noto Sans", fontStyle: "normal", fontWeight: "bold", fontSize: "16px", lineHeight: "27px", color: "#1A233D" }}>길찾기</span>
                            </div>
                        </div>
                        <p style={{fontWeight:'bold'}}>사무실</p>
                        <p>서울특별시 성동구 왕십리로 63 언더스탠드에비뉴 8-2 NoriS</p>
                    </div>

                    <div className="map-2" style={{display:'flex', flexDirection:'column', width:'30%'}}>
                        <div style={{ border: "1px solid #FFFFFF", borderRadius: "20px", width:'100%', height: 428,  display:'flex', justifyContent:'center', alignItems:'center', marginBottom:42}}>
                            <p style={{color:'#fff'}}>MAP #2</p>
                        </div>
                        <p style={{fontWeight:'bold'}}>연구실</p>
                        <p> 서울 관악구 관악로 1 서울대학교 해동학술관 2F</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
