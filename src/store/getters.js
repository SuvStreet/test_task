export default {
  // получить все условия
  getConditions(state) {
    return state.conditions
  },
  // получить выбранное условие из списка
  getChoiceCondition(_, getters) {
    return (id) => getters.getConditions.find((item) => item.id === id)
  },
}
