
const patterns = () => {
   return {
      required: {
         regex: /^\s+$/,
         error: 'Campo requerido'
     },
     textSpaces: {
         regex: /^([a-zA-ZáéíóúAÉÍÓÚÑñ.]+\s)*[a-zA-ZáéíóúAÉÍÓÚÑñ.]+$/,
         error: "Sólo caracteres de la A a la Z."
     },
     extSpecialSpaces: {
         regex: /^([\w\d\sáéíóúñÁÉÍÓÚÑ.,#\-\&])+$/i,
         error: "Sólo letras, números y comodines (#.-_)"
     },
     text: {
         regex: /^[a-zA-ZÑáéíóúAÉÍÓÚÑñ.]*$/,
         error: "Sólo caracteres de la A a la Z sin espacios."
     },
     alphanumeric: {
         regex: /^[a-z0-9]+$/i,
         error: "Sólo letras o números sin espacios."
     },
     alphanumericSpaces: {
         regex: /^[\w ÑáéíóúAÉÍÓÚÑñ.]+$/,
         error: "Sólo letras y números."
     },
     numerical: {
         regex: /^[0-9]*$/,
         error: "Números."
     },
     numericDecimal: {
         regex : /^[0-9.]*$/,
         error : "Ingresar solo números decimales"
     }
   }
}

export default patterns;