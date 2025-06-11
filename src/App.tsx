import React, { useState, useEffect } from 'react';
import './App.css';

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: any) => void;
  }
}

function App() {
  const [currentStage, setCurrentStage] = useState<'welcome' | 'carousel'>('welcome');
  const [showOffer, setShowOffer] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Preloader timer
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);

    return () => clearTimeout(preloaderTimer);
  }, []);

  useEffect(() => {
    if (currentStage === 'carousel') {
      const timer = setTimeout(() => {
        setShowOffer(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStage]);

  const handleStartExperience = () => {
    setCurrentStage('carousel');
  };

  const handleUnlockClick = () => {
    // Track Facebook Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Unlock Premium Content',
        content_category: 'Premium Access',
        value: 14.90,
        currency: 'BRL'
      });
    }
    
    // Add your redirect logic here
    console.log('Lead event tracked - User clicked unlock button');
  };

  const carouselImages = [
    '/public/2.png',
    '/public/3.png',
    '/public/4.png',
    '/public/5.png',
    '/public/Design sem nome.png',
    '/public/6.png',
    '/public/7.png',
    '/public/8.png',
    '/public/9.png',
    '/public/10.png',
  ];

  if (showPreloader) {
    return (
      <div className="preloader">
        <div className="preloader-content">
          <div className="preloader-spinner"></div>
          <div className="preloader-text">
            <h2>Preparando sua experiência...</h2>
            <p>Aguarde um momento 💫</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {currentStage === 'welcome' && (
        <div className="welcome-stage">
          <div className="welcome-content">
            <div className="profile-image-container">
              <img 
                src="/public/GXT1UUBWwAAL20n.jpg" 
                alt="Profile" 
                className="profile-image"
                loading="lazy"
              />
            </div>
            
            <div className="welcome-text">
              <h1 className="welcome-title">
                Chegou no lugar certo, amor ❤️
              </h1>
              <p className="welcome-subtitle">
                Agora segura a curiosidade... porque o que vem a seguir não é pra qualquer um 😈
              </p>
            </div>

            <button 
              className="cta-button"
              onClick={handleStartExperience}
            >
              QUERO VER AS PRÉVIAS AGORA 🔥
            </button>
          </div>
        </div>
      )}

      {currentStage === 'carousel' && (
        <div className="carousel-stage">
          <div className="carousel-container">
            <div className="carousel-track">
              {[...carouselImages, ...carouselImages, ...carouselImages].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="carousel-image"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {showOffer && (
            <div className="offer-container">
              <p className="offer-text">
                Gostou do que viu? 😏 Isso foi só uma provinha, amor...
              </p>
              
              <div className="price-container">
                <span className="old-price">R$37,90</span>
                <span className="new-price">R$14,90</span>
              </div>

              <button 
                className="unlock-button"
                onClick={handleUnlockClick}
              >
                QUERO DESBLOQUEAR TUDO AGORA 🔓
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;