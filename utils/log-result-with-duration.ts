export const logResultWithDuration = (
  callback: (...args: any[]) => void,
  ...args: any[]
) => {
  const label = (callback as any).name;

  console.time(label);
  console.log(typeof callback === "function" ? callback(...args) : callback);
  console.timeEnd(label);
};
