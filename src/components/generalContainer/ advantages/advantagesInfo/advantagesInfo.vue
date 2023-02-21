<template>
    <div class="advantages__info">
        <div class="advantages__info-wrap">
            <div class="advantages__info-desc">
                <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                <div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <base-button button-style="margin-top: 100px; background: #0093E6; width: 290px; height: 50px; font-size: 18px; text-transform: initial;">
                        Lorem Ipsum
                    </base-button>
                </div>
            </div>

            <div
                class="advantages__info-card"
            >
                <div
                    v-for="item in advantages"
                    :key="item.id"
                    class="advantages__info-card items"
                >
                    <div class="advantages__info-card  circle" />
                    <span>{{ item.title }}</span>
                </div>
            </div>


            <div class="advantages__info-img">
                <img
                    :src="require(`/lib/img/Rectangle 36.png`)"
                    alt=""
                >
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from "../../../../../lib/js/components/BaseButton.vue";

export default {
  name: "AdvantagesInfo",
  components: {BaseButton},
  data() {
    return {
      advantages:[
        {id: 1, title: 'It is a long established fact that a reader'},
        {id: 2, title: 'The point of using Lorem Ipsum is that'},
        {id: 3, title: 'Many desktop publishing packages'},
        {id: 4, title: 'There are many variations of passages'},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.advantages__info
  margin-left: 13.5rem
  margin-top: 20rem
  &-wrap
    display: flex
    align-items: center
    justify-content: space-between
  &-desc
    display: flex
    flex-direction: column
    width: 32%
    padding-right: 20px
    h1
      font-family: 'Roboto'
      font-weight: 700
      font-size: 40px
      line-height: 120%
      text-transform: capitalize
      color: #4A4D4E
      margin-bottom: 20px
    p
      font-weight: 300
      font-size: 18px
      line-height: 140%
      color: $grey-21
      margin-bottom: 20px

  &-card
    display: flex
    flex-direction: column
    justify-content: center
    gap: 50px
    &.items
      flex-direction: row
      align-items: center
    &.circle
      width: 54px
      height: 54px
      border-radius: 50%
      background: $grey-23
    span
      width: 50%
      font-weight: 700
      font-size: 18px
      line-height: 120%
      color: $grey-21

  &-img
    padding-right: 11rem
    transform: translateY(60px)
    img
      width: 100%
      height: 680px
</style>