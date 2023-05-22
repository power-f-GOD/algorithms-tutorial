const limit = 100000000;
const list: Array<string | number> = [];

console.time("Enlisting");
for (let i = 0; i <= limit; i++) {
  list.push(i);
}
console.timeEnd("Enlisting");

export { limit, list };
