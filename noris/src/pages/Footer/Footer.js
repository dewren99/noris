import React from 'react';
import './Footer.css';
import footerLogo from '../../imgs/footer-logo.png';
import facebook from '../../imgs/facebook.png';
import twitter from '../../imgs/twitter.png';

export default function Footer() {
    return (
        <>
        <div className="footer-bg">
            <div className="footer wrapper">
                <div className="footer-left" style={{width:'50%'}}>
                    <img src={footerLogo} alt=""/>
                    <p style={{paddingRight:40, fontSize:15, color:'#fff'}}>
                        노리스페이스(NoriS) 사업장 소재지 : 서울특별시 송파구 올림픽로 32길 11, 6F <br/>
                        (방이동, 혜성빌딩) <br/>
                        사업자등록번호 : 521-47-00593 대표 신현준
                    </p>
                </div>

                <div className="footer-right" style={{width:'50%', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div className="footer-right-inner"  style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'flex-start'}}>
                        <div style={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "17px", lineHeight: "22px", letterSpacing: "-0.231818px", color: "#B3CBFD", display:'flex', flexDirection:'column',}}>
                            <p style={{marginBottom:20}}>Navigation</p>
                            <a href="" style={{color:'#fff', marginBottom:20}}>NoriS Eungine</a>
                            <a  href="" style={{color:'#fff'}}>NoriS Edu</a>
                        </div>

                        <div style={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "17px", lineHeight: "22px", letterSpacing: "-0.231818px", color: "#B3CBFD", display:'flex', flexDirection:'column'}}>
                            <p style={{marginBottom:20}}>Contacts</p>
                            <a href="" style={{color:'#fff', marginBottom:20}}>이메일문의</a>
                            <a  href="" style={{color:'#fff'}}>오시는길</a>
                        </div>

                        <div className='follow-us' style={{ fontFamily: "DM Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "17px", lineHeight: "22px", letterSpacing: "-0.231818px", color: "#B3CBFD", display:'flex', flexDirection:'column'}}>
                            <p  style={{marginBottom:20}}>Follow Us</p>
                            <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'row'}}>
                                <img style={{marginRight:20, cursor:'pointer'}} src={facebook} alt="facebook"/>
                                <img style={{marginRight:20, cursor:'pointer'}} src={twitter} alt="twitter"/>
                                <img style={{cursor:'pointer'}} src={facebook} alt="insta"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p style={{opacity:0.5}}>Copyright © 2020 노리스페이스(NoriS). All rights reserved.</p>
        </div>
        </>
    )
}
