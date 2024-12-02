HEAD
Práctica REST PWA: Lista y Detalle de Imágenes
Este proyecto es una aplicación Angular convertida en PWA que consume la API pública de Picsum para mostrar una lista de imágenes y los detalles de una imagen seleccionada.

Capturas de Pantalla
Lista de Imágenes
La pantalla principal muestra una galería con imágenes obtenidas de la API.

Vista de la lista de imágenes en la aplicación.
Detalle Individual
Muestra una imagen ampliada con información adicional, como su ID y dimensiones.

Vista del detalle individual de una imagen.
Descripción del Service Worker
El Service Worker permite que la aplicación funcione sin conexión y mejora su rendimiento al implementar estrategias de cacheo.

Características:
Cacheo de Assets Estáticos: Archivos como index.html, CSS, JS.
Cacheo de Datos Dinámicos: Imágenes y respuestas de la API https://picsum.photos.
Modo Offline: Sirve datos desde el cache cuando no hay conexión.
Estrategias de Cacheo Implementadas:
Configuración en el archivo ngsw-config.json:

json
Copiar código
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "images",
      "installMode": "lazy",
      "resources": {
        "urls": [
          "https://picsum.photos/**"
        ]
      }
    }
  ]
}
Pasos para Instalar como PWA
En Dispositivos Móviles
Abre la aplicación en un navegador compatible como Chrome.
Aparecerá una opción "Añadir a pantalla de inicio".
Pulsa la opción y confirma la instalación.
La aplicación estará disponible como una app nativa.
En Computadoras
Abre la aplicación en Chrome o Edge.
Haz clic en el icono de instalación (+) en la barra de direcciones.
Confirma la instalación.
La aplicación aparecerá en el menú de aplicaciones.
Tecnologías Usadas
Angular: Framework para construir la aplicación.
Angular PWA: Convertir la aplicación en una PWA.
Picsum API: Fuente de las imágenes dinámicas.
HTML/CSS: Diseño básico de la interfaz.
Cómo Ejecutar el Proyecto
Clona este repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/tu-repositorio.git
Instala las dependencias:

bash
Copiar código
npm install
Corre el servidor de desarrollo:

bash
Copiar código
ng serve
Abre la aplicación en tu navegador:

URL local: http://localhost:4200
Construir como PWA:

bash
Copiar código
ng build --prod
Probar el modo offline:

Asegúrate de que el servidor esté configurado para servir archivos estáticos (por ejemplo, usando un servidor HTTP como http-server).
Licencia
Este proyecto está licenciado bajo la MIT License. Consulta el archivo LICENSE para más informacion

26403d2667b6ed8a439264a2885db2ff70b7749e
