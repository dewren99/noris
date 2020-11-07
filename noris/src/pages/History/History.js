import React from 'react';
import './History.css';
import paperImg from '../../imgs/paper.png';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const TimelineCard = ({children}) => {
    return (
        <div style={{width:'36vw', fontFamily: "Noto Sans", fontStyle: "normal", fontWeight: 300, fontSize: "24px", lineHeight: "30px", color: "#65C7B6", marginLeft:38}}>
            {children}
        </div>
    );
}

const TimelineCardItem = ({children, style}) => {
    return (
        <div style={{marginBottom:48, ...style}}>
            {children}
        </div>
    );
}



const CompanyTimeline = () => {
    return(
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineCard>
                        <p style={{marginBottom:53, position: 'relative', bottom: 5}}>2020</p>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>핏펫(FitPet) MOU 체결 </p>
                            <p style={{fontSize: "20px", color: "#323232" }}>Coumtimized NoriS Engine 개발</p>
                        </TimelineCardItem>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>세강인터네셔널 MOU 체결  </p>
                            <p style={{fontSize: "20px", color: "#323232" }}>무역업 NoriS Engine 개발</p>
                        </TimelineCardItem>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>예비창업패키지 특화분야 (AI) 선정 및 사업진행 광 </p>
                            <p style={{fontSize: "20px", color: "#323232" }}>주과학기술원 주관 예비창업패키지 바우처 사업 진행중</p>
                        </TimelineCardItem>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>AI 양재 허브 Ai SEED CAMP 2 선정 </p>
                            <p style={{fontSize: "20px", color: "#323232" }}>AI 기술 스타트업 대상 후속지원</p>
                        </TimelineCardItem>
                        <TimelineCardItem style={{marginBottom:124}}>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>서울대학교 창업지원단 입주기업 선정  </p>
                            <p style={{fontSize: "20px", color: "#323232" }}>사업화 인프라 및 시설 지원</p>
                        </TimelineCardItem>
                        <div className="timeline-line"/>
                    </TimelineCard>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineCard>
                        <p style={{marginBottom:53, position: 'relative', bottom: 5}}>2019</p>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>신한 디지털라이프스쿨 수상</p>
                            <p style={{fontSize: "20px", color: "#323232" }}>신한 두드림스페이스 디지털라이프스쿨 최우수상 수상</p>
                            </TimelineCardItem>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>AI 기술을 도입한 문서자동화 관련 특허</p>
                            <p style={{fontSize: "20px", color: "#323232" }}>출원출원번호 : 10-2019-0141724 <br/> 발명의 명칭 : 문서 정보를 포함한 이미지 파일의자동 문서화 장치 및 방법</p>
                            </TimelineCardItem>
                        <TimelineCardItem>
                            <p style={{fontSize: "20px", fontWeight: "bold", color: "#323232" }}>AI 양재 허브 ‘AiCON2019’ 참가</p>
                            <p style={{fontSize: "20px", color: "#323232" }}>데모데이발표 ‘여권정보자동문서화 기업 기술’</p>
                        </TimelineCardItem>
                    </TimelineCard>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default function History() {
    return (
        <div className="history-page-bg">
            <div className='history-page wrapper' style={{padding:'127px 0 127px 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flexWrap:'wrap', position:'relative'}}>
                <p style={{ fontFamily: "Noto Sans KR", fontStyle: "normal", fontWeight: 100, fontSize: "50px", lineHeight: "70px", textAlign: "center", color: "#777777", marginBottom:147}}>
                    <span>{`NoriSpace `}</span> 
                    <span style={{fontWeight:700}}>History</span>
                </p>
                <img src={paperImg} alt="" style={{position:'absolute', top:692, right:0}}/>
                <CompanyTimeline/>
            </div>
        </div>
    )
}
