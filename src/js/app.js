
export const map = new Map();
export const userMap = new Map();
export const result = new Map();

export default class Settings {
  constructor(theme, music, difficulty) {
    map.set(this, { theme: 'dark', music: 'trance', difficulty: 'easy' });
    userMap.set(this, { theme, music, difficulty });
  }

  settings() {
    result.set(this, userMap.get(this));
    // до более простого решения не додумалась)
    for (const prob in userMap.get(this)) {
      // console.log(userMap.get(this)[prob]);
      if (userMap.get(this)[prob] === undefined) {
        for (const prob2 in map.get(this)) {
          if (prob === prob2) {
            result.get(this)[prob] = map.get(this)[prob2];
            // return result.get(this);
          }
        }
      }
    }
    return result.get(this);
  }
}
