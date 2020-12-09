module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const { enhancement } = item;
  return {
    ...item,
    enhancement: (enhancement < 20) ? enhancement + 1 : 20
  };
}

function fail(item) {
  const { enhancement, durability } = item;
  return {
    ...item,
    enhancement: (enhancement > 16 ) ? enhancement -1 : enhancement,
    durability: (enhancement < 15 ) ? durability - 5 :  durability - 10
  };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const { enhancement, name } = item;
  return {
    ...item,
    name: (enhancement > 0) ? `[+${enhancement}] ${name}` : name
  };
}
