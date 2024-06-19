# USERS POSTS - API

Este proyecto es una API RESTful de Usuario y Posts desarrollado en equipo, con el propósito realizar una practica de rutas protegida con Json Web Token(JWT).

[![API de Users Posts](/public/users-posts-api.webp)](https://usersposts-ts.onrender.com)

## Integrantes del equipo
- Luis Steven Zarquiz
- Miguel Ticona
- Sergio Andres Jurado
- Anderson Javier Acibe
- Tonatiuj Sánchez


## Descripción

La API permite gestionar gestionar los recursos mediante los siguientes endpoints:

### Usuarios
- **GET /users**: Obtiene todos los usuarios.
- **POST /users**: Crea un nuevo usuario.
- **GET /users/:id**: Obtiene un usuario por ID.
- **PUT /users/:id**: Actualiza un usuario por ID.
- **DELETE /users/:id**: Elimina un usuario por ID.
- **POST /users/login**: Autenticar usuario.
- **GET /users/me**: Obtener el perfil del usuario autenticado
- **POST /users/:id/post**: Asignar posts favoritos al usuario  

### Posts
- **GET /posts**: Obtiene todos los posts.
- **POST /posts**: Crea un nuevo post.
- **GET /posts/:id**: Obtiene un post por ID.
- **PUT /posts/:id**: Actualiza un post por ID.
- **DELETE /posts/:id**: Elimina un post por ID.


## Tecnologías Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize

## Ejecución local

__Requisitos Previos__

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:** Ejecuta el siguiente comando en tu terminal para clonar este repositorio en tu máquina local:
```
git clone https://github.com/tonatiujsanchez/users-posts-backend.git
```

2. **Abre el proyecto:** Navega hasta la carpeta del proyecto clonado
```
cd users-posts-backend
```

3. **Instala la dependencias:** Ejecuta el siguiente comando para instalar los node_modules:
```
npm install
```

4. **Crea la base de datos:**

    - Inicia con postgresSQL ejecutando el siguiente comando
    ```
    psql -U postgres
    ```
    - Crea la base de datos usersposts_db
    ```
    CREATE DATABASE usersposts_db;
    ```

5. **Ingresa las variables de entorno:** Modifica en archivo .env.example a .env y agrega la siguiente variable de entorno con los valores correspondientes de la base de datos:
```
DATABASE_URL=postgres://postgres:<password>@127.0.0.1:5432/<nombre_db>
```

6. **Corre el proyecto:** Ejecuta el siguiente comando para correr el servidor de Node.js de modo desarrollo:
```
npm run dev
```

7. **Explora:** ¡Explora y diviértete creando, editando y eliminando usuarios!


## URL's

- [Ducumentación de la API en Postman](https://documenter.getpostman.com/view/3730299/2sA3XS9Kzv)
- [API desplegada en render.com](https://usersposts-ts.onrender.com)




## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir una __issue__ para discutir nuevas características o problemas, o enviar un __pull request__ con tus mejoras propuestas.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme en https://tsx-dev.netlify.app/#contacto.

¡Gracias por visitar este proyecto! Espero que disfrutes explorando mi trabajo. 🤗