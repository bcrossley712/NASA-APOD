<template>
  <label for="date-picker" class="form-label">Pick a Date</label>
  <input
    type="date"
    class="form-control"
    name="date-picker"
    id="date-picker"
    placeholder=""
    v-model="datePicker"
    @change="getPicture()"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { picturesService } from "../services/PicturesService";
export default {
  setup() {
    const datePicker = ref({});
    return {
      datePicker,
      async getPicture() {
        try {
          await picturesService.getPicture(datePicker.value);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error.message);
        }
      },
    };
  },
};
</script>

<style>
</style>