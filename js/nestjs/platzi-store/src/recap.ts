const nyName = 'nicolas'
const myAge = 12

const suma = (a: number, e: number) => {
  return a + e
}
console.log(suma(12, 12))


class Persona {
  private age: number;
  public name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name
  }
  getSumary() {
    return ` my name ${this.age}  is ${this.age}`

  }
}

const elvis=new Persona(18,'elvis')

elvis.getSumary()
