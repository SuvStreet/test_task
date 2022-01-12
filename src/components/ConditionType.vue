<template>
  <div class="card">
    <div class="container">
      <h3>Условие {{ numberCondition }}</h3>
      <div class="form-control">
        <select
          id="typeCard"
          name="select"
          v-model="condition.type.selectedTypeCard"
        >
          <option value="type1">Тип карты лояльности</option>
          <option value="type2">Тип карты лояльности</option>
          <option value="type3">Тип карты лояльности</option>
        </select>
      </div>

      <div
        class="form-control"
        v-for="condition in condition.type.counterType"
        :key="condition.id"
      >
        <p>Тип {{ condition.id }}</p>
        <select id="type" name="select" v-model="condition.value">
          <option value="default">Default</option>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
        </select>
      </div>
    </div>

    <base-button @action="addType">Добавить тип</base-button>
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

    const addType = () => {
      store.commit('addType', props.numberCondition)
    }

    const removeCondition = () => {
      context.emit('removeCondition', props.numberCondition)
    }

    return {
      condition,
      addType,
      removeCondition
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
