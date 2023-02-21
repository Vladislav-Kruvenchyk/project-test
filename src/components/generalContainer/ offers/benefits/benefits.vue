<template>
    <div class="benefits">
        <div class="benefits__wrapper">
            <div class="benefits__block-intro">
                <div class="benefits__block-intro title">
                    <h1>Lorem Ipsum is simply</h1>
                    <hr>
                </div>
                <div class="benefits__list">
                    <div
                        v-for="item in benefits"
                        :key="item.id"
                        class="benefits__list-item"
                    >
                        <div class="benefits__list-block">
                            <span>{{ item.number }}</span>
                            <div class="benefits__list-title">
                                <p>{{ item.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="benefits__block-info">
                <div style="transform: translateX(-119px) translateY(190px)">
                    <img
                        width="90%"
                        :src="require(`/lib/img/Rectangle 46.png`)"
                        alt=""
                    >
                </div>
                <div
                    style="width: 490px; margin-top: 180px; margin-left: 55px;
"
                >
                    <div>
                        <h1>There are many variations of passages</h1>
                        <span>of Lorem Ipsum available, but the majority have suffered alteration in some form</span>
                    </div>
                    <div class="benefits__block-list">
                        <ul>
                            <li
                                v-for="(index) in 6"
                                :key="index"
                            >
                                <div class="benefits__block-list circle" /> Lorem Ipsum
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Benefits",
  data() {
    return {
      benefits: [
        { id: 1, number: '01', title: 'Contrary to popular belief, Lorem Ipsum' },
        { id: 2, number: '02', title: 'It was popularised in the 1960s with the release' },
        { id: 3, number: '03', title: 'Random text it has roots in a piece of classical' },
        { id: 4, number: '04', title: 'If you are going to use a passage of Lorem Ipsum' },
        { id: 5, number: '05', title: 'Latin literature from 45 BC, making it over 2000 years old' },
        { id: 6, number: '06', title: 'There are many variations of passages of Lorem Ipsum' },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.benefits
  position: relative
  margin-top: -272px
  z-index:-1
  margin-left: 7.5rem
  margin-bottom: 20rem
  height: 1300px
  background: $white-2
  &__wrapper
    position: absolute
    display: flex
    flex-direction: column
    width: 100%
  &__block-intro
    display: flex
    width: 90%
    flex-direction: column
    align-items: center
    margin-top: 10rem
    &.title
      flex-direction: row
      h1
        font-weight: 700
        font-size: 40px
        line-height: 100%
        text-transform: inherit
        color: #4A4D4E
        margin-left: 45px
      hr
        border: none
        height: 3px
        width: 66%
        background: #E5E5E5

  &__list
    display: flex
    flex-wrap: wrap
    margin-top: 4rem
    margin-left: 85px
    &-item
      display: flex
      flex-basis: 50%
      justify-content: center
      margin-top: 50px
    &-block
     display: flex
     align-items: center
     gap: 15px
     width: 80%
    span
      font-weight: 400
      font-size: 50px
      color: $blue-1
      margin-bottom: 15px
    p
      font-weight: 400
      font-size: 24px
      line-height: 140%
      color: $grey-21
  &__block-info
    position: relative
    display: flex
    h1
      font-weight: 700
      font-size: 30px
      line-height: 120%
      color: $grey-21
      text-transform: inherit
      margin-bottom: 1rem
    span
      margin-top: 3rem
      font-weight: 300
      font-size: 18px
      line-height: 140%
      color: $grey-21


  &__block-list
    &.circle
      width: 8px
      height: 8px
      background: $blue-1
      border-radius: 50%
      margin-right: 15px
    ul
      display: grid
      grid-template-columns: repeat(2, 240px)
      margin-top: 2rem
    li
      display: flex
      align-items: center
      font-weight: 700
      font-size: 20px
      line-height: 100%
      margin-top: 20px
      color: $grey-21


</style>