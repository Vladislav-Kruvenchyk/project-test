<template>
    <div class="advantages">
        <div class="advantages__container">
            <img
                :src="require(`/lib/img/ian-dooley.png`)"
                alt=""
            >
            <div class="advantages__title">
                <h1>Lorem <br>  Ipsum <br>  is simply</h1>
            </div>
        </div>
        <advantages-info />
    </div>
</template>

<script>
import AdvantagesInfo from "@/components/generalContainer/ advantages/advantagesInfo/advantagesInfo.vue";

export default {
  name: "Advantages",
  components: {AdvantagesInfo}
}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"
.advantages
    position: relative
    display: flex
    width: 100%
    flex-direction: column
    background: $white-2
    margin-bottom: 20rem
    &__container
      display: flex
      justify-content: right
      margin-left: 13.5rem
      img
        width: 100%
        height: 700px
    &__title
      position: absolute
      top: 287px
      left: 315px
      h1
        font-weight: 700
        font-size: 180px
        line-height: 90%
        color: $grey-22
        text-transform: inherit


</style>