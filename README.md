# Python Services Marketplace

Uma plataforma para venda de serviços de aplicações Python, incluindo chatbots, automações e APIs.

## Estrutura do Projeto

```
python-services-marketplace/
├── backend/           # API FastAPI
├── frontend/         # Aplicação React
└── requirements.txt  # Dependências Python
```

## Requisitos

- Python 3.8+
- Node.js 16+
- npm ou yarn

## Instalação

### Backend

1. Crie um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

3. Execute o servidor:
```bash
cd backend
uvicorn main:app --reload
```

### Frontend

1. Instale as dependências:
```bash
cd frontend
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm start
```

## Funcionalidades

- Sistema de autenticação
- Catálogo de serviços Python
- Planos de assinatura (Bronze, Prata e Ouro)
- Área do cliente
- Painel administrativo 