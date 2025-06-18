import React, { useState, useEffect } from 'react';
import './App.css';
import { ArrowDown } from 'lucide-react';

function App() {
  const [currentStage, setCurrentStage] = useState<'welcome' | 'carousel' | 'packages'>('welcome');
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

  const handleChoosePackage = () => {
    setCurrentStage('packages');
  };

  const carouselImages = [
    '/1 (3).jpg',
    '/1 (5).jpg',
    '/1 (6).jpg',
    '/1 (7).jpg',
    '/1 (9).jpg',
    '/1 (10).jpg',
    '/1 (11).jpg',
    '/1 (16).jpg',
    '/1 (17).jpg',
    '/1 (18).jpg',
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
                src="/53ebf5e0-c585-4ac6-9f3f-5a408e1f16c8.jpg" 
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
                Gostou das prévias amor? isso é só fotos, eu tenho vídeos fazendo de tudo, quer ver? clica no botão abaixo
              </p>
              
              <div className="arrow-container">
                <ArrowDown size={32} className="arrow-icon" />
              </div>

              <button 
                className="unlock-button"
                onClick={handleChoosePackage}
              >
                ESCOLHER PACOTE 🔓
              </button>
            </div>
          )}
        </div>
      )}

      {currentStage === 'packages' && (
        <div className="packages-stage">
          <div className="packages-content">
            <h1 className="packages-title">Escolha seu pacote</h1>
            
            <div className="packages-grid">
              {/* Pacote 1 - Pecado Doce */}
              <div className="package-card">
                <div className="package-header">
                  <h3 className="package-name">PECADO DOCE</h3>
                  <div className="price-section">
                    <div className="old-price">R$39,90</div>
                    <div className="package-price">R$11,90</div>
                  </div>
                </div>
                <div className="package-content-list">
                  <p className="package-items">10 vídeos + 15 fotos</p>
                  <div className="package-description">
                    <p><strong>Conteúdo:</strong></p>
                    <p>Sexo</p>
                    <p>Boquete</p>
                    <p>Masturbação</p>
                    <p>Exibição</p>
                    <p>+1 Bônus</p>
                  </div>
                </div>
                <a 
                  href="https://pay.pagbrasilpagamento.com/checkout/78e13c83-30e3-40c3-a9b4-3f960348d780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-button"
                >
                  ADQUIRIR
                </a>
              </div>

              {/* Pacote 2 - Safadinha Sem Filtro */}
              <div className="package-card featured">
                <div className="package-header">
                  <h3 className="package-name">SAFADINHA SEM FILTRO</h3>
                  <div className="price-section">
                    <div className="old-price">R$74,70</div>
                    <div className="package-price">R$21,80</div>
                  </div>
                </div>
                <div className="package-content-list">
                  <p className="package-items">20 vídeos + 35 fotos</p>
                  <div className="package-description">
                    <p><strong>Conteúdo:</strong></p>
                    <p>Sexo</p>
                    <p>Boquete</p>
                    <p>Masturbação</p>
                    <p>Exibição</p>
                    <p>Anal</p>
                    <p>+5 Bônus</p>
                  </div>
                </div>
                <a 
                  href="https://pay.pagbrasilpagamento.com/checkout/5e52ad7e-c329-476c-830f-23ce9d8aebb1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-button"
                >
                  ADQUIRIR
                </a>
              </div>

              {/* Pacote 3 - Acesso Vitalício */}
              <div className="package-card premium">
                <div className="package-header">
                  <h3 className="package-name">ACESSO VITALÍCIO</h3>
                  <div className="price-section">
                    <div className="old-price">R$121,80</div>
                    <div className="package-price">R$33,60</div>
                  </div>
                </div>
                <div className="package-content-list">
                  <p className="package-items">+100 vídeos liberados</p>
                  <div className="package-description">
                    <p><strong>Conteúdo:</strong></p>
                    <p>Sexo</p>
                    <p>Boquete</p>
                    <p>Masturbação</p>
                    <p>Exibição</p>
                    <p>Anal</p>
                    <p>Menage</p>
                    <p>+10 Bônus</p>
                  </div>
                </div>
                <a 
                  href="https://pay.pagbrasilpagamento.com/checkout/755b70dd-3494-42cf-85f3-717aa70ab09d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-button"
                >
                  ADQUIRIR
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;