import { createStore } from 'vuex'

// const mapDefault = {
//   info: {
//     counterDiapason: [],
//     selectedDefault: 'age',
//   },
//   type: {
//     selectedTypeCard: 'type1',
//     selectedType: 'gold',
//   },
//   status: {
//     selectedStatusCard: 'status1',
//     selectedStatus: 'active',
//   },
// }

export default createStore({
  state: {
    conditions: [
      // {
      //   id: 1,
      //   info: {
      //     counterDiapason: [1],
      //     selectedDefault: 'age',
      //   },
      // },
      // {
      //   id: 2,
      //   info: {
      //     counterDiapason: [1, 2],
      //     selectedDefault: 'age',
      //   },
      // },
    ],
  },
  mutations: {
    addConditionInfo(state, payload) {
      state.conditions.push({
        id: Math.random(),
        [payload]: {
          selectedDefault: 'age',
          counterDiapason: [
            {
              id: Math.random(),
              value: {
                ot: '18',
                do: '86',
              },
            },
          ],
        },
      })
    },
    addConditionType(state, payload) {
      state.conditions.push({
        id: Math.random(),
        [payload]: {
          selectedTypeCard: 'type1',
          counterType: [
            {
              id: Math.random(),
              value: 'gold',
            },
          ],
        },
      })
    },
    addConditionStatus(state, payload) {
      state.conditions.push({
        id: Math.random(),
        [payload]: {
          selectedStatus: 'status1',
          counterStatus: [
            {
              id: Math.random(),
              value: 'active',
            },
          ],
        },
      })
    },
    addDiapason(state, payload) {
      state.conditions
        .find((item) => item.id === payload)
        .info.counterDiapason.push({ id: Math.random(), value: '' })
    },
    addType(state, payload) {
      state.conditions
        .find((item) => item.id === payload)
        .type.counterType.push({ id: Math.random(), value: 'gold' })
    },
    addStatus(state, payload) {
      state.conditions
        .find((item) => item.id === payload)
        .status.counterStatus.push({ id: Math.random(), value: 'active' })
    },
    removeCondition(state, payload) {
      state.conditions = state.conditions
        .filter((item) => item.id !== payload)
    },
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
