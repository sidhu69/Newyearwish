import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Second = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const notesData = [
      { image: "/8.png", text: "And once again... Happy Birthday, yaar! Enjoy every moment of your day." },
      { image: "/7.png", text: "Honestly, I really wish tumhe boht achievements mile iss year❤️" },
      { image: "/1.png", text: "You may not know this, but even if my day goes completely wrong, just one small conversation with you makes it feel right again." },
      { image: "/5.png", text: "Your presence has this quiet magic — it makes everything feel better." },
      { image: "/4.png", text: "You're truly the best girl I've ever come across." },
      { image: "/3.png", text: "Just remember — you'll always be my favourite person." },
      { image: "/2.png", text: "You have such a beautiful and kind soul — inside and out." },
      { image: "/6.png", text: "Your smile is honestly the cutest thing I've ever seen." }
    ];

    let highestZ = 5;

    class Paper {
      paper: HTMLElement;
      isHolding: boolean = false;
      offsetX: number = 0;
      offsetY: number = 0;
      hoverInterval: NodeJS.Timeout | null = null;

      constructor(paperElement: HTMLElement) {
        this.paper = paperElement;
        this.init();
      }

      init() {
        this.paper.addEventListener('mousedown', (e) => this.start(e.clientX, e.clientY));
        this.paper.addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.start(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: false });
        
        document.addEventListener('mousemove', (e) => this.move(e.clientX, e.clientY));
        document.addEventListener('touchmove', (e) => {
          if (this.isHolding) {
            e.preventDefault();
            this.move(e.touches[0].clientX, e.touches[0].clientY);
          }
        }, { passive: false });
        
        window.addEventListener('mouseup', () => this.end());
        window.addEventListener('touchend', () => this.end());
      }

      start(x: number, y: number) {
        if (this.isHolding) return;
        this.isHolding = true;
        this.paper.style.zIndex = String(highestZ++);
        const rect = this.paper.getBoundingClientRect();
        this.offsetX = x - rect.left;
        this.offsetY = y - rect.top;
      }

      move(x: number, y: number) {
        if (!this.isHolding) return;
        this.paper.style.left = `${x - this.offsetX}px`;
        this.paper.style.top = `${y - this.offsetY}px`;
      }

      end() { this.isHolding = false; }
    }

    // Create papers
    notesData.forEach((note, index) => {
      const paperDiv = document.createElement('div');
      paperDiv.className = 'paper';
      paperDiv.innerHTML = `
        <div class="image-container">
          <img src="${note.image}" alt="A special memory" draggable="false">
        </div>
        <p>${note.text}</p>
      `;
      containerRef.current?.appendChild(paperDiv);
      
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      paperDiv.style.left = `${50 + Math.random() * (vw * 0.4)}px`;
      paperDiv.style.top = `${100 + index * 60 + Math.random() * 50}px`;
      paperDiv.style.transform = `rotateZ(${Math.random() * 40 - 20}deg)`;
      
      new Paper(paperDiv);
    });

    // Create floating hearts
    const createFloatingHearts = () => {
      const container = document.querySelector('.floating-hearts-second');
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
    createFloatingHearts();

    // Create particle hearts
    const createParticles = () => {
      const container = document.querySelector('.particles');
      if (!container) return;
      for (let i = 0; i < 80; i++) {
        const heart = document.createElement('i');
        heart.className = 'fa-solid fa-heart particle';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${5 + Math.random() * 15}px`;
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(heart);
      }
    };
    createParticles();
  }, []);

  return (
    <>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Zeyada&family=Titan+One&display=swap' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        .second-page {
          min-height: 100vh;
          background-color: #feecea;
          background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent);
          background-size: 80px 80px;
          overflow: hidden;
          position: relative;
        }

        .main-title {
          position: absolute;
          top: 4vh;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Titan One', sans-serif;
          font-size: clamp(1.5rem, 5vw, 3rem);
          color: #fff;
          text-shadow: 2px 2px 0px #ff7882, 4px 4px 0px #333;
          z-index: 20;
          text-align: center;
          white-space: nowrap;
        }

        .particles, .floating-hearts-second {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particles .particle {
          position: absolute;
          color: #ff7882;
          opacity: 0.3;
        }

        .floating-hearts-second i {
          position: absolute;
          bottom: -80px;
          color: #ff7882;
          animation: float-up 15s linear infinite;
          opacity: 0;
        }

        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .center-heart {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 25vmax;
          color: #f43d67;
          text-shadow: 0 0 20px rgba(246, 31, 31, 0.5);
          animation: heartbeat 1.5s infinite;
          z-index: 2;
          opacity: 0.15;
        }

        @keyframes heartbeat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }

        .paper {
          position: absolute;
          background-color: #fff;
          padding: 15px;
          width: clamp(180px, 18vw, 280px);
          box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.2);
          border-radius: 8px;
          cursor: grab;
          z-index: 5;
          touch-action: none;
          user-select: none;
        }

        .paper:active { cursor: grabbing; }
        
        .paper .image-container {
          width: 100%;
          height: 150px;
          background-color: #f0f0f0;
          overflow: hidden;
          border-radius: 4px;
        }

        .paper .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        
        .paper p {
          font-family: 'Zeyada', cursive;
          font-size: clamp(20px, 2.2vw, 30px);
          color: #333;
          padding: 10px 5px 0 5px;
          text-align: center;
          line-height: 1.2;
        }

        .next-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #ff7882;
          color: #fff;
          border: 3px solid #333;
          padding: 15px 25px;
          font-family: 'Titan One', sans-serif;
          font-size: 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          z-index: 1000;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .next-btn:active {
          background-color: #f43d67;
          transform: scale(0.95);
        }
      `}</style>

      <div className="second-page" ref={containerRef}>
        <h1 className="main-title">A Few Notes For You ❤️</h1>
        
        <div className="particles"></div>
        <div className="floating-hearts-second"></div>
        <div className="center-heart">
          <i className="fa-solid fa-heart"></i>
        </div>
        
        <button 
          className="next-btn" 
          onClick={() => navigate('/third')}
          onTouchEnd={(e) => { e.preventDefault(); navigate('/third'); }}
        >
          Next →
        </button>
      </div>
    </>
  );
};

export default Second;
