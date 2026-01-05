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
      <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Titan+One&family=Nerko+One&family=Sriracha&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <style>{`
        * { padding: 0; margin: 0; box-sizing: border-box; }

        .home-page {
          position: relative;
          min-height: 100vh;
          background-color: #feecea;
          background-image: linear-gradient(0deg, transparent 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 76%, transparent 77%, transparent);
          background-size: 80px 80px;
          overflow: hidden;
        }

        .content {
          display: flex;
          padding-top: 5rem;
          flex-wrap: wrap;
        }

        .left, .right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .left { width: 40%; }
        .right { width: 60%; }

        .title {
          font-family: 'Titan One', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          text-align: center;
        }

        .happy { color: #fff; text-shadow: 4px 4px #333; }
        .birthday { color: #ff7882; text-shadow: 4px 4px #333; }

        .date__of__birth {
          margin-top: 20px;
          padding: 10px 30px;
          background: #ff7882;
          border-radius: 50px;
          border: 3px solid #333;
          font-family: 'Sriracha', cursive;
          color: #fff;
        }

        #btn__letter {
          margin-top: 30px;
          padding: 12px 25px;
          background: #ff7882;
          border: 3px solid #333;
          border-radius: 50px;
          font-family: 'Sriracha', cursive;
          color: #fff;
          cursor: pointer;
        }
      `}</style>

      <div className="home-page">
        <div className="content">
          <div className="left">
            <div className="title">
              <div className="happy">Happy</div>
              <div className="birthday">Birthday Papa!</div>
            </div>

            <div className="date__of__birth">
              <span> A very special day </span>
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
            <div className="image">
              <img src="/profile.jpg" alt="Papa" />
            </div>
          </div>
        </div>

        {showMail && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999
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
                border: '5px solid #333',
                fontFamily: "'Dancing Script', cursive",
                textAlign: 'center',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseMail}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '3px solid #333',
                  background: '#fff',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>

              <h3 style={{ fontSize: '2rem', color: '#ff7882', marginBottom: '15px' }}>
                Happy Birthday Papa 🎉
              </h3>

              <p style={{ fontSize: '1.3rem', lineHeight: '1.7', color: '#333' }}>
                You’ve always been there for me. You pushed me when I needed it, supported me when I didn’t say anything,
                and helped me grow into a better version of myself. A lot of who I am today comes from you and the way
                you raised me. Some of my best memories are with you, and I’m thankful for every single one.
                <br /><br />
                Tomorrow, 6th January, you turn 45. I’m grateful for you today and always, and Inshallah there’s a lot
                more life, memories, and time ahead of us.
              </p>

              <button
                onClick={handleNextPage}
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
