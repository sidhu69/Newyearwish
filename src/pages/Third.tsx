import { useEffect, useRef, useState } from 'react';

const Third = () => {
const bookRef = useRef<HTMLDivElement>(null);
const [currentPage, setCurrentPage] = useState(0);
const pageCount = 8;

useEffect(() => {
const container = document.querySelector('.floating-hearts-book');
if (container) {
for (let i = 0; i < 30; i++) {
const heart = document.createElement('i');
heart.className = 'fa-solid fa-heart';
heart.style.left = ${Math.random() * 100}%;
heart.style.animationDelay = ${Math.random() * 10}s;
heart.style.fontSize = ${15 + Math.random() * 20}px;
heart.style.animationDuration = ${10 + Math.random() * 15}s;
container.appendChild(heart);
}
}
}, []);

const handleBookClick = (e: React.MouseEvent | React.TouchEvent) => {
if (!bookRef.current) return;
const rect = bookRef.current.getBoundingClientRect();
let clickX: number;
if ('touches' in e) {
clickX = e.touches[0].clientX - rect.left;
} else {
clickX = e.clientX - rect.left;
}

if (clickX < rect.width / 2) {
setCurrentPage(prev => Math.max(0, prev - 1));
} else {
setCurrentPage(prev => Math.min(pageCount, prev + 1));
}

};

const isBookOpen = currentPage > 0 && currentPage < pageCount;
const bookTransform = isBookOpen ? 'translateX(70%) rotateX(10deg)' : 'rotateX(10deg)';

const pages = [
{
front: {
type: 'cover',
title: 'Happy Birthday Papa',
subtitle: 'A Small Book Filled With Love ❤️'
},
back: {
title: 'For You Papa',
text: 'There are so many things I don’t say out loud, but they truly matter ❤️'
}
},
{
front: { type: 'image', src: '/2.png' },
back: {
title: 'Your Presence',
text: 'Your presence always made things easier and safer for me, papa ❤️'
}
},
{
front: { type: 'image', src: '/3.png' },
back: {
title: 'Silent Strength',
text: 'Knowing you were there gave me confidence I didn’t even realise I had ❤️'
}
},
{
front: { type: 'image', src: '/4.png' },
back: {
title: 'Grateful Heart',
text: 'That quiet support of yours shaped me more than words ever could ❤️'
}
},
{
front: { type: 'image', src: '/5.png' },
back: {
title: 'Always Thankful',
text: 'It’s something I will always carry with me and be thankful for, papa ❤️'
}
},
{
front: { type: 'image', src: '/6.png' },
back: {
title: 'Unsaid Feelings',
text: 'I may not express it often, but your guidance means everything to me ❤️'
}
},
{
front: { type: 'image', src: '/profile.jpg' },
back: {
title: 'On Your Birthday',
text: 'Wishing you health, peace, and happiness today and always, papa ❤️'
}
},
{
front: { type: 'image', src: '/1.png' },
back: {
type: 'backcover',
title: 'With Love',
subtitle: 'Forever Grateful to You, Papa ❤️'
}
}
];

return (
<>

<link href="https://fonts.googleapis.com/css2?family=Zeyada&family=Sriracha&family=Titan+One&display=swap" rel="stylesheet" />  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />  <style>{`    
    .third-page {      
      margin: 0;      
      display: flex;      
      align-items: center;    
      justify-content: center;    
      min-height: 100vh;      
      perspective: 2200px;      
      overflow: hidden;      
      background-color: #feecea;      
      background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent);      
      background-size: 80px 80px;      
      padding: 20px;    
      box-sizing: border-box;    
    }      
  
    .floating-hearts-book {      
      position: absolute;    
      top: 0;    
      left: 0;    
      right: 0;    
      bottom: 0;    
      pointer-events: none;    
      z-index: 1;    
    }    
  
    .floating-hearts-book i {      
      position: absolute;      
      bottom: -80px;      
      color: #f43d67;      
      animation: float linear infinite;      
    }      
  
    @keyframes float {      
      0% { transform: translateY(0); opacity: 0; }      
      10% { opacity: 0.8; }      
      100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }      
    }      
  
    .book {      
      position: relative;      
      margin: auto;      
      width: 45vmin;      
      height: 60vmin;      
      transform-style: preserve-3d;      
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);      
      cursor: pointer;      
    }      
  
    .page {      
      position: absolute;      
      inset: 0;      
      transform-style: preserve-3d;      
      transform-origin: left center;      
      transition: transform 1.2s cubic-bezier(0.65, 0, 0.35, 1);      
      box-shadow: 0em 0.5em 1.5em -0.2em rgba(0,0,0,0.3);      
      border-radius: 0.25em 1em 1em 0.25em;      
    }      
          
    .front, .back-page {      
      position: absolute;      
      inset: 0;      
      backface-visibility: hidden;      
      background-color: #fffafc;      
      display: flex;      
      flex-direction: column;      
      justify-content: center;      
      align-items: center;      
      text-align: center;      
      padding: 1.8em; /* Slightly reduced padding */    
    }      
  
    .front { border-radius: 0.25em 1em 1em 0.25em; }      
    .back-page { border-radius: 1em 0.25em 0.25em 1em; transform: rotateY(180deg); }      
          
    .front.has-image, .back-page.has-image { padding: 0; }      
    .front.has-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 0.25em 1em 1em 0.25em; }      
  
    .cover {      
      background: linear-gradient(135deg, #f43d67, #ff7882);      
      color: #fff;      
      border: 2px solid rgba(255,255,255,0.5);    
    }      
  
    .cover h1 {      
      font-family: 'Titan One', sans-serif;      
      font-size: clamp(1.8em, 4vw, 2.5em); /* SMALLER than HTML */    
      text-shadow: 2px 2px 0px rgba(0,0,0,0.2);    
    }      
  
    .cover p {      
      font-family: 'Sriracha', cursive;      
      font-size: 0.95em; /* SMALLER than HTML */    
      text-shadow: 1px 1px 1px rgba(0,0,0,0.2);    
    }    
  
    h2 {      
      font-family: 'Sriracha', cursive;      
      font-size: clamp(1.1em, 2.2vw, 1.5em); /* SMALLER than HTML */    
      color: #ff7882;      
      margin-bottom: 0.4em;    
    }      
  
    .page-text {      
      font-family: 'Zeyada', cursive;      
      font-size: clamp(1em, 1.8vw, 1.3em); /* SMALLER than HTML */    
      line-height: 1.35; /* Tighter line height */    
      color: #333;      
      margin-bottom: 0.6em;    
    }    
  
    .tap-hint {      
      position: fixed;      
      bottom: 25px;      
      left: 50%;      
      transform: translateX(-50%);      
      font-family: 'Sriracha', cursive;      
      color: #ff7882;      
      background: rgba(255,255,255,0.9);      
      padding: 8px 16px;      
      border-radius: 20px;      
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);      
      z-index: 100;    
      font-size: 0.9em;    
    }    
  `}</style>        <div className="third-page">      
    <div className="floating-hearts-book"></div>      
    <div       
      className="book"       
      ref={bookRef}      
      style={{ transform: bookTransform }}      
      onClick={handleBookClick}      
      onTouchEnd={handleBookClick}      
    >      
      {pages.map((page, index) => {      
        const isFlipped = index < currentPage;      
        return (      
          <div       
            key={index}      
            className="page"      
            style={{      
              transform: `rotateY(${isFlipped ? -180 : 0}deg)`,      
              zIndex: isFlipped ? index : pageCount - index      
            }}      
          >      
            <div className={`front ${page.front.type === 'cover' || page.front.type === 'backcover' ? 'cover' : ''} ${page.front.type === 'image' ? 'has-image' : ''}`}>      
              {page.front.type === 'cover' && (      
                <>      
                  <h1>{page.front.title}</h1>      
                  <p>{page.front.subtitle}</p>      
                </>      
              )}      
              {page.front.type === 'image' && <img src={page.front.src} alt="" draggable="false" />}      
            </div>      
            <div className={`back-page ${page.back.type === 'backcover' ? 'cover' : ''}`}>      
              {page.back.type === 'backcover' ? (      
                <>      
                  <h1>{page.back.title}</h1>      
                  <p>{page.back.subtitle}</p>      
                </>      
              ) : (      
                <>      
                  <h2>{page.back.title}</h2>      
                  <p className="page-text">{page.back.text}</p>      
                </>      
              )}      
            </div>      
          </div>      
        );      
      })}      
    </div>      
    <div className="tap-hint">👆 Tap edges to flip</div>      
  </div>      
</>  );
};

export default Third;
