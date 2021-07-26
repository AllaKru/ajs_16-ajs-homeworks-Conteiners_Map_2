
import Settings from '../app';

test('работа Settings', () => {
  const set = new Settings('light', 'pop');
  expect(set.settings()).toEqual({

    theme: 'light',
    music: 'pop',
    difficulty: 'easy',
  });
});

// test('работа Settings', () => {
//   const set = new Settings('light');
//   expect(set.settings()).toEqual({

//     theme: 'light',
//     music: 'trance',
//     difficulty: 'easy',
//   });
// });
