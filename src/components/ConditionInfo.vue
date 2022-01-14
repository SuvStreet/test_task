<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие {{ number }}</h3>
      <div class="form-control">
        <select id="value" name="select" v-model="selectedDefault">
          <option value="age">Возраст респондента</option>
          <option value="height">Рост респондента</option>
          <option value="weight">Вес респондента</option>
        </select>
      </div>

      <div
        class="form-control"
        v-for="diapason in counterDiapason"
        :key="diapason.id"
      >
        <p for="value">Диапазон {{ counterDiapason.indexOf(diapason) + 1 }}</p>
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
import { computed } from 'vue'
import { useStore } from 'vuex'
import BaseButton from './BaseButton.vue'

export default {
  props: ['idCondition', 'number'],
  emits: ['removeCondition'],
  setup(props, context) {
    const store = useStore()

    const condition = computed(() => {
      return store.getters.getChoiceCondition(props.idCondition)
    })

    const addDiapason = () => {
      store.dispatch('addDiapason', props.idCondition)
    }

    const removeCondition = () => {
      context.emit('removeCondition', props.idCondition)
    }

    const {counterDiapason, selectedDefault} = condition.value.info

    return {
      counterDiapason,
      selectedDefault,
      addDiapason,
      removeCondition,
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
