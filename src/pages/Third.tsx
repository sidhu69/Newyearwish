import { useEffect, useRef, useState } from 'react';

const Third = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const hasOpenedRef = useRef(false); // ✅ ADDED (remembers first open)
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

  // ✅ MARK THAT BOOK HAS BEEN OPENED AT LEAST ONCE
  if (isBookOpen) {
    hasOpenedRef.current = true;
  }

  // ✅ ONE-WAY MOVE: RIGHT on open, NO LEFT on close
  const bookTransform =
    isBookOpen || hasOpenedRef.current
      ? 'translateX(50%) rotateX(10deg)'
      : 'rotateX(10deg)';

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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <style>{`/* STYLES UNCHANGED */`}</style>

      <div className="third-page">
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
    </>
  );
};

export default Third;
