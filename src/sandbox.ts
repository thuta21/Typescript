import { HasFormatter } from './interfaces/HasFormatter.js';
import {Invoice} from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, 'end');
})

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);

    return {...obj, uid};
}

let docOne = addUID({name: 'Thuta', age: 20});
console.log(docOne.name);

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
interface Resource<T> {
    uid: number,
    resourceName: ResourceType,
    data: T
}

const docTwo : Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {
        name: 'Thuta',
        age: 21
    }
}

const docThree: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['sasuke', 'kakashi']
}

console.log(docTwo, docThree)