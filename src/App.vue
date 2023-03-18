<template>
  <h1>{{ $t('hello') }}</h1>
  <HomeView />
  <BaseInput v-model="formData.name" label="Nombre" type="text" id="name" required/>
  <BaseInput
    v-model="formData.lastName"
    label="Apellido"
    type="text"
    id="lastName"
    required />

  <pre>{{ formData }}</pre>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from './components/BaseInput.vue';
import HomeView from './views/HomeView.vue';

const formData = ref({
  name: '',
  lastName: '',
});
</script>

<style lang="css" scoped></style>
