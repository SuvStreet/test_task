<template>
  <div class="container">
    <div class="card">
      <h2>Добавить опрос</h2>
    </div>

    <div class="card">
      <p for="value">Условие 1</p>
      <div class="form-control">
        <select id="value" name="select" v-model="selected">
          <option value="0">Выберите условие</option>
          <option value="info">Условие 1</option>
          <option value="type">Условие 2</option>
          <option value="status">Условие 3</option>
        </select>
      </div>
    </div>

    <condition-info></condition-info>

    <condition-type></condition-type>

    <condition-status></condition-status>

    <!-- <template v-for="condition in conditionList" :key="condition.id"> </template> -->

    <base-button>Добавить условие</base-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseButton from './components/BaseButton.vue'
import ConditionInfo from './components/ConditionInfo.vue'
import ConditionType from './components/ConditionType.vue'
import ConditionStatus from './components/ConditionStatus.vue'

export default {
  setup() {
    const selected = ref('0')

    return {
      selected,
    }
  },
  components: {
    BaseButton,
    ConditionInfo,
    ConditionType,
    ConditionStatus,
  },
}
</script>

<style></style>
