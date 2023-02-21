<template>
<div >
  <card-slider/>
  <benefits/>
</div>
</template>

<script>
import CardSlider from "@/components/generalContainer/ offers/cardSlider/cardSlider.vue";
import Benefits from "@/components/generalContainer/ offers/benefits/benefits.vue";

export default {
  name: "Offers",
  components: {Benefits, CardSlider},
}
</script>

<style scoped>

</style>