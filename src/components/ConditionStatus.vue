<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие {{ number }}</h3>
      <div class="form-control">
        <select
          id="statusCard"
          name="select"
          v-model="selectedStatus"
        >
          <option value="status1">Статус карты лояльности</option>
          <option value="status2">Статус карты лояльности</option>
          <option value="status3">Статус карты лояльности</option>
        </select>
      </div>
    </div>

    <div
      class="form-control"
      v-for="status in counterStatus"
      :key="status.id"
    >
      <p for="value">
        Статус {{ counterStatus.indexOf(status) + 1 }}
      </p>
      <div class="form-control">
        <select id="status" name="select" v-model="status.value">
          <option value="active">Активна</option>
          <option value="deactivated">Деактивирована</option>
          <option value="blocked">Заблокированна</option>
        </select>
      </div>
    </div>

    <base-button @action="addStatus">Добавить статус</base-button>
    <base-button color="danger" @action="removeCondition">
      Удалить условие
    </base-button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import BaseButton from './BaseButton.vue'
import { useStore } from 'vuex'

export default {
  props: ['idCondition', 'number'],
  setup(props, context) {
    const store = useStore()

    const condition = computed(() => {
      return store.getters.getChoiceCondition(props.idCondition)
    })

    const addStatus = () => {
      store.dispatch('addStatus', props.idCondition)
    }

    const removeCondition = () => {
      context.emit('removeCondition', props.idCondition)
    }

    const { selectedStatus, counterStatus } = condition.value.status

    return {
      addStatus,
      removeCondition,
      selectedStatus,
      counterStatus,
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
