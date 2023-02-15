function cuotasCalc (){
        let entrada = Number(prompt("Ingrese el precio del producto a calcular"));
        let entrada2 = Number(prompt("¿en cuantas cuotas desea pagar?"));
        let total = (entrada / entrada2).toFixed(2);
        alert(`Vas a pagar ${entrada2} cuotas de ${total}`);
        ingreso = prompt("¿Quiere hacer otra operación?  1)Si  2)No");
};
alert("Este simulador te ayudará a calcular los pagos de tus cuotas")
let ingreso = prompt("Ingrese una opción  1)Empezar  2)Salir");
while(ingreso != "ESC"){
    if(ingreso =="1"){
        cuotasCalc();
    }else if(ingreso =="2"){
        alert("¡Hasta la próxima!");
        break;
    }else{
        alert("Opcion invalida");
        ingreso = prompt("¿Desea ingresar al simulador de cuotas?  1)Ingresar  2)Salir");
    };
};