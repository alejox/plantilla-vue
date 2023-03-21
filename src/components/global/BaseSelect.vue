<template>
  <div class="select">
    <label v-if="label" class="select__label" :for="id">
      <span v-if="required">*</span> {{ label }}
    </label>
    <select
      :value="modelValue"
      class="select__field"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
      :id="id">
      <option value="" selected>Select</option>
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'text',
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.select {
  display: grid;
  gap: 8px;
  &__label {
    font-size: 1.4rem;
    line-height: 2rem;
    span {
      color: $danger;
      font-weight: 600;
      margin-right: 4px;
    }
  }
  &__field {
    padding: 4px 16px;
    &:focus {
      outline: none;
    }
  }
}
</style>
