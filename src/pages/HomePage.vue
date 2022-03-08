<template>
  <div class="container-fluid">
    <div class="mb-3 row">
      <div class="col-3">
        <DatePicker />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Media :media="nasaMedia" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { picturesService } from "../services/PicturesService";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      nasaMedia: computed(() => AppState.currentPicture),
    };
  },
};
</script>

<style>
</style>