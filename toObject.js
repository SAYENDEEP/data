export default function (form) {
  const obj = {};
  for (let i of new FormData(form).keys())
    obj[i] = form[i].value;
  return obj;
}