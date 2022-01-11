<template>
  <div class="card">
    <div class="container">
      <h3>Условие 2</h3>
      <div class="form-control">
        <select id="typeCard" name="select" v-model="selectedTypeCard">
          <option value="type1">Тип карты лояльности</option>
          <option value="type2">Тип карты лояльности</option>
          <option value="type3">Тип карты лояльности</option>
        </select>
      </div>

      <p>Тип 1</p>
      <div class="form-control">
        <select id="type" name="select" v-model="selectedType">
          <option value="default">Default</option>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
        </select>
      </div>
    </div>

    <base-button>Добавить тип</base-button>
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
    const selectedType = ref('gold')
    const selectedTypeCard = ref('type1')

    return {
      selectedType,
      selectedTypeCard,
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
