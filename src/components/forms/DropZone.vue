<template>
  <div>
    <div
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="toggleActive"
      :class="{ 'active-dropzone': active }"
      class="card-profile__drag dropzone"
    >
      <label for="dropzoneFile">
        <img class="dropzone__img" src="@/assets/svg/files.svg" alt="" />
        <div class="card-profile__title">
          <p class="card-profile__text">
            <span>Arrastra</span> tu imagen aquí, o
            <span>búscala en tu ordenador</span>
          </p>
          <p class="card-profile__subtitle">Sube archivos de hasta 4mb</p>
        </div>
      </label>
      <input type="file" id="dropzoneFile" class="dropzoneFile" />
      <div class="dropzone__bar" >
        <!-- v-if="$store.state.progressBar != null" -->
        <!-- :value="$store.state.progressBar" -->
        <b-progress
          max="100"
          variant="primary"
          show-progress
          height="20px"
          class="w-100"
        />
        <!-- <p class="bd2-medium">{{ $store.state.progressBar }}%</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

name: 'DropZone';
const props = defineProps({
  title: String,
  text: String,
  id: String,
  modelValue: {
    type: [Object],
  },
});
const emits = defineEmits(['setImage']);

const active = ref(false);

const toogleActive = () => {
  active.value = !active.value;
};

let dropzoneFile = ref('');

const drop = (e) => {
  dropzoneFile.value = e.dataTransfer.files[0];
  emits('setImage', dropzoneFile.value, props.id);
};

const selectedFile = () => {
  dropzoneFile.value = document.querySelector(`.${props.id}`).files[0];
  emits('setImage', dropzoneFile.value, props.id);
};
</script>

<style lang="scss" scoped>
.dropzone {
  border-radius: 8px;
  display: grid;
  padding: 16px;
  gap: 16px;
  background: linear-gradient(
    180deg,
    rgba(231, 187, 107, 0.1) 0%,
    rgba(232, 216, 138, 0.1) 100%
  );
  transition: 0.3s ease all;
  &__img {
    display: block;
    margin: 0 auto;
  }
  label {
    display: block;
    margin: 0 auto;
    padding: 25px;
    width: 100%;
    @media (max-width: 460px) {
      width: 90%;
      padding: 15px;
    }
  }
  input {
    display: none;
  }
  &__bar {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}
.card-profile {
  display: grid;
  padding: 16px;
  gap: 16px;
  background: linear-gradient(
    180deg,
    rgba(231, 187, 107, 0.1) 0%,
    rgba(232, 216, 138, 0.1) 100%
  );
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  &__drag {
    display: block;
    margin: 0 auto;
    padding: 16px;
    width: 100%;

    @media (max-width: 460px) {
      width: 90%;
    }
  }
  &__input {
    display: none;
  }
  &__title {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
  }
  &__upload {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: black;
  }
  &__text {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
    margin-top: 16px;
    span {
      font-weight: 500;
      color: black;
    }
  }
  &__subtitle {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
    color: #4a4946;
  }
}

.active-dropzone {
  background-color: rgba(51, 106, 179, 0.05);
}

.file-info {
  display: block;
  text-align: center;
  margin-top: 6px;
}
</style>
