const student = {
    firstName: 'Franck',
    lastName: 'Sinatra',
    averageScore: 4.8,
    isGrantHolder(){
        if (this.averageScore >= 4) {
            return 'true';
        } return 'false';
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}, ${isGrantHolder()}`;
    },
}


function Aspirant (dissertationTopic, isDissertationComplete){
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    Aspirant.__proto__ = student;
    this.isGrantHolder = function(){
        if (this.averageScore >= 4,5 && this.dissertationTopic === true) {
            return 'true';
        } return 'false'; 
    };

};

const aspirant = new Aspirant(false, false)
console.log(student.isGrantHolder());
console.log(aspirant.isGrantHolder());

//2

class Plane {
    constructor(name, isFlying){
        this.name = name;
        this.isFlying = isFlying;
        isFlying = false;
    }
    takeOff() {
        return this.isFlying = !false;
    };
    land() {
        return this.isFlying = !true;
    }
}
const airport = new Plane() {
    planes: []; 
    getFlyingPlanes() {
        let filter = this.filter(Boolean)
        return filter.length();
    };
};
let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
console.log(airport.getFlyingPlanes());