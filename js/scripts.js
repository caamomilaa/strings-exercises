// 1️⃣ Camila está revisando nombres en una lista. Si un nombre tiene más de 6 caracteres, debe marcarlo como "Nombre largo". Si tiene 6 o menos, lo marcará como "Nombre corto". Crea una función que reciba un nombre y determine su clasificación.

const getNameLength = name => {
  if (name.length > 6) {
    console.log(`Nombre largo.`);
  } else {
    console.log(`Nombre corto.`);
  }
};
getNameLength('hola');

// 2️⃣ Bego está escribiendo un email, pero quiere asegurarse de que el texto termina en un punto. Crea una función que reciba una frase y determine si acaba con "." ("Formato correcto") o no ("Falta el punto final").

const isTheTextFinishedInDot = emailText => {
  if (emailText.endsWith('.')) {
    console.log(`Formato correcto.`);
  } else {
    console.log(`Falta el punto final.`);
  }
};
isTheTextFinishedInDot('Hola, me llamo Camila. Tengo 23 años.');

// 3️⃣ Sabrina está verificando contraseñas. Si la contraseña tiene más de 8 caracteres y empieza con un número, será válida. Si no cumple estas condiciones, será inválida. Crea una función que reciba una contraseña y determine si es segura.

const isThePasswordSafe = password => {
  const numbers = '1234567890';
  if (password.length > 8 && numbers.includes(password.charAt(0))) {
    console.log(`Contrasña válida.`);
  } else {
    console.log(`Contrasña inválida.`);
  }
};
isThePasswordSafe('2camilbvcxa');

// 4️⃣ Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.

const isTheSentenceCorrect = sentence => {
  if (
    sentence.charAt(0) === sentence.charAt(0).toUpperCase() &&
    sentence.endsWith('.')
  ) {
    console.log(`Frase correcta.`);
  } else {
    console.log(`Frase incorrecta.`);
  }
};

isTheSentenceCorrect('Hola que tal.');
