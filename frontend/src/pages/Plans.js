import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const plans = [
  {
    name: 'Bronze',
    price: 49.99,
    features: [
      'Chatbot básico',
      '1 automação simples',
      '1 API básica',
      'Suporte por email'
    ]
  },
  {
    name: 'Prata',
    price: 79.99,
    features: [
      'Chatbot avançado',
      '3 automações',
      '3 APIs',
      'Suporte prioritário',
      'Personalização básica'
    ]
  },
  {
    name: 'Ouro',
    price: 149.99,
    features: [
      'Chatbot personalizado',
      'Automações ilimitadas',
      'APIs ilimitadas',
      'Suporte 24/7',
      'Personalização completa',
      'Treinamento exclusivo'
    ]
  }
];

function Plans() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Nossos Planos
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item key={plan.name} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="h2">
                  {plan.name}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  R$ {plan.price.toFixed(2)}/mês
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {plan.features.map((feature) => (
                    <Typography key={feature} variant="body1" sx={{ mb: 1 }}>
                      ✓ {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Assinar Agora
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Plans; 