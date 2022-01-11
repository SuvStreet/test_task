<template>
  <div class="card">
    <p>Условие 1</p>
    <div class="form-control">
      <select id="value" name="select" v-model="changeOption">
        <option value="default">Выберите условие</option>
        <option value="info">Условие 1</option>
        <option value="type">Условие 2</option>
        <option value="status">Условие 3</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/runtime-core'

export default {
  props: ['selected'],
  emits: ['change'],
  setup(props, context) {
    const changeOption = ref(props.selected)

    watch(changeOption, (newValue) => {
      context.emit('change', newValue)
    })

    return {
      changeOption,
    }
  },
}
</script>

<style scoped></style>
