import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const secretCode = 'Papa';

  useEffect(() => {
    setTimeout(() => setIsActive(true), 200);
    createFloatingHearts();
  }, []);

  const createFloatingHearts = () => {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('i');
      heart.className = 'fa-solid fa-heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 10}s`;
      heart.style.fontSize = `${15 + Math.random() * 20}px`;
      heart.style.animationDuration = `${15 + Math.random() * 15}s`;
      container.appendChild(heart);
    }
  };

  const handleSubmit = useCallback((e: React.FormEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    const userInput = code.trim();
    if (userInput.toLowerCase() === secretCode.toLowerCase()) {
      setIsSubmitting(true);
      setResult('🎉 Happy Birthday Papa 🎉');
      setTimeout(() => navigate('/home'), 500);
    } else {
      setResult("Oops! That's not the right name.");
      const form = document.getElementById('login-form');
      form?.animate([
        { transform: 'translateX(0px)' }, { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' }, { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' }, { transform: 'translateX(0px)' }
      ], { duration: 500, iterations: 1 });
    }
  }, [code, isSubmitting, navigate]);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Titan+One&family=Sriracha&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: 'Sriracha', sans-serif;
          overflow: hidden;
          position: relative;
          background-color: #feecea;
          background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent);
          background-size: 80px 80px;
        }
        
        .floating-hearts {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        .floating-hearts i {
          position: absolute;
          bottom: -80px;
          color: #ff7882;
          animation: float-up linear infinite;
          opacity: 0;
        }

        #login-form {
          background: linear-gradient(145deg, #ff7882, #f43d67);
          padding: 40px 60px;
          border-radius: 50% 50% 10% 10%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: fadeIn 1.5s ease-in-out forwards;
          position: relative;
          z-index: 10;
          opacity: 0;
          width: 400px;
          max-width: 90%;
          touch-action: manipulation;
        }

        #login-form.active { opacity: 1; }

        #login-form h2 {
          font-family: 'Titan One', sans-serif;
          color: #fff;
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          margin-bottom: 20px;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
        }

        #login-form label {
          font-size: 1.2rem;
          color: #fff;
          font-weight: bold;
          display: block;
          margin-bottom: 10px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        #login-form input {
          width: 100%;
          padding: 15px;
          margin-bottom: 20px;
          border: 2px solid rgba(0,0,0,0.1);
          font-size: 1.2rem;
          font-family: 'Sriracha', sans-serif;
          text-align: center;
          background: #fff0f2;
          color: #333;
          border-radius: 50px;
          transition: all 0.3s ease;
          -webkit-appearance: none;
          appearance: none;
        }

        #login-form input:focus {
          outline: none;
          background: white;
          border-color: #f43d67;
          box-shadow: 0 0 15px rgba(244, 61, 103, 0.5);
        }

        #login-form button {
          background: #fff;
          color: #f43d67;
          border: 3px solid #333;
          padding: 12px 35px;
          font-size: 1.2rem;
          font-family: 'Sriracha', sans-serif;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          font-weight: bold;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        #login-form button:hover,
        #login-form button:active {
          background: #f43d67;
          color: #fff;
          transform: scale(1.05);
        }

        #result {
          margin-top: 20px;
          font-size: 1rem;
          color: #fff;
          font-weight: bold;
          height: 20px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="login-page">
        <div className="floating-hearts"></div>
        
        <form 
          id="login-form" 
          className={isActive ? 'active' : ''}
          onSubmit={handleSubmit}
        >
          <h2>🎉 Happy Birthday Papa 🎂</h2>
          <label htmlFor="code">
            Please type here "Papa"
          </label>
          <input 
            type="text" 
            id="code" 
            name="code" 
            placeholder='Please type here "Papa"'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            autoComplete="off"
          />
          <button 
            type="submit"
            onTouchEnd={handleSubmit}
          >
            Tap to Unlock Your Surprise 🎁
          </button>
          <div id="result">{result}</div>
        </form>
      </div>
    </>
  );
};

export default Login;
