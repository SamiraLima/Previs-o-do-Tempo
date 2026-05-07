# 🌦️ Weather App

Aplicação de previsão do tempo desenvolvida com Angular consumindo a API da OpenWeatherMap.

---

## 📌 Sobre o projeto

O projeto permite pesquisar cidades e visualizar:

- 🌡️ Temperatura atual
- ☁️ Condição climática
- 🌡️ Sensação térmica
- 📅 Previsão semanal
- 📊 Destaques climáticos:
  - Vento
  - Umidade
  - Visibilidade
  - Pressão

O objetivo do projeto foi praticar:

- Consumo de API REST
- Componentização no Angular
- Comunicação entre componentes
- Data Binding
- Requisições HTTP
- Organização de layout
  
---

# 🚀 Tecnologias utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- OpenWeatherMap API

---

# 📷 Funcionalidades

## 🔎 Busca por cidade

O usuário pode pesquisar qualquer cidade para visualizar os dados climáticos em tempo real.

---

## 🌡️ Clima atual

Exibe:

- Temperatura
- Descrição do clima
- Sensação térmica
- País e cidade
- Ícone climático dinâmico

---

## 📅 Previsão semanal

Mostra cards com previsão dos próximos dias contendo:

- Dia da semana
- Ícone do clima
- Temperatura

---

## 📊 Highlights climáticos

Exibe informações adicionais:

- Umidade
- Vento
- Pressão atmosférica
- Visibilidade

---

# 🧠 Conceitos praticados

## ✔ Componentização

Separação da interface em componentes reutilizáveis:

- Sidebar
- Forecast
- Forecast Card
- Highlights
- Weather Layout

---

## ✔ Comunicação entre componentes

Uso de:

- `@Input()`
- `@Output()`
- `EventEmitter`

---

## ✔ Data Binding

Uso de:

- Property Binding
- Event Binding
- Two-way Binding com `[(ngModel)]`

---

## ✔ Consumo de API

Uso do `HttpClient` para realizar requisições HTTP.

---

## ✔ Observables

Uso de:

- `Observable`
- `.subscribe()`

para lidar com requisições assíncronas.

---

# ⚙️ Como executar o projeto

## 1️⃣ Clone o repositório

```bash
git clone SEU_LINK_AQUI
```

---

## 2️⃣ Instale as dependências

```bash
npm install
```

---

## 3️⃣ Execute o projeto

```bash
ng serve
```

---

## 4️⃣ Acesse no navegador

```txt
http://localhost:4200
```

---

# 🔑 API utilizada

OpenWeatherMap API

🔗 https://openweathermap.org/api

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes do Angular, como:

- Estruturação de componentes
- Serviços
- Injeção de dependência
- Ciclo de vida
- Reatividade
- Manipulação de dados de APIs externas

---

# 🎨 Melhorias futuras

- [ ] Responsividade completa
- [ ] Histórico de buscas
- [ ] Geolocalização
- [ ] Autocomplete de cidades

---

# 👩‍💻 Desenvolvido por

Samira Santos
