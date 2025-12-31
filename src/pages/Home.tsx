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

  // 🔒 Lock background scroll permanently
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'hidden';
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
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .home-page {
          min-height: 100vh;
          overflow: hidden;
          background-color: #feecea;
          background-image:
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 76%, transparent 77%, transparent);
          background-size: 80px 80px;
        }

        .content {
          display: flex;
          padding-top: 2rem;
        }

        .left, .right {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .left { width: 40%; }
        .right { width: 60%; }

        .title {
          font-family: 'Titan One', sans-serif;
          font-size: 3rem;
          text-align: center;
        }

        .happy {
          color: #fff;
          text-shadow: 4px 4px #333;
        }

        .newyear {
          color: #ff7882;
          text-shadow: 4px 4px #333;
        }

        #btn__letter {
          margin-top: 30px;
          padding: 12px 30px;
          background: #ff7882;
          border: 3px solid #333;
          border-radius: 50px;
          font-family: 'Sriracha', cursive;
          font-size: 1.1rem;
          color: #fff;
          cursor: pointer;
        }

        .image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid #333;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="home-page">
        <div className="content">
          <div className="left">
            <div className="title">
              <div className="happy">Happy</div>
              <div className="newyear">New Year 💋</div>
            </div>

            <button id="btn__letter" onClick={handleMailClick}>
              Open Letter ❤️
            </button>
          </div>

          <div className="right">
            <div className="image">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>
        </div>

        {/* ✉️ LETTER MODAL */}
        {showMail && (
          <div
            onClick={handleCloseMail}
            onTouchMove={(e) => e.preventDefault()}
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
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                border: '5px solid #333',
                fontFamily: "'Dancing Script', cursive",
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <h2 style={{ color: '#ff7882', marginBottom: '20px' }}>
                Happy New Year Baby 💋🎉
              </h2>

              <p style={{ fontSize: '1.3rem', lineHeight: '1.7' }}>
                Mai boht khush hu 2026 ki starting mein hi mere paas itni sundar
                pyari aur susheel ladki hai 😋💋  
                I just want to say how lucky I am to have you in my life.  
                Tu boht pyari hai, sabse pyari 🥹❤️  
                May this year bring you happiness, success and endless love.
              </p>

              <button
                onClick={handleNextPage}
                style={{
                  marginTop: '25px',
                  padding: '12px 30px',
                  borderRadius: '50px',
                  border: '3px solid #333',
                  background: '#ff7882',
                  color: '#fff',
                  fontFamily: "'Sriracha', cursive",
                  fontSize: '1.2rem',
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
