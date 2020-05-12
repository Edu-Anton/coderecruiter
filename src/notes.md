BUGS
1. Cuando se carga la página de perfil, se llama al contenedor card__group que pertenece a la vista "dashboard.html" por lo que da null y se genera un error.
Solución posible: separar scripts 
2. No se puede transferir las variables desde js a archivos pug. Por eso continué usando los template strings. 
3. Si hago una petición fetch sobre un grupo de elementos, puedo reservar una variable sobre un elementos específicos y ya tenerlas almacenadas o debería ir viendo perfiles y haciendo repetidas llamadas sobre diferentes perfiles. ¿Cómo funciona el garbage collector? ¿Cuánto tiempo dura una variable? ¿Sería recomendable tener como variable global la llamada a la base de datos? 
4. Relacionado a la anterior, si yo creo una instancia, cómo queda en el sistema y cómo se almacena, ¿Cómo funciona esa lógica de si ya existe usar y si no recién crear? 