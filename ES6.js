const colors = ['green','yellow','blue'];
const items = colors.map(color =>`<li>${color}</li>` );
console.log(items);

const address = {
    street: '',
    city: '',
    country: '',
}

const {street:st, city, country} = address;