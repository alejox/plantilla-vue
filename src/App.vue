<template>
  <h1>{{ $t('hello') }}</h1>
  <HomeView />
  <BaseInput
    v-model="formData.name"
    label="Nombre"
    type="text"
    id="name"
    required
  />
  <BaseSelect
    :options="data"
    v-model="formData.selectedOption"
    label="Select a category"
    required
  />

  <pre>{{ formData }}</pre>
</template>

<script setup>
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';

const data = [ 'Audi', 'Mercedez', 'BMW'];

const formData = ref({
  name: '',
  lastName: '',
  selectedOption: '',
});
</script>

<style lang="css" scoped></style>
