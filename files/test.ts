//Typescript

//Funciones
function oneFunction( mensaje : string) {
    console.log("El mensaje es " + mensaje);
}

//Variables
let color : string = "blue";
let age : number = 37;
let isFalse : boolean = false;
let cantidad : any = 4; //puede ser cualquier tipo
let list1 : number[] = [1,2,3];
let list2 : string[] = ["one","two","three"];
let list3 : any [] = ["one",1,true];
let list4 : boolean[] = [true,false,true];
let diametro : [string, number] = ["Saturno", 116460]; //tuplas, los elementos son limitados y de tipos fijos
function usuario(): void {
    console.log("Este es un mensaje para el usuario");
} //Común para un tipo retorno de función que no devulve ningún valor

//Operador condicional (ternario)
//Sintaxis
// condicion ? valor1 : valor2
let estado = (age >= 18) ? "adulto" : "menor";

//Objetos
let objeto : object = {name: "Ana", age:45};
let fecha : Date = new Date();
interface Planet{
    name : string;
    galaxy : string;
    numberOfMoons : number;
    hasMoons : boolean;
} //Define como será la interface del objeto Planet (todos deben estar definidos)