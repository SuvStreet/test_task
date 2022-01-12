<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие {{ numberCondition }}</h3>
      <div class="form-control">
        <select
          id="statusCard"
          name="select"
          v-model="condition.status.selectedStatus"
        >
          <option value="status1">Статус карты лояльности</option>
          <option value="status2">Статус карты лояльности</option>
          <option value="status3">Статус карты лояльности</option>
        </select>
      </div>
    </div>

    <div
      class="form-control"
      v-for="condition in condition.status.counterStatus"
      :key="condition.id"
    >
      <p for="value">Статус {{ condition.id }}</p>
      <div class="form-control">
        <select id="status" name="select" v-model="condition.value">
          <option value="active">Активна</option>
          <option value="deactivated">Деактивирована</option>
          <option value="blocked">Заблокированна</option>
        </select>
      </div>
    </div>

    <base-button @action="addStatus">Добавить статус</base-button>
    <base-button color="danger" @action="removeCondition"> Удалить условие </base-button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import BaseButton from './BaseButton.vue'
import { useStore } from 'vuex'

export default {
  props: ['numberCondition'],
  setup(props, context) {
    const store = useStore()

    const condition = computed(() => {
      return store.getters.getChoiceCondition(props.numberCondition)
    })

    const addStatus = () => {
      store.commit('addStatus', props.numberCondition)
    }

    const removeCondition = () => {
      context.emit('removeCondition', props.numberCondition)
    }

    return {
      addStatus,
      condition,
      removeCondition
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
