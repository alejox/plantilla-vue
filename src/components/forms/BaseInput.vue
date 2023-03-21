<template>
  <div class="input">
    <label class="input__label" :for="id"
      ><span v-show="required">*</span> {{ label }}</label
    >
    <input
      v-bind="$attrs"
      class="input__field"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: [String, Number],
    default: 'text',
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.input {
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
