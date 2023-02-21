<template>
    <div>
        <div class="card">
            <div
                class="icon-rotate"
            >
                <icon-rotate />
            </div>
            <div class="card wrapper">
                <card-item
                    v-for="item in randomItem"
                    :key="item.id"
                    :product="item"
                />
            </div>
        </div>
        <div class="card__block">
            <div class="card__block-wrap">
                <div
                    v-for="(el, index) in 3"
                    :key="index"
                    class="card__block-list"
                >
                    <div class="card__block-item-circle" />
                    <span>Lorem Ipsum <br> is simply</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from "@/components/generalContainer/cardsPerson/cardItem/cardItem.vue";
import IconRotate from "../../../../lib/js/icons/iconRotate.vue";
export default {
  name: "CardPersons",
  components: {IconRotate, CardItem},
  data() {
    return {
      items: [
        {
         id: 1,
         title: 'Lorem Ipsum is simply dummy text',
         text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
         text_one: 'Lorem Ipsum has been the industry',
         text_two: 'Standard dummy text ever since',
         text_three: 'But also the leap into electronic typesetting',
        },
        {
          id: 2,
          title: 'Lorem Ipsum is simply dummy text',
          text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          text_one: 'Lorem Ipsum has been the industry',
          text_two: 'Standard dummy text ever since',
          text_three: 'But also the leap into electronic typesetting',
          text_four: 'It was popularised in the 1960s'
        },
        {
          id: 3,
          title: 'Lorem Ipsum is simply dummy text',
          text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          text_one: 'Lorem Ipsum has been the industry',
          text_two: 'Standard dummy text ever since',
          text_three: 'But also the leap into electronic typesetting'
        },
        {
          id: 4,
          title: 'Lorem Ipsum is simply dummy text',
          text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          text_one: 'Lorem Ipsum has been the industry',
          text_two: 'Standard dummy text ever since',
          text_three: 'But also the leap into electronic typesetting'
        },
        {
          id: 5,
          title: 'Lorem Ipsum is simply dummy text',
          text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          text_one: 'Lorem Ipsum has been the industry',
          text_two: 'Standard dummy text ever since',
          text_three: 'But also the leap into electronic typesetting'
        }
      ],
      randomMovie: null
    }
  },
  computed: {
    randomItem() {
      return this.items.sort(() => Math.random() - 0.5)
    }
  },


}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.card
  display: flex
  background: $white-2
  padding-left: 20px
  padding-right: 20px
  margin-top: 10rem
  &.wrapper
    display: grid
    justify-content: center
    grid-template-columns: repeat(3 , 23%)
    gap: 90px
    margin-top: 10rem
    margin-bottom: 23rem
    margin-left: 22px
.icon-rotate
    position: relative
    top: 130px
    left: 16.7%

.card__block
  display: flex
  align-items: center
  justify-content: flex-end
  margin-top: -140px

  &-wrap
    display: flex
    justify-content: space-around
    align-items: center
    width: 81.2%
    height: 280px
    border-radius: 30px 0px 0px 30px
    background: $blue-1
  &-list
      display: inline-flex
      align-items: center
  &-item-circle
    width: 100px
    height: 100px
    background: rgba(249, 249, 249, 0.5)
    border-radius: 50%
    margin-right: 35px
  span
      font-family: 'Vodafone Rg'
      font-weight: 400
      font-size: 32px
      line-height: 100%
      color: $white-1

</style>
