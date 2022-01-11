import { createStore } from 'vuex'

const mapDefault = {
  info: {
    counterDiapason: [
      {
        id: 1,
      },
    ],
    selectedDefault: 'age',
  },
  type: {
    selectedTypeCard: 'type1',
    selectedType: 'gold',
  },
  status: {
    selectedStatusCard: 'status1',
    selectedStatus: 'active',
  },
}

export default createStore({
  state: {
    conditions: [],
  },
  mutations: {
    addCondition(state, payload) {
      const value = {
        id: state.conditions.length,
        [payload]: mapDefault[payload],
      }
      state.conditions.push(value)
    },
    addDiapason(state, payload){
      const counterDiapason =  state.conditions[payload.id][payload.type].counterDiapason
      
      counterDiapason.push({
        id: counterDiapason.length + 1,
      })
    }
  },
  actions: {},
  getters: {
    getConditions(state) {
      return state.conditions
    },
    getChoiceCondition(_, getters) {
      return (id) => getters.getConditions.find((item) => item.id === id)
    },
  },
})
