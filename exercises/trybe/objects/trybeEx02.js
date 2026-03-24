/*
Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.

Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00.
*/

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  return(`Olá ${fullOrder.order.delivery.deliveryPerson} entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, numero: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`);
  
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
    order.name = "Luiz Silva";
    order.payment.total = 50.00;
    
    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${Object.keys(fullOrder.order.pizza)[0]}, ${Object.keys(fullOrder.order.pizza)[1]} e ${fullOrder.order.drinks.coke.type} é R$:${fullOrder.payment.total.toFixed(2)}`;
}

console.log(orderModifier(order));