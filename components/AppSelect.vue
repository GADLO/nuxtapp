<template>
  <div>
    <label :for="select">选择{{ select }}</label>

    <select  @change="$emit('change',$event.target.value) " :name="select" id="thing">
      <option value="">请选择一个{{ select }}</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: '餐品'
    },
    selectOptions: {
      type: Array,
      default: () => ['墨西哥肉卷', '披萨', '点心']
    }
  }
}
</script>
