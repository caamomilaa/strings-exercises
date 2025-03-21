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

// 5️⃣ Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.

const isTheMessageImportant = (firstWord, secondWord) => {
  if (firstWord.length === secondWord.length) {
    console.log('Es una pista.');
  } else {
    console.log('Mejor ignóralo.');
  }
};
isTheMessageImportant('hola', 'hola');

// 6️⃣ Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.

const isAValidFormat = phoneNumber => {
  if (phoneNumber.length === 9) {
    console.log('Es un formato válido.');
  } else {
    console.log('No es un formato válido.');
  }
};
isAValidFormat('123456789');

// 7️⃣ Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.

const getDomainClasification = domain => {
  if (domain.endsWith('.com')) {
    console.log('Dominio para negocios.');
  } else if (domain.endsWith('.org')) {
    console.log('Dominio para organizaciones.');
  } else {
    console.log('Dominio no válido.');
  }
};
getDomainClasification('camomila.org');

// 8️⃣ Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.

const itContainsLetterZ = word => {
  if (word.toLowerCase().includes('z')) {
    console.log('Es una palabra especial.');
  } else {
    console.log('es una palabra común.');
  }
};
itContainsLetterZ('Zarzuela');

// 9️⃣ Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.

const isAnUrgentFile = message => {
  if (message.includes('urgente')) {
    console.log('ES IMPORTANTE');
  } else {
    console.log('Déjalo para mañana.');
  }
};

isAnUrgentFile('Este mensaje no es urgente.');

// 🔟 Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.

const itsTheRightCode = code => {
  if (code % 2 === 0 && code.length === 4) {
    console.log('Es la combinación de la caja fuerte.');
  } else {
    console.log('Código erróneo.');
  }
};
itsTheRightCode('1234');

// 1️⃣1️⃣ Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.

const itStartsWithVowel = guestName => {
  const vowels = 'AEIOU';

  if (vowels.includes(guestName.charAt(0))) {
    console.log('Special guest, special table.');
  } else {
    console.log('Un invintado del montón.');
  }
};
itStartsWithVowel('Emirgildo');

// 1️⃣2️⃣ Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.

const isAnInappropiateMessage = message => {
  if (
    message.toLowerCase().includes('feo') ||
    message.toLowerCase().includes('tonto')
  ) {
    console.log('Es un mensaje inapropiado :(');
  } else {
    console.log('Mensaje aceptado :)');
  }
};
isAnInappropiateMessage('Feo feísimo.');

// 1️⃣3️⃣ Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.  REVISAR

const getInitials = (name, surname) => {
  console.log(
    `${name.toUpperCase().charAt(0)}.${surname.toUpperCase().charAt(0)}.`
  );
};
getInitials('camila', 'velazquez');

// 1️⃣4️⃣ Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.

const getTitleLength = announcement => {
  if (announcement.length > 20) {
    console.log('Reduce el título.');
  } else {
    console.log('Usa el título.');
  }
};
getTitleLength('Lorem ipsum dolor.');

// 1️⃣5️⃣ Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder. (?) y si está todo en mayúsculas como se valora?

const isAnEmergencyCall = message => {
  const messageToLowerCase = message.toLowerCase();
  if (
    messageToLowerCase.includes('ayuda') ||
    messageToLowerCase.includes('suministros')
  ) {
    console.log('Responde al mensaje, necesitan asistencia.');
  } else {
    console.log('Mejor ignora el mensaje.');
  }
};
isAnEmergencyCall('AyudA y SumiNISTros.');

// 1️⃣6️⃣ Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.

const getValidUser = username => {
  if (username.includes(' ')) {
    console.log('Usuario inválido.');
  } else {
    console.log('Usuario válido.');
  }
};
getValidUser('camomila camila');

// 1️⃣7️⃣ Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.

const getValidEmail = email => {
  if (email.includes('@') && email.includes('.')) {
    console.log('Email correcto.');
  } else {
    console.log('Email incorrecto.');
  }
};
getValidEmail('c.velazquezdamico@gmail.com');

// 1️⃣9️⃣ Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto.

const validateId = numberId => {
  const letters = 'abcdefghijklmnñopqrstuvwxyz';
  const numberIdToLowerCase = numberId.toLowerCase();
  if (
    numberIdToLowerCase.length === 8 &&
    letters.includes(numberIdToLowerCase.charAt(numberIdToLowerCase.length - 1))
  ) {
    console.log('ID correcto.');
  } else {
    console.log('ID incorrecto.');
  }
};
validateId('1234567N');

// 2️⃣0️⃣ Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.

const getRandomPassword = () => {
  const firstNumber = Math.floor(Math.random() * 10);
  const secondNumber = Math.floor(Math.random() * 10);
  const thirdNumber = Math.floor(Math.random() * 10);
  console.log(`${firstNumber}${secondNumber}${thirdNumber}7`);
};
getRandomPassword();

// 2️⃣1️⃣ Macarena está seleccionando un color al azar para una promoción. Los colores posibles son "Rojo", "Azul", "Verde" y "Amarillo". Crea una función que devuelva uno de estos colores de forma aleatoria.

const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    console.log('Es el color Rojo.');
  } else if (randomNumber === 1) {
    console.log('Es el color Azul.');
  } else if (randomNumber === 2) {
    console.log('Es el color Verde.');
  } else {
    console.log('Es el color Amarillo.');
  }
};

// 2️⃣2️⃣ Sabrina quiere generar una combinación de letras para un código de producto. La combinación debe tener 3 letras aleatorias en mayúsculas. Crea una función que genere y muestre esta combinación.

// 2️⃣3️⃣ Bego está revisando una lista de verbos para una clase de gramática. Necesita clasificar cada verbo según su conjugación. Crea una función que reciba dos verbos en infinitivo y determine si pertenecen a la primera ("-ar"), segunda ("-er") o tercera ("-ir") conjugación. La función deberá imprimir la clasificación de cada verbo.

const getVerbConjugation = verb => {
  if (verb.endsWith('ar')) {
    console.log(`El verbo ${verb} es de la primera conjugación.`);
  } else if (verb.endsWith('er')) {
    console.log(`El verbo ${verb} es de la segunda conjugación.`);
  } else {
    console.log(`El verbo ${verb} es de la tercera conjugación.`);
  }
};
getVerbConjugation('morir');

// 2️⃣4️⃣ Abby encontró una caja cerrada con un código de 5 números. Solo uno de cada 5 intentos abrirá la caja. Crea una función que simule 5 intentos y muestre si en alguno se abre la caja o no.

const randomCode = () => {
  const firstTry = Math.random() < 0.2;
  const secondTry = Math.random() < 0.2;
  const thirdTry = Math.random() < 0.2;
  const fourthTry = Math.random() < 0.2;
  const fifthTry = Math.random() < 0.2;

  if (firstTry || secondTry || thirdTry || fourthTry || fifthTry) {
    console.log('Abby lo consiguió.');
  } else {
    console.log('No se puede abrir.');
  }
};
randomCode();

// 2️⃣5️⃣ Camila quiere generar una clave secreta para una nueva cuenta. La clave debe tener un número aleatorio entre 100 y 999 y una letra aleatoria entre "A" y "Z". Crea una función que genere una clave con ese formato.

const generateSecretPassword = (number, letter) => {};

// 2️⃣6️⃣ Macarena quiere jugar al Euromillones, pero como nunca le toca, ha decidido confiar en el destino. Quiere generar 5 números aleatorios entre 1 y 50, asegurándose de que si un número es menor que 10, aparezca con un "0" delante. Por ejemplo, un posible resultado sería: "08 10 33 35 49". Crea una función que genere y muestre esta combinación de números en el formato correcto.

const getLotteryNumber = () => {
  const aleatoryNumber = Math.floor(Math.random() * 50 + 1);
  const lotteryNumber =
    aleatoryNumber < 10 ? '0' + aleatoryNumber : aleatoryNumber;
  return lotteryNumber;
};

const lotteryNumber = () => {
  const number1 = getLotteryNumber();
  const number2 = getLotteryNumber();
  const number3 = getLotteryNumber();
  const number4 = getLotteryNumber();
  const number5 = getLotteryNumber();
  console.log(number1, number2, number3, number4, number5);
};
lotteryNumber();
// 2️⃣7️⃣ Sabrina necesita ocultar parte de un número de tarjeta de crédito. Dado un número de 16 dígitos como string, la función debe reemplazar todos los caracteres excepto los últimos 4 con asteriscos. Por ejemplo, "1234567812345678" debe mostrarse como **********5678.

// 2️⃣8️⃣ Camila quiere dividir frases largas en dos partes. Si una frase tiene más de 20 caracteres, debe dividirla en dos partes: los primeros 10 caracteres y el resto, separados por " - ". Si la frase tiene 20 o menos, se devuelve tal cual. Crea una función que realice esta división.

// 2️⃣9️⃣ Sabrina está encriptando mensajes secretos. Sabe que todos los mensajes deben tener 4 letras y quiere que cada letra de una palabra se sustituya por la siguiente en el abecedario (por ejemplo, "hola" se convertiría en "ipmb"). Si la letra es "z" o "Z", debe convertirse en "a" o "A" respectivamente. Crea una función que realice esta transformación en una palabra.

const encrypdtedMessage = message => {
  const letters = 'abdefghijklmnñopqrstuvwxyz';
  const firstLetterPosition = letters.indexOf(message.charAt(0));
  const firstLetter =
    firstLetterPosition === letters.length - 1
      ? 'a'
      : letters.charAt(firstLetterPosition + 1);

  const secondLetterPosition = letters.indexOf(message.charAt(1));
  const secondLetter =
    secondLetterPosition === letters.length - 1
      ? 'a'
      : letters.charAt(secondLetterPosition + 1);

  const thirdLetterPosition = letters.indexOf(message.charAt(2));
  const thirdLetter =
    thirdLetterPosition === letters.length - 1
      ? 'a'
      : letters.charAt(thirdLetterPosition + 1);
  const fourthLetterPosition = letters.indexOf(message.charAt(3));
  const fourthLetter =
    fourthLetterPosition === letters.length - 1
      ? 'a'
      : letters.charAt(fourthLetterPosition + 1);

  console.log(`${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`);
};
encrypdtedMessage('cami');
// 3️⃣0️⃣ Bego necesita verificar si dos palabras de 4 letras son palíndromos (es decir, si lee igual de derecha a izquierda y de izquierda a derecha, como "amor" y "roma"). Crea una función que determine si dos palabras son palíndromos.
