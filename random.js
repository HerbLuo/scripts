const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+|~`\\=-[]{};:',.<>/?\"".split("");

const baseXXEncode = (int) => {
  if (int === 0) {
    return CHARSET[0];
  }

  let res = "";
  while (int > 0) {
    res = CHARSET[int % CHARSET.length] + res;
    int = Math.floor(int / CHARSET.length);
  }
  return res;
};

const SS4 = () => baseXXEncode(Math.floor((1 + Math.random()) * (CHARSET.length ** 4 - 1))).substring(1);

const generateId = () => [...Array(128 / 4)].map(SS4).join("");
