import React from 'react'
import './CompanyPage.css'
import Circle from '../../comps/Circle/Circle.js';
import Card from '../../comps/Card/Card.js';
import serverImg from '../../imgs/server.png';
import bookImg from '../../imgs/book.png';
import fistbumpImg from '../../imgs/fistbump.png';
import humanHeadImg from '../../imgs/human-head.png';
import workingWomenRobot from '../../imgs/working-women-robot.png';
import computerVisionImg from '../../imgs/computer-vision.png';



const FirstIntroMsgBox = () => {
    return(
        <div className='msg-box-1'>
            <p className="title">Way to Make A.I.</p>
            <p className="title-bold">More Fun!</p>
            <p>즐거운 인공지능의 시작, 노리스페이스(NoriS)</p>
            <p>노리스페이스(NoriS)는 인공지능과 함께하는 즐거운 일상을 만듭니다.</p>
        </div>
    );
}

const SeeMoreButton = ({style}) => {
    return(
        <button className="see_more-button z2" style={{...style}}>
            See more ↓
        </button>
    );
}

const BusinessAreaItem = ({title, text, img}) => {
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <img style={{width:26.53, height:23.87, marginRight:50, padding:20, boxSizing:'content-box'}} src={img} alt={title}/>
            <div>
                <p className="title-bold">{title}</p>
                <p className="title" style={{maxWidth:260}}>{text}</p>
            </div>
        </div>
    );
}

const BusinessAreaBox = () => {
    return(
        <div className="business_area-box z2" style={{width:'100%'}}>
            <p className="business_area-text">NoriS Business Area</p>
            <BusinessAreaItem title={'NoriS Engine'} text={'사무자동화 솔루션 R&D'} img={serverImg}/>
            <BusinessAreaItem title={'NoriS Edu'} text={'AI 기술 체험 콘텐츠 및 데이터 분석 솔루션 개발'} img={bookImg}/>
        </div>
    );
}

const SecondIntroMsgBox = ({style}) => {
    return(
        <div className='msg-box-1' style={{...style}}>
            <p className="title-bold">인공지능과 함께하는</p>
            <p className="title">즐거움을 공유합니다</p>
            <p>사람을 서포트하는 기술 ‘인공지능’노리스페이스(NoriS)는</p>
            <p>사람을  향한기술을 연구합니다.</p>
        </div>
    );
}

const EngineServiceAccessButton = () => {
    return(
        <button className="engine-service-button">
            NoriS Engine Service Access
        </button>
    );
}

const VisionAndVerificationCard = ({img, title, text, children, style}) => {
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', ...style}}>
            <img src={img} alt={title} style={{height:184, width:184, marginBottom:40}}/>
            <div>
                <p style={{fontFamily:'Noto Sans', fontStyle:'normal', fontWeight:'bold', fontSize:'20px', lineHeight:'30px', textAlign: 'center'}}>{title}</p>
                <p style={{fontFamily:'Noto Sans', fontStyle:'normal', fontSize:'20px', lineHeight:'30px', textAlign: 'center'}}>
                    {text}
                    {children}
                </p>
            </div>
        </div>
    );
}

export default function CompanyPage() {
    return (
        <div className="company-page wrapper">
            <Circle style={{  width: 1260, height: 1260, left: 924, top: -375 }}/>
            <div style={{marginLeft: 119}}>
                <FirstIntroMsgBox/>
                <SeeMoreButton style={{marginBottom:123}}/>
            </div>
            <BusinessAreaBox/>
            <Circle style={{ height:165, width:165, right:121, top:785, opacity:0.5 }}/>
            <SecondIntroMsgBox style={{marginTop:275, alignSelf:'flex-end'}}/>
            <Circle style={{height:302, width:302, top:1121, right:226, opacity: 0.5, filter:'blur(20px)'}}/>
            <img className="human-head-bg" src={humanHeadImg} alt=""/>
            <Circle style={{height:791, width:791, top:1570, left:-172, filter:'blur(100px)'}}/>
            <Card style={{marginTop:275, minHeight:878, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                <div>
                    <p className="title">무엇이 어려운가요?</p>
                    <p className="title-bold">노리스페이스(NoriS)가</p>
                    <p className="title-bold">도와줄게요!</p>

                    <p>
                        인공지능이 도와줄 수 있는 것들이 점점 많아지고 있어요.<br/>
                        노리스페이스(NoriS)는 우리의 일상에서 일어나는 크고작은 불편함들을 <br/>
                        AI 기술을 통해 해소합니다.<br/>
                        여러분이 생각하는 것보다 인공지능은 가까이에서 당신을 도와줄 수 있어요!
                    </p>
                </div>
                <img src={fistbumpImg} alt="" style={{height:488, width:488, borderRadius:'50%'}}/>
            </Card>
            <Circle style={{width: 165, height:165, opacity:0.5, filter:'blur(25px)',left: 141, top: 2986}}/>
            <Circle style={{width: 441, height:441, opacity:0.5, left: 1395, top: 3151}}/>
            <Card style={{marginTop:74, padding:'164px 0 112px 0', minHeight:1890, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flexWrap:'wrap'}}>
                <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', marginBottom:115}}>
                    <p><span className="title-bold" style={{color:'#777777'}}>{`Innovate work `}</span><span className="title" style={{color:'#777777'}}>Culture!</span></p>
                    <p>귀찮은 단순반복업무 줄여주는똑똑한 솔루션, NoriS Engine</p>
                </div>
                <img src={workingWomenRobot} alt="" style={{width:'75%', marginBottom:52}}/>
                <div style={{width:'65%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', marginBottom:200}}>
                    <p className="title-bold" style={{fontSize:'20px', lineHeight:'30px'}}>NoriS Engine, 일터를 놀이터 처럼!</p>
                    <p>
                        인공지능과 컴퓨터비전을 활용한 사무업무자동화 솔루션으로 문서 분류, 이미지 분석, 문서화 등과 같은 반복적인 업무를
                        인공지능, 
                        컴퓨터비전 기술을 활용하여 자동화하는 Backoffice AI Solution을 개발합니다.
                    </p>
                </div>
                <div style={{marginBottom:52, width:'65%', display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                    <VisionAndVerificationCard img={computerVisionImg} title={'Computer Vision'} style={{marginRight:7, marginBottom:40}}>
                        <span>
                            문서를 인식할 수 있도록 특화된 NoriS Engine을 <br/>
                            사용하여 정보 영역을 검출합니다
                        </span>
                    </VisionAndVerificationCard>
                    <VisionAndVerificationCard img={computerVisionImg} title={'Data Verification'}  style={{marginLeft:7}}>
                        <span>
                            NoriS Engine은 검출된 텍스트 정보를 검증합니다. <br/>
                            AI 검증기술은 데이터 분석의 정확도를 <br/>
                            높여주는 역할을 합니다. <br/>
                        </span>
                    </VisionAndVerificationCard>
                </div>
                <EngineServiceAccessButton/>
            </Card>
        </div>
    )
}
