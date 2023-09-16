

const inputN = document.getElementById('input-number');
const btnSearch = document.getElementById('btn-search');
const elKetQua = document.getElementById('ket-qua-in')



btnSearch.onclick = timSoNguyenTo


function timSoNguyenTo() {
   const value = inputN.value;
   if (value <= 0) {
      alert('số nhập không hợp lệ');
   }
   if (isSoNguyenTo(value)) {
      elKetQua.style.color = 'red';
      elKetQua.textContent = `so ${value}: là số nguyên tố`;
   } else {
      elKetQua.style.color = 'brown';
      elKetQua.textContent = `so ${value}: không là số nguyên tố`;
   }
}

function isSoNguyenTo(n) {
   if (n <= 1) {
      return false;
   }
   const diemDung = n <= 9 ? (n - 1) : 9
   for (let i = 2; i <= 9; i++) {
      if (n % 2 === 0) {
         return false;
      }
   }
   return true;
}