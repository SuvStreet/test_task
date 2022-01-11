import { createStore } from 'vuex'

const mapDefault = {
  info: {
    counterDiapason: 1,
    min: 0,
    max: 100,
    placeholder: '0 - 100',
    selectedDefault: 'age',
  },
  type: {
    selectedTypeCard: 'type1',
    selectedType: 'gold'
  },
  status: {
    selectedStatusCard: 'status1',
    selectedStatus: 'active'
  }
}

export default createStore({
  state: {
    conditions: [],
  },
  mutations: {
    addCondition(state, payload) {
      console.log(`payload`, payload)
      const value = {
        id: state.conditions.length,
        [payload]: mapDefault[payload],
      }
      state.conditions.push(value)
    },
  },
  actions: {},
  getters: {
    getConditions(state) {
      return state.conditions
    }
  }
})
