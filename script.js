class Traveler{
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if(this.food > 0){
            this.food -=1
            this.isHealthy = true
        }else{
            this.isHealthy = false
        }
    }
}



class Wagon{

    constructor(capacity){
        
        this.capacity = capacity
        this.passengers = []
    }
    

    getAvailableSeatCount(){
        let capacity = this.capacity
        if(capacity > 0){
            capacity = this.capacity - this.passengers.length
        }
        return capacity
    } 

    join(value){
        if(this.capacity - this.passengers.length > 0){
            this.passengers.push(value)
        }
    }

    shouldQuarantine(){
       const sick = this.passengers.find(({isHealthy}) =>{
            if(isHealthy == false){
                return true
            }else{
                return false
            }
        })
        return sick ? true : false
    }

    totalFood(){
        let total = 0
        for(let i = 0; i< this.passengers.length; i++){
                total += this.passengers[i].food
        }
        return total

    }
            

}
// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
