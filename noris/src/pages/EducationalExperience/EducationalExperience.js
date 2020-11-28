import React from 'react'
import './EducationalExperience.css'
import Card from '../../comps/Card/Card.js';
import tabletsImg from '../../imgs/tablets.png';
import kidWithPen from '../../imgs/kid-with-pen.png';

export default function EducationalExperience() {
    return (
        <div className="educational-experience-bg">
            <div className='educational-experience wrapper'>
                <Card className='content-wrapper-fourth' style={{padding:'127px 0 127px 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flexWrap:'wrap' }}>
                    <p>
                        <span className='header' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 300, fontSize: "50px", lineHeight: "70px", textAlign: "center", color: "#777777"}}>{`Broad your `}</span>
                        <span className='header' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 700, fontSize: "50px", lineHeight: "70px", textAlign: "center", color: "#777777"}}>Educational Experience!</span>
                    </p>
                    <p className='font-10' style={{ fontFamily: "Noto Sans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "27px", textAlign: "center", color: "#4F5665"}}>
                        NoriS Edu는 AI 체험 교육 콘텐츠를 시작으로 교육 콘텐츠 Market Place 구축 및 교육 프로파일 <br/>
                        데이터를 활용한 AI 분석 솔루션을 개발 및 연구합니다.
                    </p>
                    <img src={tabletsImg} alt="" style={{margin:'46px 0 46px 0', width:'75%'}}/>
                    <p  className='font-10' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 700, fontSize: "20px", lineHeight: "30px", textAlign: "center", color: "#777777"}}>체험형 AI 기술 교육 콘텐츠</p>
                    <p  className='font-10' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 300, fontSize: "20px", lineHeight: "30px", textAlign: "center", color: "#777777", width:'55%'}}>
                        인지-사용-연구 단계를 자연스럽게 이어주는 체험형 콘텐츠로서 흥미와 동기를 유발하여 <br/>
                        많은 아이들이 사용단계를 넘어 전 과정에서 AI를 효과적으로 배울 수 있습니다. 
                    </p>
                    <div  className='font-10' style={{background: "#67D3C1", borderRadius: "10px", color:'#fff', width:'65%', padding:20, margin:'46px 0 100px 0'}}>
                        <p style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 300, fontSize: "20px", lineHeight: "30px", textAlign: "center", color: "inherit"}}>
                        <span style={{fontWeight:700}}>AI영재교육방법론(AI+ST학습법:AI+Story Telling)을 </span>
                        <span>기반으로, AI 영재가 갖춰야 할 기본소양과 필수자질 4가지 (컴퓨팅사고력, 협업지능, 감성지능, 문제해결능력) 함양 및 기승전결로 된 시나리오의 흐름 속에서 AI 적용포인트를 지정하여 AI 기술을 체험하고 정의하며 교육하는 콘텐츠 입니다.</span>
                        </p>
                    </div>

                    <img src={kidWithPen} alt="" style={{width:'75%', marginBottom:'46px'}}/>
                    <p  className='font-10' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 700, fontSize: "20px", lineHeight: "30px", textAlign: "center", color: "#777777"}}>이야기 창작 프로그램 ( In Processing )</p>
                    <p  className='font-10' style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 300, fontSize: "20px", lineHeight: "30px", textAlign: "center", color: "#777777", width:'55%'}}>
                        NoriS Edu는 이야기 창작 진행 노하우와 관련 데이터를 보유하고 있습니다. <br/>
                        이야기 창작 프로그램은 창작에 참여하는 사람의 마음을 데이터화 할 수 있는 다양한 플롯으로 구성되어,  <br/>
                        아이들의 건강한 마음 성장을 도울 수 있는 프로파일 데이터를 수집하고 분석합니다.
                    </p>
                </Card>
            </div>
        </div>
    )
}
