const STATE_APP_KEY = 'http://sgp.metta.pe:state';

export default {
  loadState: function () {
    try {
      let serializedState = localStorage.getItem(STATE_APP_KEY);
      if (serializedState === null) {
        return this.initializeState();
      }

      return JSON.parse(serializedState);
    } catch(err) {
      return this.initializeState();
    }
  },
  saveState: function (state) {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem(STATE_APP_KEY, serializedState);
    } catch (err) {

    }
  },
  initializeState: function () {
    return {};
  }
}
