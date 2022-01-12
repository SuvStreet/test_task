<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие {{ numberCondition }}</h3>
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
            placeholder="0 - 100"
            v-model="diapason.value.ot"
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
            v-model="diapason.value.do"
          />
        </label>
      </div>
    </div>

    <base-button @action="addDiapason">Добавить диапазон</base-button>
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
  props: ['numberCondition'],
  emits: ['removeCondition'],
  setup(props, context) {
    const store = useStore()

    const condition = computed(() => {
      return store.getters.getChoiceCondition(props.numberCondition)
    })

    const addDiapason = () => {
      store.commit('addDiapason', props.numberCondition)
    }

    const removeCondition = () => {
      context.emit('removeCondition', props.numberCondition)
    }

    return {
      condition,
      addDiapason,
      removeCondition,
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
