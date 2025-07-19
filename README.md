# Avantsoft Test — Frontend

Aplicação **React + TypeScript** para consumir a API NestJS do processo seletivo **Avantsoft**.

---

## ✅ Funcionalidades

- **Formulário de criação de produto**  
  Campos: `name`, `price` e `sku`.
- **Lista de produtos**  
  Vem do endpoint real `GET /products` — já ordenado por `name`.
- **Exclusão de produto**  
  Botão `Delete` remove o produto via `DELETE /products/:id`.
- Cada item mostra a **primeira letra do alfabeto ausente** (`missingLetter`).

---

## 🚀 Como rodar local

```bash
# Instalar dependências
npm install

# Rodar em modo dev
npm run dev
```

A aplicação abre em [http://localhost:3000](http://localhost:3000)  
⚠️ A API precisa estar rodando em [http://localhost:3001](http://localhost:3001)

---

## 📌 Endpoints consumidos

| Método | URL             | Descrição               |
| ------ | --------------- | ----------------------- |
| POST   | `/products`     | Cria produto            |
| GET    | `/products`     | Lista produtos (ordenados) |
| DELETE | `/products/:id` | Remove produto          |

---

## 🗂️ Estrutura de pastas

```
src/
 ├── api.ts          # Configuração Axios (baseURL)
 ├── App.tsx         # Estrutura principal + rotas
 ├── components/
 │   ├── ProductForm/
 │   │   ├── index.tsx
 │   │   ├── index.css
 │   │   └── interface.ts
 │   ├── ProductList/
 │   │   ├── index.tsx
 │   │   └── index.css
 ├── routers/
 │   └── index.tsx   # Configuração de rotas (se usado)
```

---

## ⚙️ Tecnologias

- React
- TypeScript
- Axios
- ESLint & Prettier

---

## 📎 Backend

Este frontend consome a API do repositório 👉 **[Avantsoft Test — Backend](https://github.com/AdsonTanajura/avantsoft-test)**

---

## ✅ Passo a passo para rodar tudo

### 1️⃣ Clone e rode o backend

```bash
git clone https://github.com/AdsonTanajura/avantsoft-test.git
cd avantsoft-test
npm install
npm run start:dev
```

### 2️⃣ Clone e rode o frontend

```bash
git clone https://github.com/AdsonTanajura/avantsoft-frontend-test.git
cd avantsoft-frontend-test
npm install
npm run dev
```

### 3️⃣ Acesse

Abra [http://localhost:3000](http://localhost:3000) ➜ Crie, liste e remova produtos!

---

**Desenvolvido por Adson Tanajura**  
🚀 Processo seletivo Avantsoft — 2025
