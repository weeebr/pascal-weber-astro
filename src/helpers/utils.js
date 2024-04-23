const nextIdx = (array, idx) => (idx + 1) % array.length;
const prevIdx = (array, idx) => (idx - 1 + array.length) % array.length;

export const prevNext = (array, idx) => [
  prevIdx(array, parseInt(idx)),
  nextIdx(array, parseInt(idx)),
];
