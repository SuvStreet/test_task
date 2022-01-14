import server from '../server'

export default {
  // загрузить все условия
  async longConditions({ commit }) {
    const data = await server.get('condition')

    if (data) {
      const value = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        }
      })
      commit('longConditions', value)
    }
  },
  // добавить условие к списку
  async addCondition({ commit }, payload) {
    let condition = {}

    if (payload === 'info') {
      condition = {
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
      }
    } else if (payload === 'type') {
      condition = {
        [payload]: {
          selectedTypeCard: 'type1',
          counterType: [
            {
              id: Math.random(),
              value: 'gold',
            },
          ],
        },
      }
    } else {
      condition = {
        [payload]: {
          selectedStatus: 'status1',
          counterStatus: [
            {
              id: Math.random(),
              value: 'active',
            },
          ],
        },
      }
    }

    const data = await server.post('condition', condition)

    commit('addCondition', { id: data, ...condition })
  },
  // добавить диапозон
  async addDiapason({ commit, getters }, payload) {
    commit('addDiapason', payload)
    await server.put(`condition`, payload, getters.getChoiceCondition(payload))
  },
  // добавить тип
  async addType({ commit, getters }, payload) {
    commit('addType', payload)
    await server.put(`condition`, payload, getters.getChoiceCondition(payload))
  },
  // добавить статус
  async addStatus({ commit, getters }, payload) {
    commit('addStatus', payload)
    await server.put(`condition`, payload, getters.getChoiceCondition(payload))
  },
  // удалить условие из списка
  async removeCondition({ commit }, payload) {
    await server.delete(`condition`, payload)
    commit('removeCondition', payload)
  },
}
