import { getElementId, kiemTraSNT } from "./ultils.js";

const ipA = getElementId("ipA");
const ipB = getElementId("ipB");
const btnSum = getElementId("btnSum");
const kqList = getElementId("kqList");
const kqSum = getElementId("kqSum");

btnSum.addEventListener("click", (e) => {
  console.log(e.target);
  if (ipA.value === "" || ipB.value === "") {
    return alert("Vui long nhap du lieu");
  }

  let a = parseFloat(ipA.value),
    b = parseFloat(ipB.value);

  if (a <= 0 || b <= 0) {
    return alert("So k hop le");
  }

  if (a >= b) {
    return alert("A phai be hon B");
  }

  const listSNT = timDaiSNT_AB(a, b); // => []
  const tongSNT = tinhTongSNT(listSNT);
  inKQRaManHinh(listSNT, tongSNT);
});

/**
 *
 * @param {Array} listSNT
 * @return {number}
 */
function tinhTongSNT(listSNT) {
  let tong = 0;
  listSNT.forEach((item) => {
    tong += item;
  });
  return tong;
}

/**
 *
 * @param {Array} listSNT
 * @param {number} TongSNT
 */

function inKQRaManHinh(listSNT, TongSNT) {
  console.log("mang SNT", listSNT);
  kqList.textContent = `Day cac SNT: ${listSNT.join(",")}`;
  kqSum.textContent = `Tong SNT: ${TongSNT}`;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {Array}
 */
function timDaiSNT_AB(a, b) {
  let res = [];
  for (let i = a; i <= b; i++) {
    if (kiemTraSNT(i)) {
      res.push(i);
    }
  }
  return res; // [number]
}
