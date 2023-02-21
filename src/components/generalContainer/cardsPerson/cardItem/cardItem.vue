<template>
    <div class="card__item">
        <div class="card__item-hero">
            <div class="card__item-circle" />
            <span>{{ product.title }}</span>
        </div>
        <div class="card__item-column">
            <span>{{ product.text }}</span>
            <div class="card__item-inner">
                <span><i /> {{ product.text_one }}</span>
                <span><i /> {{ product.text_two }}</span>
                <span><i /> {{ product.text_three }}</span>
                <span v-if="product.text_four"><i /> {{ product.text_four }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    product: {
        type: [Array, Object],
        default: () => []
    }
  }
}
</script>

<style  lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.card__item
  &-circle
    width: 70px
    height: 70px
    border-radius: 50%
    background: $grey-23
    margin-bottom: 30px
  &-hero
    width: 80%
    span
      font-family: 'Roboto'
      font-weight: 700
      font-size: 28px
      line-height: 120%
      color: $grey-21
  &-column
    margin-top: 1rem
    span
      font-family: 'Roboto'
      font-style: normal
      font-weight: 300
      font-size: 18px
      line-height: 140%
      color: $grey-21
  &-inner
    margin-top: 1rem
    display: flex
    flex-direction: column
    i
      display: inline-flex
      align-items: center
      width: 6px
      height: 6px
      background: $blue-1
      border-radius: 50%
      margin-bottom: 6px
      margin-right: 10px
    span
      font-family: 'Roboto'
      font-style: normal
      font-weight: 300
      font-size: 18px
      line-height: 160%
      color: $grey-21
      margin-top: 10px

</style>