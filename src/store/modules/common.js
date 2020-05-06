const common = {
  state: {
    count: 0,
    isCollapse: false,
    isFullScren: false,
    isShade: false,
    screen: -1,
    receivefacesign: true
  },
  actions: {},
  mutations: {
    SET_COUNT: (state, value = 1) => {
      state.count += value;
    },
    SET_SHADE: (state, active) => {
      state.isShade = active;
    },
    SET_COLLAPSE: state => {
      state.isCollapse = !state.isCollapse;
    },
    SET_FULLSCREN: state => {
      state.isFullScren = !state.isFullScren;
    },
    SET_SCREEN: (state, screen) => {
      state.screen = screen;
    },
    SET_RECEIVEFACESIGN: (state, value) => {
      state.receivefacesign = value;
    }
  }
};
export default common;
