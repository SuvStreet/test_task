<template>
  <div class="container">
    <div class="card">
      <h2>Добавить опрос</h2>
    </div>

    <template v-for="condition in conditionList" :key="condition.id">
      <component 
        :is="'condition-' + Object.keys(condition)[1]"
        :numberCondition="condition.id"
      ></component>
    </template>

    <custom-select selected="default" @change="changeOption"></custom-select>
<!-- 
    <div class="card">
      <p for="value">Условие 1</p>
      <div class="form-control">
        <select id="value" name="select" v-model="selected">
          <option value="default">Выберите условие</option>
          <option value="info">Условие 1</option>
          <option value="type">Условие 2</option>
          <option value="status">Условие 3</option>
        </select>
      </div>
    </div> -->

    <base-button @action="addCondition">Добавить условие</base-button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import BaseButton from './components/BaseButton.vue'
import ConditionInfo from './components/ConditionInfo.vue'
import ConditionType from './components/ConditionType.vue'
import ConditionStatus from './components/ConditionStatus.vue'
import CustomSelect from './components/CustomSelect.vue'

export default {
  setup() {
    const store = useStore()
    const conditionList = ref([])
    const selected = ref("")

    function addCondition() {
      if (selected.value !== "default" && selected.value !== "") {
        store.commit('addCondition', selected.value)
      }
    }

    watch(store.state.conditions, (newValue) => {
      console.log(`newValue`, newValue)
      conditionList.value = newValue
    })

    const changeOption = (value) => {
      selected.value = value
    }

    return {
      selected,
      addCondition,
      conditionList,
      changeOption
    }
  },
  components: {
    BaseButton,
    ConditionInfo,
    ConditionType,
    ConditionStatus,
    CustomSelect,
  },
}
</script>

<style></style>
