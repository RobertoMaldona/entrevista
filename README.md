# Proyecto de Entrevista - Marketplace de Futurama

## Descripción
Este proyecto es una aplicación web desarrollada con React y TypeScript que muestra información de personajes de Futurama, simulando un marketplace. Utiliza una API pública para obtener los datos de los personajes y los presenta en una interfaz de usuario atractiva y responsive.

## Características
- Visualización de personajes de Futurama en formato de tarjetas
- Navegación entre páginas de inicio y marketplace
- Diseño responsivo utilizando Material-UI
- Implementación de routing con React Router
- Uso de TypeScript para tipado estático

## Tecnologías Utilizadas
- React 17
- TypeScript
- Material-UI
- React Router
- ESLint para linting de código

## Requisitos Previos
- Node.js (versión 20 o superior)
- npm (normalmente viene con Node.js)

## Instalación
Al descargar esta app, basta con correr `npm install`, en donde se instalarán todas las dependencias necesarias. Recomendamos fuertemente usar NVM y escoger node 20.

## Ejecución
Para iniciar la aplicación en modo de desarrollo: `npm run start`

La aplicación se abrirá automáticamente en tu navegador predeterminado. Si no, visita `http://localhost:3000`.

## Scripts Disponibles
- `npm run start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run test`: Ejecuta las pruebas
- `npm run lint`: Ejecuta el linter para verificar el código
- `npm run lint:fix`: Ejecuta el linter para corregir el código

## Estructura del Proyecto
Claro, aquí tienes una versión actualizada del README desde la sección de instalación, incluyendo una explicación más detallada de la estructura del proyecto:
markdownCopy## Instalación
1. Clona este repositorio:
git clone [URL_DEL_REPOSITORIO]
Copy2. Navega al directorio del proyecto:
cd [NOMBRE_DEL_DIRECTORIO]
Copy3. Instala las dependencias:
npm install
Copy
## Ejecución
Para iniciar la aplicación en modo de desarrollo:
npm start
CopyLa aplicación se abrirá automáticamente en tu navegador predeterminado. Si no, visita `http://localhost:3000`.

## Scripts Disponibles
- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run lint`: Ejecuta el linter para verificar el código

## Estructura del Proyecto
src/
├── components/
│   ├── home/
│   ├── market/
│   └── ui/
├── App.tsx
└── index.tsx

Los componentes están organizados por funcionalidad. La carpeta `ui` contiene componentes reutilizables, mientras que `home` y `market` contienen componentes específicos de cada página. Todos los scripts con `-container` se utilizan como el contenedor de la componente general, para poder inyectar datos, yá sean de una api o de otra fuente externa. 

## Navegación

La aplicación tiene dos páginas principales:

1. **Página de Inicio**: Contiene un botón para navegar al marketplace de Futurama.
2. **Marketplace de Futurama**: Muestra tarjetas con información de personajes de la serie.

Para acceder al marketplace, haz clic en el botón correspondiente en la página de inicio.

## Características del Marketplace

- Muestra personajes de Futurama en tarjetas.
- Datos cargados desde una API pública.
- Diseño responsive.



