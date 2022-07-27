const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    } 
}  
export class Pockemon {
    constructor(
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`${this.name.toLocaleUpperCase()}!!!`);
    }

    @Deprecated('Most use speak2  Method instaed')
    speak() { 
        console.log(`${this.name}, ${this.name}!`);
    }

    speak2() { 
        console.log(`${this.name}, ${this.name}!`);
    }
}

export const charmander = new Pockemon(4, 'charmander');

charmander.scream();
charmander.speak2();