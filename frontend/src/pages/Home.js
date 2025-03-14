import React from 'react';
import { Container, Typography, Grid, Box, Button, Link, Divider, IconButton } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ApiIcon from '@mui/icons-material/Api';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import TimerIcon from '@mui/icons-material/Timer';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import '../styles/Home.css';

// Componente de animação do Selenium
const SeleniumAnimation = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#0D1012',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        border: '1px solid rgba(66, 226, 187, 0.3)',
      }}
    >
      {/* Ícone do navegador (Selenium) */}
      <Box
        sx={{
          width: '80px',
          height: '80px',
          backgroundColor: '#42E2BB',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#0D1012',
          fontFamily: '"Inter", Arial, sans-serif',
          animation: 'pulse 1.5s infinite alternate',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.1)' },
          },
        }}
      >
        Se
      </Box>

      {/* Cursor animado */}
      <Box
        sx={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
          animation: 'click 3s infinite ease-in-out',
          '@keyframes click': {
            '0%, 100%': { top: '50px', left: '50px' },
            '50%': { top: '100px', left: '150px' },
          },
        }}
      />

      {/* Barra de progresso */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '80%',
          height: '10px',
          backgroundColor: '#222',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '0%',
            backgroundColor: '#42E2BB',
            animation: 'progress 3s infinite ease-in-out',
            '@keyframes progress': {
              '0%': { width: '0%' },
              '100%': { width: '100%' },
            },
          }}
        />
      </Box>
      
      {/* Elementos decorativos */}
      <Box 
        sx={{
          position: 'absolute',
          top: -10,
          left: -10,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(66, 226, 187, 0.1)',
          zIndex: 1
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: -15,
          right: -15,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(66, 226, 187, 0.1)',
          zIndex: 1
        }}
      />
    </Box>
  );
};

// Componente de animação do Chatbot
const ChatbotAnimation = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#0D1012',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(66, 226, 187, 0.2)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Ícone do Chatbot */}
      <Box
        sx={{
          width: '50px',
          height: '50px',
          backgroundColor: '#42E2BB',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#0D1012',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 10px rgba(66, 226, 187, 0.7)',
          zIndex: 2,
        }}
      >
        🤖
      </Box>
      
      {/* Mensagem do usuário */}
      <Box
        sx={{
          backgroundColor: '#222',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '10px',
          maxWidth: '80%',
          margin: '10px 0 10px auto',
          opacity: 0,
          animation: 'fadeIn 1s forwards',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(10px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        Olá, como você funciona?
      </Box>
      
      {/* Animação digitando */}
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          margin: '10px 0',
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: '8px',
              height: '8px',
              backgroundColor: '#42E2BB',
              borderRadius: '50%',
              animation: 'blink 1.5s infinite ease-in-out',
              animationDelay: `${i * 0.2}s`,
              '@keyframes blink': {
                '0%, 100%': { opacity: 0.3 },
                '50%': { opacity: 1 },
              },
            }}
          />
        ))}
      </Box>
      
      {/* Resposta do Chatbot */}
      <Box
        sx={{
          backgroundColor: '#42E2BB',
          color: '#0D1012',
          padding: '8px 12px',
          borderRadius: '10px',
          maxWidth: '80%',
          margin: '10px 0',
          opacity: 0,
          animation: 'fadeIn 1s forwards 1.5s',
        }}
      >
        Eu sou um chatbot Python! Uso NLP para responder suas perguntas. 🤖
      </Box>
      
      {/* Elementos decorativos */}
      <Box 
        sx={{
          position: 'absolute',
          top: -10,
          right: -10,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(66, 226, 187, 0.1)',
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: -20,
          left: -20,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(66, 226, 187, 0.05)',
          zIndex: 0
        }}
      />
    </Box>
  );
};

// Componente de animação da API
const ApiAnimation = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#0D1012',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '300px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        {/* Ícone do usuário */}
        <Box
          sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0D1012',
            backgroundColor: '#42E2BB',
            boxShadow: '0 0 10px rgba(66, 226, 187, 0.7)',
            zIndex: 2,
          }}
        >
          👤
        </Box>

        {/* Linha animada */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '80px',
            width: '140px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Request */}
          <Box
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              position: 'absolute',
              top: '-3px',
              backgroundColor: '#42E2BB',
              animation: 'moveRequest 2s infinite linear',
              '@keyframes moveRequest': {
                '0%': { left: 0, opacity: 1 },
                '50%': { opacity: 1 },
                '100%': { left: '100%', opacity: 0 },
              },
            }}
          />

          {/* Response */}
          <Box
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              position: 'absolute',
              top: '-3px',
              backgroundColor: '#61DAFB',
              animation: 'moveResponse 2s infinite linear 1s',
              '@keyframes moveResponse': {
                '0%': { right: 0, opacity: 1 },
                '50%': { opacity: 1 },
                '100%': { right: '100%', opacity: 0 },
              },
            }}
          />
        </Box>

        {/* Ícone do servidor */}
        <Box
          sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0D1012',
            backgroundColor: '#42E2BB',
            boxShadow: '0 0 10px rgba(66, 226, 187, 0.7)',
            zIndex: 2,
          }}
        >
          🌐
        </Box>

        {/* Texto de status */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '-40px',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
            opacity: 0,
            animation: 'fadeInOut 2s infinite linear',
            '@keyframes fadeInOut': {
              '0%, 100%': { opacity: 0 },
              '50%': { opacity: 1 },
            },
          }}
        >
          API: 200 OK - Resposta em 0.2s
        </Box>
      </Box>

      {/* Elementos decorativos */}
      <Box 
        sx={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(66, 226, 187, 0.05)',
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(66, 226, 187, 0.05)',
          zIndex: 0
        }}
      />
      
      {/* Linhas de código decorativas */}
      <Box 
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 50,
          height: 4,
          borderRadius: 2,
          background: 'rgba(66, 226, 187, 0.2)',
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          top: 30,
          left: 20,
          width: 80,
          height: 4,
          borderRadius: 2,
          background: 'rgba(66, 226, 187, 0.15)',
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: 30,
          right: 20,
          width: 60,
          height: 4,
          borderRadius: 2,
          background: 'rgba(66, 226, 187, 0.2)',
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 40,
          height: 4,
          borderRadius: 2,
          background: 'rgba(66, 226, 187, 0.15)',
        }}
      />
    </Box>
  );
};

function Home() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Chatbots Inteligentes',
      description: 'Desenvolvemos chatbots avançados que entendem o contexto e fornecem respostas precisas. Integração com IA para atendimento 24/7.',
      icon: <SmartToyIcon sx={{ fontSize: 40, color: '#42E2BB' }} />,
      features: ['Processamento de linguagem natural', 'Integração com múltiplas plataformas', 'Análise de sentimento']
    },
    {
      title: 'Automações Personalizadas',
      description: 'Automatize processos repetitivos e aumente a produtividade da sua empresa com soluções personalizadas em Python.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#42E2BB' }} />,
      features: ['Automação de tarefas', 'Integração com APIs', 'Relatórios automáticos']
    },
    {
      title: 'APIs Robustas',
      description: 'Desenvolvimento de APIs escaláveis e seguras para integração de sistemas e serviços.',
      icon: <ApiIcon sx={{ fontSize: 40, color: '#42E2BB' }} />,
      features: ['Documentação completa', 'Alta performance', 'Segurança avançada']
    }
  ];

  const benefits = [
    {
      title: 'Código Limpo',
      description: 'Desenvolvimento seguindo as melhores práticas de programação Python',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#42E2BB' }} />
    },
    {
      title: 'Alta Performance',
      description: 'Soluções otimizadas para máxima eficiência e velocidade',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#42E2BB' }} />
    },
    {
      title: 'Segurança',
      description: 'Implementação de padrões de segurança modernos',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#42E2BB' }} />
    },
    {
      title: 'Suporte',
      description: 'Assistência técnica especializada',
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#42E2BB' }} />
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
          color: 'white',
          py: 15,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Transforme sua empresa com <span className="gradient-text">Python</span>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Soluções personalizadas em Python para automatizar processos, criar chatbots inteligentes e desenvolver APIs robustas.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  className="animated-button"
                  onClick={() => navigate('/services')}
                >
                  Conheça Nossos Serviços
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ 
                    color: 'white',
                    borderColor: '#42E2BB',
                    '&:hover': {
                      borderColor: '#42E2BB',
                      backgroundColor: 'rgba(66, 226, 187, 0.1)'
                    }
                  }}
                  onClick={() => navigate('/about')}
                >
                  Sobre Python
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 300,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  padding: '20px',
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  border: '2px solid #42E2BB',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: '70%',
                    height: '70%',
                    zIndex: 2
                  }}
                >
                  <path
                    d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38-18.49-.09-45.69 1.32-64.27 4.38-41.51 6.82-48.73 21.07-48.73 47.25V137c0 25.78 21.35 46.48 47.41 46.48h20c3.75 0 6.75 3 6.76 6.75v47.36c0 3.45-2.76 6.34-6.21 6.35h-39.54c-27.32 0-48.63 23.7-48.63 51.17v15.57c0 26.51 26.55 42.05 48.63 49.32 26.48 8.68 51.92 10.25 84.6 0 21.73-6.75 47.41-20.3 47.41-49.32v-38.3c0-25.63-21.34-46.47-47.41-46.47h-19.84c-3.72 0-6.75-3.03-6.75-6.75v-47.36c0-3.72 3.03-6.75 6.75-6.75h39.38c27.17 0 48.8-23.4 48.8-50.99V83.63c0-26.2-7.21-40.45-48.73-47.25z"
                    fill="#42E2BB"
                  />
                  <path
                    d="M153.42 188.21h20c3.75 0 6.75 3 6.76 6.75v47.36c0 3.45-2.76 6.34-6.21 6.35h-39.54c-27.32 0-48.63 23.7-48.63 51.17v15.57c0 26.51 26.55 42.05 48.63 49.32 26.48 8.68 51.92 10.25 84.6 0 21.73-6.75 41-20.3 41-49.32v-38.3c0-25.63-21.34-46.47-47.41-46.47"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M254.84 32c-18.49-.09-45.69 1.32-64.27 4.38-41.51 6.82-48.73 21.07-48.73 47.25V137c0 25.78 21.35 46.48 47.41 46.48"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="180"
                    cy="102"
                    r="15"
                    fill="#141414"
                  />
                  <circle
                    cx="306"
                    cy="392"
                    r="15"
                    fill="#141414"
                  />
                </svg>
                
                {/* Elementos decorativos */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(66, 226, 187, 0.1)',
                    zIndex: 1
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'rgba(66, 226, 187, 0.1)',
                    zIndex: 1
                  }}
                />
                
                {/* Linhas de código animadas */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 50,
                    left: 40,
                    width: 60,
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.1)',
                    animation: 'pulse 2s infinite'
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 70,
                    left: 40,
                    width: 120,
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.15)',
                    animation: 'pulse 2.5s infinite'
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 90,
                    left: 40,
                    width: 90,
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.1)',
                    animation: 'pulse 3s infinite'
                  }}
                />
                
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 90,
                    right: 40,
                    width: 80,
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.12)',
                    animation: 'pulse 2.2s infinite'
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 70,
                    right: 40,
                    width: 100,
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.1)',
                    animation: 'pulse 2.7s infinite'
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 50,
                    right: 40,
                    width: 60,
                    height: 6,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.15)',
                    animation: 'pulse 3.2s infinite'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Nossos Serviços
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item key={service.title} xs={12} sm={6} md={4}>
              <div className="modern-card" style={{ borderColor: '#42E2BB' }}>
                <div className="icon-container">
                  {service.icon}
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button 
                  className="card-btn"
                  style={{ backgroundColor: '#42E2BB' }}
                  onClick={() => navigate('/services')}
                >
                  Saiba mais
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: '#141414', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, color: 'white' }}>
            Por que escolher Python?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {benefits.map((benefit) => (
              <Grid item key={benefit.title} xs={12} sm={6} md={3}>
                <div className="modern-card benefit-card" style={{ borderColor: '#42E2BB' }}>
                  <div className="icon-container">
                    {benefit.icon}
                  </div>
                  <h2>{benefit.title}</h2>
                  <p>{benefit.description}</p>
                  <Box sx={{ height: '20px' }} /> {/* Espaçador */}
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Separador decorativo */}
      <Box 
        sx={{ 
          height: "5px", 
          background: "linear-gradient(90deg, rgba(66,226,187,0) 0%, rgba(66,226,187,1) 50%, rgba(66,226,187,0) 100%)",
          width: "80%",
          margin: "0 auto"
        }} 
      />

      {/* Demo Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #0D0D0D 0%, #1D2426 100%)',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Elementos decorativos de fundo */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66, 226, 187, 0.1) 0%, rgba(66, 226, 187, 0) 60%)',
            top: '10%',
            left: '-5%',
            opacity: 0.6,
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66, 226, 187, 0.1) 0%, rgba(66, 226, 187, 0) 60%)',
            bottom: '5%',
            right: '5%',
            opacity: 0.4,
            zIndex: 0
          }}
        />
        
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                color: 'white',
                position: 'relative',
                display: 'inline-block',
                fontWeight: 700,
              }}
            >
              <span>Demo</span>
              <Box
                sx={{
                  position: 'absolute',
                  height: '8px',
                  width: '40%',
                  background: 'linear-gradient(90deg, rgba(66,226,187,0) 0%, rgba(66,226,187,1) 50%, rgba(66,226,187,0) 100%)',
                  bottom: '-15px',
                  left: '30%',
                  borderRadius: '4px'
                }}
              />
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)', 
                mt: 3,
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Experimente nossas soluções em funcionamento e descubra como podemos transformar sua empresa
            </Typography>
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            {/* Card de Automação */}
            <Grid item xs={12} md={4}>
              <div className="modern-card demo-card">
                <div className="card-icon-badge">
                  <CodeOffIcon sx={{ fontSize: 28 }} />
                </div>
                <div className="card-content">
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                    Automação Web
                  </Typography>
                  <div className="animation-container">
                    <Box 
                      sx={{ 
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <SeleniumAnimation />
                    </Box>
                  </div>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                    Nossas automações web utilizam Selenium e Python para extrair dados, preencher formulários e realizar operações complexas automaticamente.
                  </Typography>
                  <div className="tech-tags">
                    <span className="tech-tag">
                      <CodeOffIcon sx={{ fontSize: 16, color: '#42E2BB' }} />
                      Selenium
                    </span>
                    <span className="tech-tag">
                      <TimerIcon sx={{ fontSize: 16, color: '#42E2BB' }} />
                      100x mais rápido
                    </span>
                  </div>
                  <Button 
                    className="demo-btn"
                    onClick={() => navigate('/services')}
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Grid>
            
            {/* Card de APIs */}
            <Grid item xs={12} md={4}>
              <div className="modern-card demo-card">
                <div className="card-icon-badge">
                  <ApiIcon sx={{ fontSize: 28 }} />
                </div>
                <div className="card-content">
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                    APIs Robustas
                  </Typography>
                  <div className="animation-container">
                    <Box 
                      sx={{ 
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <ApiAnimation />
                    </Box>
                  </div>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                    Desenvolvemos APIs RESTful escaláveis com FastAPI e Flask, garantindo alta performance e documentação automática com Swagger.
                  </Typography>
                  <div className="tech-tags">
                    <span className="tech-tag">
                      <ApiIcon sx={{ fontSize: 16, color: '#42E2BB' }} />
                      FastAPI
                    </span>
                    <span className="tech-tag">
                      <StorageIcon sx={{ fontSize: 16, color: '#42E2BB' }} />
                      Swagger/OpenAPI
                    </span>
                  </div>
                  <Button 
                    className="demo-btn"
                    onClick={() => navigate('/services')}
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Grid>
            
            {/* Card de Chatbots */}
            <Grid item xs={12} md={4}>
              <div className="modern-card demo-card">
                <div className="card-icon-badge">
                  <SmartToyIcon sx={{ fontSize: 28 }} />
                </div>
                <div className="card-content">
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                    Chatbots Inteligentes
                  </Typography>
                  <div className="animation-container">
                    <Box 
                      sx={{ 
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <ChatbotAnimation />
                    </Box>
                  </div>
                  <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                    Nossos chatbots usam processamento de linguagem natural (NLP) e modelos de machine learning para criar experiências de conversação naturais e eficientes.
                  </Typography>
                  <div className="tech-tags">
                    <span className="tech-tag">
                      <SmartToyIcon sx={{ fontSize: 16, color: '#42E2BB' }} />
                      NLP/BERT
                    </span>
                    <span className="tech-tag">
                      <TerminalIcon sx={{ fontSize: 16, color: '#42E2BB' }} />
                      Integração multi-canal
                    </span>
                  </div>
                  <Button 
                    className="demo-btn"
                    onClick={() => navigate('/services')}
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <div 
            className="cta-container"
            style={{ 
              borderColor: '#42E2BB',
              backgroundColor: '#141414'
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
              Pronto para transformar sua empresa?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, color: 'white' }}>
              Escolha o plano ideal para sua empresa e comece a transformar seus processos hoje mesmo.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: '#42E2BB', color: 'black', '&:hover': { backgroundColor: '#35b395' } }}
              onClick={() => navigate('/plans')}
            >
              Ver Planos e Preços
            </Button>
          </div>
        </Container>
      </Box>
      
      {/* Footer Section */}
      <Box 
        component="footer" 
        sx={{ 
          bgcolor: '#0d1012',
          pt: 6,
          pb: 3,
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Elementos decorativos do footer */}
        <Box
          sx={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66, 226, 187, 0.05) 0%, rgba(66, 226, 187, 0) 70%)',
            top: '-200px',
            right: '-100px',
            opacity: 0.8,
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66, 226, 187, 0.05) 0%, rgba(66, 226, 187, 0) 70%)',
            bottom: '-150px',
            left: '-100px',
            opacity: 0.6,
            zIndex: 0
          }}
        />
        
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {/* Logo e Descrição */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '2rem',
                    height: '2rem',
                    mr: 1,
                  }}
                >
                  <TerminalIcon
                    sx={{
                      position: 'absolute',
                      color: '#42E2BB',
                      fontSize: '2rem',
                    }}
                  />
                  <DeveloperModeIcon
                    sx={{
                      position: 'absolute',
                      color: '#42E2BB',
                      fontSize: '1.2rem',
                      right: '-5px',
                      bottom: '-5px',
                      opacity: 0.8,
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                  }}
                >
                  Compile
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
                Soluções de desenvolvimento e automação para transformar sua empresa com tecnologias modernas e eficientes.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                <IconButton 
                  aria-label="Instagram" 
                  component="a" 
                  href="https://instagram.com/" 
                  target="_blank"
                  sx={{ 
                    color: 'white', 
                    '&:hover': { 
                      color: '#42E2BB',
                      backgroundColor: 'rgba(66, 226, 187, 0.1)'
                    } 
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  aria-label="WhatsApp" 
                  component="a" 
                  href="https://wa.me/5500000000000" 
                  target="_blank"
                  sx={{ 
                    color: 'white', 
                    '&:hover': { 
                      color: '#42E2BB',
                      backgroundColor: 'rgba(66, 226, 187, 0.1)'
                    } 
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton 
                  aria-label="Twitter" 
                  component="a" 
                  href="https://twitter.com/" 
                  target="_blank"
                  sx={{ 
                    color: 'white', 
                    '&:hover': { 
                      color: '#42E2BB',
                      backgroundColor: 'rgba(66, 226, 187, 0.1)'
                    } 
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  aria-label="Facebook" 
                  component="a" 
                  href="https://facebook.com/" 
                  target="_blank"
                  sx={{ 
                    color: 'white', 
                    '&:hover': { 
                      color: '#42E2BB',
                      backgroundColor: 'rgba(66, 226, 187, 0.1)'
                    } 
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Grid>
            
            {/* Links Úteis */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ 
                mb: 2, 
                fontSize: '1.1rem', 
                position: 'relative', 
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: '#42E2BB',
                  borderRadius: 1
                }
              }}>
                Links Úteis
              </Typography>
              <Box component="ul" sx={{ 
                listStyle: 'none', 
                p: 0, 
                m: 0,
                '& li': {
                  mb: 1
                }
              }}>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/services" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/about" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Tecnologias
                  </Link>
                </li>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/plans" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Planos
                  </Link>
                </li>
              </Box>
            </Grid>
            
            {/* Nossos Serviços */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ 
                mb: 2, 
                fontSize: '1.1rem',
                position: 'relative', 
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: '#42E2BB',
                  borderRadius: 1
                }
              }}>
                Serviços
              </Typography>
              <Box component="ul" sx={{ 
                listStyle: 'none', 
                p: 0, 
                m: 0,
                '& li': {
                  mb: 1
                }
              }}>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/services#automacao" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Automação Web
                  </Link>
                </li>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/services#apis" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    APIs Robustas
                  </Link>
                </li>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/services#chatbots" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Chatbots Inteligentes
                  </Link>
                </li>
                <li>
                  <Link 
                    component={RouterLink} 
                    to="/services#consultoria" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none',
                      '&:hover': { color: '#42E2BB' }
                    }}
                  >
                    Consultoria
                  </Link>
                </li>
              </Box>
            </Grid>
            
            {/* Contato */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ 
                mb: 2, 
                fontSize: '1.1rem',
                position: 'relative', 
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: '#42E2BB',
                  borderRadius: 1
                }
              }}>
                Contato
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: '#42E2BB', mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Rua Ministro João Alberto, 49, Araés-MT
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ color: '#42E2BB', mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  (65) 9601-9564
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ color: '#42E2BB', mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  contato@compile.com.br
                </Typography>
              </Box>
              <Box 
                component="form" 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  p: '4px',
                  mt: 2
                }}
              >
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  style={{ 
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    padding: '8px 12px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <Button 
                  size="small"
                  sx={{ 
                    backgroundColor: '#42E2BB',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: '#35b395'
                    }
                  }}
                >
                  Assinar
                </Button>
              </Box>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'rgba(255, 255, 255, 0.5)' }}>
                Inscreva-se para receber novidades e ofertas especiais
              </Typography>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
          {/* Linha de copyright */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: { xs: 'center', sm: 'left' } }}>
              © {new Date().getFullYear()} Compile. Todos os direitos reservados.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
              <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#42E2BB' } }}>
                Termos de Uso
              </Link>
              <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#42E2BB' } }}>
                Política de Privacidade
              </Link>
            </Box>
          </Box>
          
          {/* Créditos do Designer */}
          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'rgba(255, 255, 255, 0.4)' }}>
            Site criado por Compile
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 