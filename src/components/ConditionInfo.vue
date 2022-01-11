<template>
  <div class="card">
    <div class="container">
      <h3 for="value">Условие 1</h3>
      <div class="form-control">
        <select id="value" name="select" v-model="selected">
          <option value="age">Возраст респондента</option>
          <option value="height">Рост респондента</option>
          <option value="weight">Вес респондента</option>
        </select>
      </div>
    </div>

    <div class="form-control">
      <p for="value">Диапазон 1</p>
      <label for="ot">
        От:
        <input id="ot" type="number" min="0" max="100" placeholder="0 - 100" />
      </label>
      <label for="do">
        До:
        <input id="do" type="number" min="0" max="100" placeholder="0 - 100" />
      </label>
    </div>

    <base-button>Добавить диапазон</base-button>
    <base-button color="danger"> Удалить условие </base-button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import BaseButton from './BaseButton.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const selected = ref('age')

    return {
      selected,
    }
  },
  components: { BaseButton },
}
</script>

<style></style>
