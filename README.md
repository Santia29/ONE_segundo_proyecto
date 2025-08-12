Amigo Secreto - Funcionalidades

Funcionalidades implementadas:
Agregar nombres a la lista:
El usuario ingresa el nombre de un amigo en un campo de texto y presiona el botón “Añadir”.
El nombre se agrega a un array interno y se muestra en una lista visible en la página.

Validación de entrada:
No se permite ingresar nombres vacíos ni nombres compuestos solo por espacios.
No se permiten números dentro del nombre.
La validación se realiza de forma básica sin uso de expresiones regulares ni métodos avanzados.

Visualización dinámica de la lista:

La lista de amigos ingresados se actualiza y muestra debajo del campo de entrada.
Se usa innerHTML con un bucle for básico para actualizar la lista en el DOM.
Sorteo aleatorio del amigo secreto:

Al presionar el botón “Sortear amigo”, se selecciona un nombre aleatorio de la lista de amigos.
El resultado se muestra en pantalla, dentro de un elemento visible.

Manejo básico de interfaz:
Se limpia el campo de texto después de agregar un amigo.
Se muestran alertas para informar al usuario sobre errores o pasos necesarios (campo vacío, sin nombres agregados para sorteo, etc.).
