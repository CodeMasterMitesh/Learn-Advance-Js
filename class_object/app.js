class Car {

    // constructor()
    // {
    //     console.log("I am constructor");
    // }

    printData(brand,name,modal,mfyear)
    {
        this.brand = brand;
        this.name = name;
        this.modal = modal;
        this.mfyear = mfyear;
        console.log(this.brand,this.name,this.modal,this.mfyear); 
    }
    Start()
    {
        console.log("Car Start");
    }
    brk()
    {
        console.log("Break Applied");
    }
    gear(gear)
    {
        this.gear = gear;
        console.log("Manually Gear Changed to " + this.gear);
    }
    Stop()
    {
        console.log("Car Stop");
    }

}

let i20 = new Car();
console.log(i20);
console.log(i20.gear(5))
console.log(i20.printData("i20","Grand I20","Sports Modal",2025));

let i10 = new Car();
console.log(i10);
console.log(i10.gear(3));


