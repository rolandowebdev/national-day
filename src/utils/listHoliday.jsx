export function getList() {
  return fetch('https://api-harilibur.vercel.app/api').then((data) =>
    data.json()
  );
}
