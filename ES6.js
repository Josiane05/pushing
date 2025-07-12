const person = {
    name: 'JO',
    walk() {},
    talk() {},
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'john'; 