import React from 'react';
import './Team.css';
import male1 from '../../imgs/male1.png';
import male2 from '../../imgs/male2.png';
import female1 from '../../imgs/female1.png';

const MemberCard = ({img, children }) =>{
    return(
        <div>
            <img src={img} alt="" style={{width:339, height:393, marginBottom:37}}/>
            <div style={{maxWidth:357, textAlign:'center'}}>
                {children}
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <div className="wrapper team-page">
            <p style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 100, fontSize: "50px", lineHeight: "70px", textAlign: "center", color: "#777777", marginBottom:139 }}>
                <span>{`NoriSpace `}</span>
                <span style={{fontWeight:'bold', color:'#abc3ff'}}>Team</span>
            </p>
            <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                <MemberCard img={male1}>
                    <p style={{color:'#abc3ff'}}>연구원 권호근</p>
                    <p>· 컴퓨터공학과 졸업</p>
                    <p>· 과학기술부 AI이노베이션센터 인공지능과정 수료</p>
                    <p>· 무역관련 서비스 개발 참여</p> 
                </MemberCard>

                <MemberCard img={male2}>
                    <p style={{color:'#abc3ff'}}>연구원 권호근</p>
                    <p>· 컴퓨터공학과 졸업</p>
                    <p>· 과학기술부 AI이노베이션센터 인공지능과정 수료</p>
                    <p>· 무역관련 서비스 개발 참여</p> 
                </MemberCard>

                <MemberCard img={female1}>
                    <p style={{color:'#abc3ff'}}>연구원 권호근</p>
                    <p>· 컴퓨터공학과 졸업</p>
                    <p>· 과학기술부 AI이노베이션센터 인공지능과정 수료</p>
                    <p>· 무역관련 서비스 개발 참여</p> 
                </MemberCard>
            </div>
        </div>
    )
}
