import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
const [showMail, setShowMail] = useState(false);

useEffect(() => {
// Load external scripts
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
script.async = true;
document.body.appendChild(script);

return () => {  
  document.body.removeChild(script);  
};

}, []);

const handleMailClick = () => setShowMail(true);
const handleCloseMail = () => setShowMail(false);
const handleNextPage = () => navigate('/second');

return (
<>
<link href="https://fonts.googleapis.com/css2?family=Coiny&family=Titan+One&family=Nerko+One&family=Sriracha&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

<style>{`  
    * { padding: 0; margin: 0; box-sizing: border-box; }  
      
    .home-page {  
      position: relative;  
      font-size: 16px;  
      min-height: 100vh;  
      background-color: #feecea;  
      background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 1) 76%, transparent 77%, transparent);  
      background-size: 80px 80px;  
      overflow: hidden;  
      touch-action: pan-y;  
    }  

    .flag__birthday {  
      display: flex;  
      justify-content: space-between;  
      animation: translateYFlag 1.5s 0.5s forwards;  
      transform: translateY(-200px);  
    }  
      
    @keyframes translateYFlag {  
      to { transform: translateY(-10px); }  
    }  

    .flag__birthday .flag__left {  
      transform: rotate(-10deg) translate(-20px, 30px);  
    }  
      
    .flag__birthday .flag__right {  
      transform: rotate(10deg) translate(20px, 30px) scaleX(-1);  
    }  

    .content {  
      width: 100%;  
      position: relative;  
      display: flex;  
      padding-top: 2rem;  
      flex-wrap: wrap;  
    }  

    .content .left, .content .right {  
      position: relative;  
      display: flex;  
      flex-direction: column;  
      justify-content: center;  
      align-items: center;  
    }  

    .content .left { width: 40%; }  
    .content .right { width: 60%; }  

    .title {  
      position: relative;  
      width: 100%;  
      display: flex;  
      justify-content: center;  
      font-family: 'Titan One', sans-serif;  
      font-size: clamp(2rem, 5vw, 3rem);  
      flex-direction: column;  
    }  

    .title .happy, .title .birthday {  
      position: relative;  
      text-shadow: 4px 4px #333, -4px 4px #333, 4px -4px #333, -4px -4px #333, 4px 8px 0 #333;  
      font-weight: bold;  
      display: flex;  
      justify-content: center;  
      animation: txtTranslateY 0.5s forwards;  
    }  

    .title .happy { color: #fff; }  
    .title .birthday { color: #ff7882; }  

    @keyframes txtTranslateY {  
      from { transform: translateY(50px); opacity: 0; }  
      to { transform: translateY(0); opacity: 1; }  
    }  

    .date__of__birth {  
      display: flex;  
      justify-content: center;  
      align-items: center;  
      background-color: #ff7882;  
      border-radius: 50px;  
      margin-top: 20px;  
      font-family: 'Sriracha', cursive;  
      border: 3px solid #333;  
      padding: 10px 30px;  
      animation: fadeIn 1s 1s forwards;  
      opacity: 0;  
    }  

    .date__of__birth span {  
      font-weight: bold;  
      font-size: 1.2rem;  
      color: #fff;  
    }  

    .box__account {  
      position: relative;  
      animation: topBoxImage 2s 1s forwards;  
      transform: translateY(100px);  
      opacity: 0;  
    }  

    @keyframes topBoxImage {  
      to { transform: translateY(0); opacity: 1; }  
    }  

    .content .right .image {  
      position: relative;  
      width: clamp(200px, 40vw, 400px);  
      height: clamp(200px, 40vw, 400px);  
      border-radius: 50%;  
      overflow: hidden;  
      display: flex;  
      align-items: center;  
      border: 6px solid #333;  
    }  

    .content .right .image img {  
      width: 100%;  
      object-fit: cover;  
    }  

    .balloon_one, .balloon_two {  
      position: absolute;  
      width: 80px;  
    }  

    .balloon_one {  
      top: -70px;  
      left: -70px;  
      animation: balloon1 2s infinite linear;  
    }  

    .balloon_two {  
      top: 170px;  
      right: -65px;  
      z-index: -1;  
      transform: rotate(10deg);  
      animation: balloon2 2s infinite linear;  
    }  

    @keyframes balloon1 {  
      0%, 50%, 100% { transform: rotate(0deg); }  
      25% { transform: rotate(3deg); }  
      75% { transform: rotate(-3deg); }  
    }  

    @keyframes balloon2 {  
      0%, 50%, 100% { transform: rotate(10deg); }  
      25% { transform: rotate(7deg); }  
      75% { transform: rotate(13deg); }  
    }  

    #btn__letter {  
      position: relative;  
      margin-top: 30px;  
      background-color: #ff7882;  
      padding: 12px 25px;  
      font-size: 1rem;  
      border-radius: 50px;  
      border: 3px solid #333;  
      font-family: 'Sriracha', cursive;  
      display: flex;  
      align-items: center;  
      justify-content: center;  
      cursor: pointer;  
      z-index: 2;  
      transition: all 0.3s ease;  
      color: #fff;  
      touch-action: manipulation;  
      -webkit-tap-highlight-color: transparent;  
      animation: fadeIn 1s 2s forwards;  
      opacity: 0;  
    }  

    #btn__letter:active {  
      transform: scale(0.95);  
      background-color: #f61f1f;  
    }  

    #btn__letter i { margin-left: 8px; }  

    @keyframes fadeIn {  
      to { opacity: 1; }  
    }  

    @media (max-width: 768px) {  
      .content { flex-direction: column; padding-top: 1rem; }  
      .content .left, .content .right { width: 100%; padding: 10px; }  
      .flag__birthday img { width: 80px; }  
    }  
  `}</style>  

  <div className="home-page">  
    <div className="flag__birthday">  
      <img className="flag__left" src="/flag.png" alt="flag" style={{ width: '100px' }} />  
      <img className="flag__right" src="/flag.png" alt="flag" style={{ width: '100px' }} />  
    </div>  

    <div className="content">  
      <div className="left">  
        <div className="title">  
          <div className="happy">Happy</div>  
          <div className="birthday">New Year💋!</div>  
        </div>  
        <div className="date__of__birth">  
          <span> Special day😋💋 </span>  
        </div>  
        <button   
          id="btn__letter"   
          onClick={handleMailClick}  
          onTouchEnd={(e) => { e.preventDefault(); handleMailClick(); }}  
        >  
          Open Birthday Letter <i className="fa-solid fa-heart"></i>  
        </button>  
      </div>  

      <div className="right">  
        <div className="box__account">  
          <img className="balloon_one" src="/images/balloon1.png" alt="balloon" />  
          <div className="image">  
            <img src="/profile.jpg" alt="Birthday Person" />  
          </div>  
          <img className="balloon_two" src="/images/balloon2.png" alt="balloon" />  
        </div>  
      </div>  
    </div>  

    {/* Mail Modal */}  
    {showMail && (  
      <div   
        style={{  
          position: 'fixed',  
          top: 0, left: 0, right: 0, bottom: 0,  
          background: 'rgba(0,0,0,0.7)',  
          display: 'flex',  
          justifyContent: 'center',  
          alignItems: 'center',  
          zIndex: 9999,  
          padding: '20px'  
        }}  
        onClick={handleCloseMail}  
      >  
        <div   
          style={{  
            background: '#fff8e4',  
            borderRadius: '20px',  
            padding: '40px',  
            maxWidth: '600px',  
            width: '90%',  
            maxHeight: '85vh',  // Limits height so it stays on screen
            overflowY: 'auto',  // Enables vertical scrolling
            border: '5px solid #333',  
            fontFamily: "'Dancing Script', cursive",  
            textAlign: 'center',  
            position: 'relative'  
          }}  
          onClick={(e) => e.stopPropagation()}  
        >  
          <button  
            onClick={handleCloseMail}  
            onTouchEnd={(e) => { e.preventDefault(); handleCloseMail(); }}  
            style={{  
              position: 'absolute',  
              top: '10px',  
              right: '10px',  
              width: '40px',  
              height: '40px',  
              borderRadius: '50%',  
              border: '3px solid #333',  
              background: '#fff',  
              cursor: 'pointer',  
              zIndex: 10,
              fontSize: '1.5rem',  
              display: 'flex',  
              justifyContent: 'center',  
              alignItems: 'center'  
            }}  
          >  
            ×  
          </button>  
          <div style={{  
            width: '100px',  
            height: '100px',  
            borderRadius: '50%',  
            overflow: 'hidden',  
            margin: '0 auto 20px',  
            border: '4px solid #ff7882'  
          }}>  
            <img src="/profile.jpg" alt="Birthday Person" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />  
          </div>  
          <h3 style={{ fontSize: '2rem', color: '#ff7882', marginBottom: '10px' }}>Happy New Year Baby💋! 🎉</h3>  
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#333', marginBottom: '10px' }}>  
            Mai boht khush hu 2026 ki starting mein hi mere paas itni sundar pyari aur susheel ladki hai😋💋,   
            I just want to say how lucky I am to have a beatifullll bestie like you in my life😋💋 tu boht  
            pyarii hai🥹 sabse pyari hai tuuuuu as you know terese sundar ladki toh maine kabhi dekhi hi nhi😭💋   
            May this year bring you endless happiness, success, and all the love you deserve! babe💋❤️  
          </p>  
          <button  
            onClick={handleNextPage}  
            onTouchEnd={(e) => { e.preventDefault(); handleNextPage(); }}  
            style={{  
              marginTop: '25px',  
              padding: '12px 30px',  
              fontFamily: "'Sriracha', cursive",  
              fontSize: '1.2rem',  
              fontWeight: 'bold',  
              color: '#fff',  
              backgroundColor: '#ff7882',  
              border: '3px solid #333',  
              borderRadius: '50px',  
              cursor: 'pointer',  
              touchAction: 'manipulation'  
            }}  
          >  
            Continue →  
          </button>  
        </div>  
      </div>  
    )}  
  </div>  
</>

);
};

export default Home;
