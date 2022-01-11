<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие {{ condition.id + 1 }}</h3>
      <div class="form-control">
        <select
          id="value"
          name="select"
          v-model="condition.info.selectedDefault"
        >
          <option value="age">Возраст респондента</option>
          <option value="height">Рост респондента</option>
          <option value="weight">Вес респондента</option>
        </select>
      </div>
    </div>

    <div
      class="form-control"
      v-for="diapason in condition.info.counterDiapason"
      :key="diapason.id"
    >
      <p for="value">Диапазон {{ diapason.id }}</p>
      <label for="ot">
        От:
        <input
          id="ot"
          type="number"
          min="0"
          max="100"
          placeholder="0-100"
        />
      </label>
      <label for="do">
        До:
        <input
          id="do"
          type="number"
          min="0"
          max="100"
          placeholder="0 - 100"
        />
      </label>
    </div>

    <base-button @action="addDiapason">Добавить диапазон</base-button>
    <base-button color="danger" @action="removeDiapason"> Удалить условие </base-button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import BaseButton from './BaseButton.vue'
import { useStore } from 'vuex'

export default {
  props: ['numberCondition'],
  setup(props) {
    const store = useStore()

    const condition = computed(() => {
      return store.getters.getChoiceCondition(props.numberCondition)
    })

    const addDiapason = () => {
      store.commit('addDiapason', { id: props.numberCondition, type: 'info' })
    }

    return {
      condition,
      addDiapason,
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
