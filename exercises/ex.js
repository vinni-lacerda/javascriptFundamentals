const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === 'undefined') {
    object[key] = value;
  }
};

console.log(addProperty(customer, 'email', 'roberto@email.com'));
addProperty(customer, 'fone', 'logitech');
addProperty(customer, 'userGithub', 'robertodev');
addProperty(customer, 'linkedin', 'robertodev');

console.log(customer);
