# Revista CARAS - Newsletter & Landing Page 📰

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![PageSpeed](https://img.shields.io/badge/PageSpeed_Insights-100%2F100-brightgreen?style=for-the-badge)

¡Hola! 👋 Este proyecto consiste en el desarrollo y optimización de una landing page responsiva y una suite de componentes para la suscripción al newsletter de **Revista CARAS**. Fue diseñado con un enfoque estricto en rendimiento web, logrando una calificación de **100/100 en Google PageSpeed Insights**, y se complementa con una plantilla de correo HTML compatible con los principales clientes de email.

🔗 **Demo en vivo:** [Ver proyecto desplegado](https://caras-landing-page.netlify.app/)

## ✨ Características Principales

* **Rendimiento y SEO Técnico (100/100):** Optimización de imágenes a formato WebP, carga diferida (*lazy loading*), minificación de recursos y metadatos estructurados para mejorar los Core Web Vitals.
* **Arquitectura de Componentes Tipada:** Interfaz modular construida con React y TypeScript, manteniendo los estilos desacoplados en archivos dedicados por componente.
* **Pruebas Unitarias con Cobertura:** Validación del comportamiento de componentes y formularios mediante Jest y React Testing Library con reporte de cobertura (*code coverage*).

## 🛠️ Tecnologías Utilizadas

* **React & TypeScript:** Construcción de la interfaz modular y tipado estático.
* **Styled-Components:** Estilizado encapsulado por componente.
* **Jest & React Testing Library:** Pruebas unitarias, de renderizado y reportes de cobertura.
* **HTML5 (Tablas) & CSS Inline:** Maquetación de la plantilla de correo electrónico.
* **WebP & SEO Técnico:** Compresión de activos y optimización para buscadores.

## 📂 Estructura del Proyecto

```text
├── email-template/
│   └── newsletter.html         # Plantilla HTML con CSS en línea para correo
├── public/                     # Activos estáticos y metadatos SEO
├── src/
│   ├── components/             # Componentes con sus archivos de estilos separados
│   ├── __tests__/              # Pruebas unitarias con Jest y RTL
│   ├── App.tsx                 # Componente principal
│   └── index.tsx               # Punto de entrada
└── package.json
```

## 🚀 Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/ernestzent/revista-caras-landing.git](https://github.com/ernestzent/revista-caras-landing.git)
   cd revista-caras-landing
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Ejecuta las pruebas unitarias y el reporte de cobertura:**
   ```bash
   npm test -- --coverage
   ```

5. **Genera el build de producción:**
   ```bash
   npm run build
   ```

## 💡 Ejemplos de Uso

* **Suscripción al Newsletter:** Ingresa un correo electrónico en el formulario principal para probar la validación de formato en tiempo real y el estado de confirmación.
* **Previsualización del Email:** Abre directamente el archivo `email-template/newsletter.html` en tu navegador o copia su código en herramientas como Litmus o PutsMail para verificar el renderizado en clientes de correo.

## 📸 Capturas de Pantalla

| Vista Desktop | Auditoría PageSpeed (100/100) | Plantilla de Correo |
| :---: | :---: | :---: |
| ![Vista Desktop](./screenshots/caras-desktop.png) | ![PageSpeed 100](./screenshots/caras-pagespeed.png) | ![Email Template](./screenshots/caras-email.png) |
