let inventory = [];

function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerName) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: product.quantity
    });
    console.log(`${name} added to inventory`);
  }
}


function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (inventory[index].quantity >= quantity) {
    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    }

    console.log(`Remaining ${name} pieces: ${inventory[index] ? inventory[index].quantity : 0}`);
  } else {
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
  }
}

addProduct({ name: "FLOUR", quantity: 20 });
addProduct({ name: "FLOUR", quantity: 5 });

removeProduct("FLOUR", 5);
removeProduct("FLOUR", 50);
removeProduct("FLOUR", 20);
removeProduct("FLOUR", 1);
