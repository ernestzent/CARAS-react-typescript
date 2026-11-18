# Revista CARAS - Newsletter & Landing Page 📰

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![PageSpeed](https://img.shields.io/badge/PageSpeed_Insights-100%2F100-brightgreen?style=for-the-badge)

¡Hola! 👋 Este proyecto consiste en el desarrollo y optimización de una landing page responsiva y una suite de componentes para la suscripción al newsletter de **Revista CARAS**. Fue diseñado con un enfoque estricto en rendimiento web, logrando una calificación de **100/100 en Google PageSpeed Insights**.

🔗 **Demo en vivo:** [Ver proyecto desplegado](https://caras-landing-page.netlify.app/)

## ✨ Características Principales

* **Rendimiento y SEO Técnico (100/100):** Optimización de imágenes a formato WebP, carga diferida (*lazy loading*), minificación de recursos y metadatos estructurados para mejorar los Core Web Vitals.
* **Arquitectura de Componentes Tipada:** Interfaz modular construida con React y TypeScript, manteniendo los estilos desacoplados en archivos dedicados por componente.
* **Pruebas Unitarias con Cobertura:** Validación del comportamiento de componentes y formularios mediante Jest y React Testing Library con reporte de cobertura (*code coverage*).

## 🛠️ Tecnologías Utilizadas

* **React & TypeScript:** Construcción de la interfaz modular y tipado estático.
* **Styled-Components:** Estilizado encapsulado por componente.
* **Jest & React Testing Library:** Pruebas unitarias, de renderizado y reportes de cobertura.
* **HTML5:** Para la estructura y semántica del contenido.
* **WebP & SEO Técnico:** Compresión de activos y optimización para buscadores.

## 📂 Estructura del Proyecto

```text
CARAS-react-typescript/
├── public/
│   ├── index.html              # Documento HTML base y metadatos SEO
│   ├── manifest.json           # Configuración de manifiesto web
│   └── robots.txt              # Directivas de rastreo para motores de búsqueda
├── src/
│   ├── __tests__/              # Suites de pruebas unitarias (Jest + RTL)
│   ├── assets/
│   │   └── img/                # Imágenes
│   ├── components/             # Componentes reutilizables de la interfaz
│   ├── styles/                 # Estilos globales y configuración de Styled-Components
│   ├── types/                  # Interfaces y tipos de TypeScript
│   ├── utils/                  # Funciones auxiliares y validaciones
│   ├── App.tsx                 # Componente raíz de la aplicación
│   ├── index.tsx               # Punto de entrada de React
│   └── setupTests.ts           # Configuración del entorno de pruebas
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json               # Configuración del compilador de TypeScript
```

## 🚀 Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ernestzent/CARAS-react-typescript.git
   cd CARAS-react-typescript
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

4. **Ejecuta las pruebas unitarias y genera el reporte de cobertura:**
   ```bash
   npm test -- --coverage
   ```

5. **Genera el build optimizado para producción:**
   ```bash
   npm run build
   ```
   
## 💡 Ejemplos de Uso

* **Formulario de Suscripción:** Ingresa un correo electrónico en el formulario de la landing page para probar la validación en tiempo real (gestionada en `src/utils/`) y los mensajes de retroalimentación al usuario.
* **Verificación de Cobertura de Pruebas:** Al ejecutar `npm test -- --coverage`, podrás inspeccionar en consola el porcentaje de cobertura de líneas, funciones y ramas de los archivos ubicados en `src/__tests__/`.

## 🤝 Contribuciones

Las contribuciones, reportes de errores y sugerencias de mejora son siempre bienvenidas:
1. Haz un *Fork* del repositorio.
2. Crea una rama para tu mejora (`git checkout -b feature/mejora-seo`).
3. Haz *Commit* de tus cambios (`git commit -m 'Agrega mejora en metadatos'`).
4. Sube tu rama (`git push origin feature/mejora-seo`).
5. Abre un *Pull Request* asegurándote de que todas las pruebas en `src/__tests__/` pasen correctamente.
