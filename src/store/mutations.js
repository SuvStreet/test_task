export default {
  // загрузить все условия
  longConditions(state, payload) {
    state.conditions = payload
  },
  // добавить условие к списку
  addCondition(state, payload) {
    state.conditions.push(payload)
  },
  // добавить диапозон
  addDiapason(state, payload) {
    state.conditions
      .find((item) => item.id === payload)
      .info.counterDiapason.push({
        id: Math.random(),
        value: { ot: '18', do: '86' },
      })
  },
  // добавить тип
  addType(state, payload) {
    state.conditions
      .find((item) => item.id === payload)
      .type.counterType.push({ id: Math.random(), value: 'gold' })
  },
  // добавить статус
  addStatus(state, payload) {
    state.conditions
      .find((item) => item.id === payload)
      .status.counterStatus.push({ id: Math.random(), value: 'active' })
  },
  // удалить условие из списка
  removeCondition(state, payload) {
    state.conditions = state.conditions.filter((item) => item.id !== payload)
  },
}
