// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Diámetro
function diametroCirculo(radio) {
    return radio *2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueB = inputBase.value;

    const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(valueB));
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueB = inputBase.value;
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueA = inputAltura.value;

    const area = areaTriangulo(valueB, valueA);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function alturaIsosceles(lado1,lado2, base) {
    if(lado1==lado2) {
        alturaCuadrada = (lado1^2) - (base/2)^2;
        altura = Math.sqrt(alturaCuadrada);

        return altura;
    }
    else {
        alert("El triángulo que ingresó no es un triángulo isósceles");
    }
}

