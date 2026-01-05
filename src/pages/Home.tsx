import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showMail, setShowMail] = useState(false);

  useEffect(() => {
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
      <link
        href="https://fonts.googleapis.com/css2?family=Coiny&family=Titan+One&family=Nerko+One&family=Sriracha&family=Dancing+Script:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <style>{`
        * { padding: 0; margin: 0; box-sizing: border-box; }

        .home-page {
          position: relative;
          font-size: 16px;
          min-height: 100vh;
          background-color: #feecea;
          background-image:
            linear-gradient(0deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, #fff 25%, #fff 26%, transparent 27%, transparent 74%, #fff 75%, #fff 76%, transparent 77%, transparent);
          background-size: 80px 80px;
          overflow: hidden;
          touch-action: pan-y;
        }

        .content {
          width: 100%;
          position: relative;
          display: flex;
          padding-top: 5rem;
          flex-wrap: wrap;
        }

        .content .left,
        .content .right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .content .left { width: 40%; }
        .content .right { width: 60%; }

        .title {
          font-family: 'Titan One', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          text-align: center;
        }

        .happy, .birthday {
          text-shadow: 4px 4px #333, -4px 4px #333, 4px -4px #333, -4px -4px #333, 4px 8px 0 #333;
          animation: txtTranslateY 0.5s forwards;
        }

        .happy { color: #fff; }
        .birthday { color: #ff7882; }

        @keyframes txtTranslateY {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .date__of__birth {
          background-color: #ff7882;
          border-radius: 50px;
          margin-top: 20px;
          font-family: 'Sriracha', cursive;
          border: 3px solid #333;
          padding: 10px 30px;
          opacity: 0;
          animation: fadeIn 1s 1s forwards;
        }

        .date__of__birth span {
          font-size: 1.2rem;
          color: #fff;
          font-weight: bold;
        }

        .box__account {
          animation: topBoxImage 2s 1s forwards;
          transform: translateY(100px);
          opacity: 0;
        }

        @keyframes topBoxImage {
          to { transform: translateY(0); opacity: 1; }
        }

        .image {
          width: clamp(200px, 40vw, 400px);
          height: clamp(200px, 40vw, 400px);
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid #333;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        #btn__letter {
          margin-top: 30px;
          background-color: #ff7882;
          padding: 12px 25px;
          border-radius: 50px;
          border: 3px solid #333;
          font-family: 'Sriracha', cursive;
          color: #fff;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 1s 2s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .content { flex-direction: column; padding-top: 1rem; }
          .content .left, .content .right { width: 100%; }
        }
      `}</style>

      <div className="home-page">
        <div className="content">
          <div className="left">
            <div className="title">
              <div className="happy">Happy</div>
              <div className="birthday">New Year!</div>
            </div>

            <div className="date__of__birth">
              <span>Special Day</span>
            </div>

            <button id="btn__letter" onClick={handleMailClick}>
              Open New Year Letter <i className="fa-solid fa-heart"></i>
            </button>
          </div>

          <div className="right">
            <div className="box__account">
              <div className="image">
                <img src="/profile.jpg" alt="Papa" />
              </div>
            </div>
          </div>
        </div>

        {showMail && (
          <div
            onClick={handleCloseMail}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '20px'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff8e4',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '85vh',
                overflowY: 'auto',
                border: '5px solid #333',
                fontFamily: "'Dancing Script', cursive",
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <button
                onClick={handleCloseMail}
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
                  fontSize: '1.5rem'
                }}
              >
                ×
              </button>

              <h3 style={{ fontSize: '2rem', color: '#ff7882' }}>
                Happy New Year Papa 🎉
              </h3>

              <p style={{ fontSize: '1.3rem', marginTop: '15px' }}>
                Papa, I just want to say how grateful I am to have you in my life.
              </p>

              <p style={{ fontSize: '1.3rem', marginTop: '15px' }}>
                You’ve always been there for me. You pushed me when I needed it,
                supported me when I didn’t say anything, and helped me grow into
                a better version of myself.
              </p>

              <p style={{ fontSize: '1.3rem', marginTop: '15px' }}>
                A lot of who I am today comes from you and the way you raised me.
                Some of my best memories are with you, and I’m thankful for every
                single one.
              </p>

              <p style={{ fontSize: '1.3rem', marginTop: '15px' }}>
                Tomorrow, 6th January, you turn 45. I’m grateful for you today
                and always, and Inshallah there’s a lot more life, memories, and
                time ahead of us.
              </p>

              <button
                onClick={handleNextPage}
                style={{
                  marginTop: '25px',
                  padding: '12px 30px',
                  fontFamily: "'Sriracha', cursive",
                  fontSize: '1.2rem',
                  color: '#fff',
                  backgroundColor: '#ff7882',
                  border: '3px solid #333',
                  borderRadius: '50px',
                  cursor: 'pointer'
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
