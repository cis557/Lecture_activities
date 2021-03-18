jest.mock('./jsmodule.js');

const lib1 = require('./getWeather.js');
const lib2 = require('./jsmodule.js');

// We mock fetchWeather
lib2.fetchWeather.mockResolvedValue({ name: 'Philadelphia', main: { temp: 70 } });

describe('fetch and DOM testing with mocking', () => {
  test('the temperature is correct', async () => {
    const data = await lib2.fetchWeather();
    expect(data.main.temp).toBe(70);
  });

  test('temperature is displayed on the web page', async () => {
    // update the DOM
    const div = document.createElement('div');
    div.setAttribute('id', 'loc');
    document.body.appendChild(div);

    await lib1.updateWeather();
    expect(document.getElementById('loc').innerHTML).toEqual('Philadelphia : 70');

    // return lib1.updateWeather().then(() => { expect(document.getElementById('loc').innerHTML).toEqual('Philadelphia : 70'); });
  });
});
