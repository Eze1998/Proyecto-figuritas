Servidor corriendo en puerto localhost:3000
A continuacion, las instrucciones para levantar el Backend:

1er paso:

Clonar el Repositorio ejecutando el comando
  git clone https://github.com/Eze1998/Proyecto-figuritas

2do paso:

Realizar el siguiente comando en la raiz de "/server" y de "/front" para que se instalen todas las dependencias (Express js, Node js, React js, Sequelize Cli, etc)
  npm install

3er paso:

Nos paramos en la ruta del server, y ejecutamos el comando (depende del equipo) para correr el servidor falso
  nodemon app.js

4to paso:

Configurar nuestro archivo de servidor (Server/config/config.json) con los datos de nuestra base de datos.
Configurar un archivo .env con los datos de la base de datos

5to paso:

Ejecutar el siguiente comando para que se cree nuestra base de datos
  sequelize-cli db:create
Ejecutar el siguiente comando para que se realizen las migraciones y los modelos
  sequelize-cli db:migrate
Ejecutar el siguente comando para que se realizen los seeders para que mande la información.
  npx sequelize-cli db:seed:all
6to paso:

Realizar el siguiente comando en la raiz de "/front" y probar las funcionalidades del proyecto
  npm start



en backend/config/config.json, ingresar las credenciales correspondientes a la base de datos local
2. ejecutar en la terminal el comando "npm install"
3. una vez finalizado el 2, ejecutar en la terminal el comando "npm start"

