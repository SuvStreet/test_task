<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие 3</h3>
      <div class="form-control">
        <select id="statusCard" name="select" v-model="selectedStatusCard">
          <option value="status1">Статус карты лояльности</option>
          <option value="status2">Статус карты лояльности</option>
          <option value="status3">Статус карты лояльности</option>
        </select>
      </div>
    </div>

    <div class="form-control">
      <p for="value">Статус 1</p>
      <div class="form-control">
        <select id="status" name="select" v-model="selectedStatus">
          <option value="active">Активна</option>
          <option value="deactivated">Деактивирована</option>
          <option value="blocked">Заблокированна</option>
        </select>
      </div>
    </div>

    <base-button>Добавить статус</base-button>
    <base-button color="danger">
      Удалить условие
    </base-button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import BaseButton from './BaseButton.vue'

export default {
  setup() {
    const selectedStatusCard = ref('status1')
    const selectedStatus = ref('active')

    return {
      selectedStatusCard,
      selectedStatus
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
