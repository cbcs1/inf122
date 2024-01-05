const persona={
nombre:"Carlos",
edad:25,
ocupacion:"Dessarrollador",
};
console.log(persona.edad);
console.log(persona);
persona["apellido"]="Chavez";
persona["ci"]=123456789;
console.log(persona);
persona.nombre="Nachito";
console.log(persona);
const colores=["rojo", "azul"];
console.log(colores);
let number=colores.length;
console.log(number);
console.log(colores[0]);

for (let i=0;i<number;i++){
    console.log("Elemento: "+colores[i]);
}


colores.sort();

colores.push("verde");
colores.push("celeste");
console.log(colores);

colores.sort();

console.log(colores);
colores.reverse();
console.log(colores);
colores.push("BLANCO");colores.push("NEGRO");
colores.sort();
console.log(colores);
colores.push(1,1,1,1.1231235);
colores.sort();
console.log(colores);
colores.pop();
console.log(colores);
colores.shift()
console.log(colores);