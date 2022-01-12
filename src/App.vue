<template>
  <div class="container">
    <div class="card">
      <h2>Добавить опрос</h2>
    </div>

    <!-- <div class="card">
      {{ conditionList }}
    </div> -->

    <template v-for="condition in conditionList" :key="condition.id">
      <component
        :is="'condition-' + Object.keys(condition)[1]"
        :numberCondition="condition.id"
        @removeCondition="removeCondition"
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
    const selected = ref('default')

    watch(store.state.conditions, (newValue) => {
      console.log(`newValue`, newValue)
      conditionList.value = newValue
    })

    const changeType = () => {
      if (selected.value === 'info') {
        store.commit('addConditionInfo', selected.value)
      } else if (selected.value === 'type') {
        store.commit('addConditionType', selected.value)
      } else {
        store.commit('addConditionStatus', selected.value)
      }
    }

    const addCondition = () => {
      if (selected.value !== 'default') {
        changeType()
      }
    }

    const changeOption = (value) => {
      console.log(`value`, value)
      selected.value = value
    }

    const removeCondition = (id) => {
      store.commit('removeCondition', id)
      conditionList.value = store.getters.getConditions
    }

    return {
      addCondition,
      conditionList,
      changeOption,
      removeCondition
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
