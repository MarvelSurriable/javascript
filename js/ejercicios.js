// Ejercicios de Js
   alert ('Hello World!');
    
    document.write ('Hello World');

    document.write ('<br>'+ (3+5));

    let nombre= prompt ('Escribe tu nombre');
    document.write ('<br> Hola '+nombre);

    let numero_1= prompt('Escribe un número');
    let numero_2= prompt('Escribe otro número');
    document.write ('<br>La suma es: '+(parseInt(numero_1)+(parseInt(numero_2))));

// Challenge 7
    let base= parseInt (prompt('Ingresar la base del triágulo'));
    let altura= parseInt (prompt('Ingresar la altura del triángulo'));
    let areaTriangulo;
    areaTriangulo= (base*altura)/2;
    console.log('El área del triángulo es: --> ', areaTriangulo);
    document.write ('<br>El área del triángulo es: '+ areaTriangulo + ' cm²');

    let radio= parseInt (prompt('Ingresar el radio del círculo'));
    let areaCirculo;
    areaCirculo= (Math.PI*radio)/2
    console.log ('El área del círculo es: --> ', areaCirculo)
    document.write ('<br>El área del círculo es: '+ areaCirculo.toFixed(2) +' cm');

    