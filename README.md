# AFONEWS
<h4> React app sobre noticias con gestión de usuarios. Se conecta a una API local en Node para guardar la información mediante una base de datos MYSQL. </h4>
<h5>Instrucciones</h5>
<p>1. Descomprimir archivo Back-end.rar</p>
<p>2. En la ruta .\Back-End\proyecto-grupo-main\Noticias ejecutar: node index.js </p>
<p>3. En la ruta .\noticias-app ejecutar: npm start</p>

<i>*La base de datos viene vacía por defecto.</i>
<i>A veces es necesario reiniciar el servicio MYSQL en Windows.</i>
<i>Si sigue teniendo problemas al conectar la API con la base de datos tenga en cuenta que
El fichero .env contiene las claves para conectarse a mediante MYSQL y se requiere que lo rellene el usuario.</i>
<ul>Ejemplo:
<li>MYSQL_HOST = localhost</li>
<li>MYSQL_USER = root</li>
<li>MYSQL_PASSWORD = 1234</li>
<li>MYSQL_DATABASE = noticias</li>
<li>SECRET=my_super_secure_xyz</li>
</ul>

