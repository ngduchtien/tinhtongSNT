/**
 *
 * @param {string} id
 * @returns {HTMLElement}
 */

function getElementId(id) {
  return document.getElementById(id);
}
/**
 *
 * @param {number} n
 * @returns {boolean}
 */
function kiemTraSNT(n) {
  n = parseInt(n);
  if (n === 1) return false;
  const dung = n >= 9 ? 9 : n - 1;
  for (let i = 2; i <= dung; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export { getElementId, kiemTraSNT };
