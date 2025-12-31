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
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heart.style.fontSize = `${15 + Math.random() * 20}px`;
        heart.style.animationDuration = `${10 + Math.random() * 15}s`;
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
  // Reduced translateX from 50% to 25% so it stays more centered
  const bookTransform = isBookOpen ? `translateX(25%) rotateX(10deg)` : `rotateX(10deg)`;

  const pages = [
    { front: { type: 'cover', title: 'Happy New Year!', subtitle: 'A Special Book Just for You Baby💋❤️' }, back: { title: 'A Wish For You... ✨', text: 'On this special day🥹💋, I wish you a life full of happiness and all your beautiful dreams coming true.' }},
    { front: { type: 'image', src: '/2.png' }, back: { title: 'For My Beauty💋 💖', text: 'I hopee tujhe iss saaal bohttt sari khushiyaa mile aurr hmara rishta aur achha ho jaye❤️' }},
    { front: { type: 'image', src: '/3.png' }, back: { title: "You're the Best 🫠❤️", text: 'Tu meri fav hai you knw tu pyari, sundar, hot, sweet sab hai tu🥹🫠❤️💋. change mt hona.' }},
    { front: { type: 'image', src: '/4.png' }, back: { title: "apki cuteness😋❤️", text: "sach bata rha hu ksm se kabhi tere jaisi sundri ladki nhi dekhiii😭 TERI AANKHE UFFF!" }},
    { front: { type: 'image', src: '/5.png' }, back: { title: 'My Wishes 💖', text: 'Hope you achieve your goals this year and keep growing with all the love you truly deserve!' }},
    { front: { type: 'image', src: '/6.png' }, back: { title: 'Before You Go... 💫', text: 'Meri pyari bestfrienddd mere jigar ka tukda kya hi bolu ab pyari bachi hai tu merii🥹' }},
    { front: { type: 'image', src: '/profile.jpg' }, back: { title: 'Thak toh nhi gyi?😭', text: "AGAIN I LOVE UH SO MUCHH, YOU'RE THE BESTTT UMAH 😭😭😭" }},
    { front: { type: 'image', src: '/1.png' }, back: { type: 'backcover', title: 'With Love', subtitle: 'Always and Forever 💌' }},
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Zeyada&family=Sriracha&family=Titan+One&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        .third-page {
          margin: 0;
          display: flex;
          min-height: 100vh;
          perspective: 2200px;
          overflow: hidden;
          background-color: #feecea;
          background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.8) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.8) 75%, rgba(255, 255, 255, 0.8) 76%, transparent 77%, transparent);
          background-size: 80px 80px;
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
          width: 55vmin; /* Increased width */
          height: 70vmin; /* Increased height */
          transform-style: preserve-3d;
          transition: transform 0.8s ease-in-out;
          cursor: pointer;
        }

        .page {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transform-origin: left center;
          transition: transform 1.2s cubic-bezier(0.65, 0, 0.35, 1);
          box-shadow: 0.5em 0.5em 1.5em rgba(0,0,0,0.2);
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
          padding: 1.5em; /* Adjusted padding */
          text-align: center;
        }

        .back-page { transform: rotateY(180deg); border-radius: 1em 0.25em 0.25em 1em; }
        
        .front.has-image img { width: 100%; height: 100%; object-fit: cover; }

        .cover {
          background: linear-gradient(135deg, #f43d67, #ff7882);
          color: #fff;
        }

        .cover h1 {
          font-family: 'Titan One', sans-serif;
          font-size: clamp(1.5em, 4vw, 2.5em); /* Slightly smaller */
        }

        h2 {
          font-family: 'Sriracha', cursive;
          font-size: clamp(1.1em, 2.5vw, 1.4em); /* Smaller title */
          color: #ff7882;
        }

        .page-text {
          font-family: 'Zeyada', cursive;
          font-size: clamp(1.1em, 2.2vw, 1.4em); /* Smaller text */
          line-height: 1.2;
          color: #333;
        }

        .tap-hint {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Sriracha', cursive;
          color: #ff7882;
          background: rgba(255,255,255,0.9);
          padding: 8px 16px;
          border-radius: 20px;
        }
      `}</style>

      <div className="third-page">
        <div className="floating-hearts-book"></div>
        <div 
          className="book" 
          ref={bookRef}
          style={{ transform: bookTransform }}
          onClick={handleBookClick}
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
                  {page.front.type === 'image' && <img src={page.front.src} alt="" />}
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
    </>
  );
};

export default Third;
