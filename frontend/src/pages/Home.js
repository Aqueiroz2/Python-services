import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ApiIcon from '@mui/icons-material/Api';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Home() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Chatbots Inteligentes',
      description: 'Desenvolvemos chatbots avançados que entendem o contexto e fornecem respostas precisas. Integração com IA para atendimento 24/7.',
      icon: <SmartToyIcon sx={{ fontSize: 40, color: 'var(--primary-color)' }} />,
      features: ['Processamento de linguagem natural', 'Integração com múltiplas plataformas', 'Análise de sentimento']
    },
    {
      title: 'Automações Personalizadas',
      description: 'Automatize processos repetitivos e aumente a produtividade da sua empresa com soluções personalizadas em Python.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'var(--primary-color)' }} />,
      features: ['Automação de tarefas', 'Integração com APIs', 'Relatórios automáticos']
    },
    {
      title: 'APIs Robustas',
      description: 'Desenvolvimento de APIs escaláveis e seguras para integração de sistemas e serviços.',
      icon: <ApiIcon sx={{ fontSize: 40, color: 'var(--primary-color)' }} />,
      features: ['Documentação completa', 'Alta performance', 'Segurança avançada']
    }
  ];

  const benefits = [
    {
      title: 'Código Limpo',
      description: 'Desenvolvimento seguindo as melhores práticas de programação Python',
      icon: <CodeIcon sx={{ fontSize: 30, color: 'var(--primary-color)' }} />
    },
    {
      title: 'Alta Performance',
      description: 'Soluções otimizadas para máxima eficiência e velocidade',
      icon: <TrendingUpIcon sx={{ fontSize: 30, color: 'var(--primary-color)' }} />
    },
    {
      title: 'Segurança',
      description: 'Implementação de padrões de segurança modernos',
      icon: <SecurityIcon sx={{ fontSize: 30, color: 'var(--primary-color)' }} />
    },
    {
      title: 'Suporte',
      description: 'Assistência técnica especializada',
      icon: <SupportAgentIcon sx={{ fontSize: 30, color: 'var(--primary-color)' }} />
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
                    borderColor: 'var(--primary-color)',
                    '&:hover': {
                      borderColor: 'var(--primary-light)',
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
                component="img"
                src="/python-hero.svg"
                alt="Python Development"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  display: { xs: 'none', md: 'block' },
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Nossos Serviços
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.title} xs={12} md={4}>
              <Card className="feature-card">
                <CardContent>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom align="center">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {service.features.map((feature) => (
                      <Typography key={feature} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--primary-color)', marginRight: '8px' }}>•</span>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: 'var(--background-light)', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Por que escolher Python?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit) => (
              <Grid item key={benefit.title} xs={12} sm={6} md={3}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  {benefit.icon}
                  <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Paper 
            className="highlight-box"
            sx={{ 
              textAlign: 'center',
              p: 6
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Pronto para transformar sua empresa?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
              Escolha o plano ideal para sua empresa e comece a transformar seus processos hoje mesmo.
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="animated-button"
              onClick={() => navigate('/plans')}
            >
              Ver Planos e Preços
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 