<template>
  <div class="container">
    <div class="card">
      <h2>Добавить опрос</h2>
    </div>

    <app-loader v-if="loader"></app-loader>

    <template v-for="condition in conditionList" :key="condition.id">
      <component
        :is="'condition-' + Object.keys(condition)[1]"
        :idCondition="condition.id"
        :number="conditionList.indexOf(condition) + 1"
        @removeCondition="removeCondition"
      ></component>
    </template>

    <custom-select :select="selected" @change="changeOption"></custom-select>

    <base-button @action="addCondition">Добавить условие</base-button>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

import BaseButton from './components/BaseButton.vue'
import ConditionInfo from './components/ConditionInfo.vue'
import ConditionType from './components/ConditionType.vue'
import ConditionStatus from './components/ConditionStatus.vue'
import CustomSelect from './components/CustomSelect.vue'
import AppLoader from './components/AppLoader.vue'

export default {
  setup() {
    const store = useStore()
    const conditionList = ref(store.getters.getConditions)
    const selected = ref('default')
    const loader = ref(false)
    const number = ref([1])

    onMounted(() => {
      loader.value = true
      store.dispatch('longConditions').then(() => {
        loader.value = false
      })
    })

    watch(
      () => store.getters.getConditions,
      () => {
        conditionList.value = store.getters.getConditions
      }
    )

    const addCondition = () => {
      if (selected.value !== 'default') {
        store.dispatch('addCondition', selected.value)
      }
    }

    const changeOption = (value) => {
      selected.value = value
    }

    const removeCondition = (id) => {
      store.dispatch('removeCondition', id)
    }

    return {
      loader,
      addCondition,
      conditionList,
      changeOption,
      removeCondition,
      selected,
    }
  },
  components: {
    BaseButton,
    ConditionInfo,
    ConditionType,
    ConditionStatus,
    CustomSelect,
    AppLoader,
  },
}
</script>

<style></style>
