from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext

app = FastAPI(title="Python Services API")

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuração de segurança
SECRET_KEY = "sua_chave_secreta_aqui"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Modelos


class User(BaseModel):
    email: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class Plan(BaseModel):
    name: str
    price: float
    features: List[str]


# Dados mockados (em produção, use um banco de dados)
PLANS = [
    {
        "name": "Bronze",
        "price": 49.99,
        "features": [
            "Chatbot básico",
            "1 automação simples",
            "1 API básica",
            "Suporte por email"
        ]
    },
    {
        "name": "Prata",
        "price": 79.99,
        "features": [
            "Chatbot avançado",
            "3 automações",
            "3 APIs",
            "Suporte prioritário",
            "Personalização básica"
        ]
    },
    {
        "name": "Ouro",
        "price": 149.99,
        "features": [
            "Chatbot personalizado",
            "Automações ilimitadas",
            "APIs ilimitadas",
            "Suporte 24/7",
            "Personalização completa",
            "Treinamento exclusivo"
        ]
    }
]

# Rotas


@app.get("/")
async def root():
    return {"message": "Bem-vindo à API de Serviços Python"}


@app.get("/plans")
async def get_plans():
    return PLANS


@app.post("/login")
async def login(user: User):
    # Em produção, verifique as credenciais no banco de dados
    if user.email == "teste@exemplo.com" and user.password == "senha123":
        access_token = create_access_token(data={"sub": user.email})
        return {"access_token": access_token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Credenciais inválidas")


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
