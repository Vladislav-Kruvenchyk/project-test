<template>
    <div>
        <general-header />
        <advantages />
        <offers />
        <card-progress />
        <card-persons />
        <auth />
        <general-footer />
    </div>
</template>

<script>
import GeneralHeader from "@/components/generalHeader/generalHeader.vue";
import Advantages from "@/components/generalContainer/ advantages/advantages.vue";
import Offers from "@/components/generalContainer/ offers/Offers.vue";
import CardProgress from "@/components/generalContainer/cardProgress/cardProgress.vue";
import CardPersons from "@/components/generalContainer/cardsPerson/cardPersons.vue";
import Auth from "@/components/generalContainer/auth/auth.vue";
import GeneralFooter from "@/components/generalFooter/generalFooter.vue";


export default {
  name: "GeneralContainer",
  components: {
    GeneralHeader,
    Auth,
    CardPersons,
    CardProgress,
    Offers,
    Advantages,
    GeneralFooter
  },
  data() {
    return {
    }
  },
}
</script>

