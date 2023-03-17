<template>
  <div class="input">
    <label class="input__label" :for="id"><span>*</span>{{ label }}</label>
    <input class="input__field" :placeholder="placeholder" :id="id" />
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
  }
}
</style>
