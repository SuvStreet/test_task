<template>
  <div class="card">
    <div class="container">
      <h3>Условие {{ number }}</h3>
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
        v-for="type in condition.type.counterType"
        :key="type.id"
      >
        <p>Тип {{ condition.type.counterType.indexOf(type) + 1 }}</p>
        <select id="type" name="select" v-model="type.value">
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
  props: ['idCondition', "number"],
  setup(props, context) {
    const store = useStore()

    const condition = computed(() => {
      return store.getters.getChoiceCondition(props.idCondition)
    })

    const addType = () => {
      store.dispatch('addType', props.idCondition)
    }

    const removeCondition = () => {
      context.emit('removeCondition', props.idCondition)
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
