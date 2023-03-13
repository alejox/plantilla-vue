<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
:root {
  --bs-body-font-family: 'Poppins', sans-serif;
  --bs-body-font-size: 1.6rem;
  *{
    margin: 0;
    padding: 0;
  }
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
</style>
