export default (url) => {
  const res = url.trim().split('');
  while (res.slice(-1).toString() === '/') {
    res.splice(-1);
  }

  return res.join('');
};
