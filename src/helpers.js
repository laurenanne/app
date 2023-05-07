const choice = function (items) {
  let rand = Math.floor(Math.random() * items.length);
  return items[rand];
};

const remove = function (items, item) {
  for (let i = 0; i < items.length; i++) {
    if (item === items[i]) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};

export { choice, remove };
