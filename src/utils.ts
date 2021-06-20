export function getCount(count: number): string {
  if (count < 0) return count + "";
  if (count < 10000) {
    return count + "";
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + "万";
  } else {
    return Math.floor(count / 100000000) + "亿";
  }
}

export const parallel = (promises: Promise<any>[]) => {
  return Promise.all(
    promises.map(
      (promise) =>
        new Promise((resolve) => {
          promise.then(resolve, resolve);
        })
    )
  );
};
