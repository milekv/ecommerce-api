# E-commerce API

Jest to RESTful API zbudowane w oparciu o Node.js i Express dla platformy e-commerce. API umożliwia zarządzanie użytkownikami i produktami.

## Funkcje

- Rejestracja i logowanie użytkowników
- Zarządzanie produktami (dodawanie, edytowanie, usuwanie, przeglądanie)
- Integracja z bazą danych MongoDB
- Uwierzytelnianie użytkowników za pomocą tokenów JWT

# Endpointy
- Użytkownicy
   - POST /api/users/register - Rejestracja nowego użytkownika
   - POST /api/users/login - Logowanie użytkownika i otrzymanie tokena JWT
- Produkty
   - GET /api/products - Pobierz listę wszystkich produktów
   - POST /api/products - Dodaj nowy produkt
   - PUT /api/products/:id - Zaktualizuj produkt po ID
   - DELETE /api/products/:id - Usuń produkt po ID
# Technologie
- Node.js
- Express.js
- MongoDB (z Mongoose)
- JWT (JSON Web Tokens) do uwierzytelniania
- Middleware CORS
  //dotenv do zarządzania zmiennymi środowiskowymi

## Instalacja
   git clone https://github.com/milekv/ecommerce-api.git
