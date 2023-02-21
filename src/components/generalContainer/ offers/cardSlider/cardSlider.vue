<template>
    <div
        style="margin-top: 4rem; padding-left: 23rem;
    padding-right: 13rem;"
    >
        <div
            class="slider__title"
            style=""
        >
            <h1>Lorem</h1>
        </div>
        <div>
            <ssr-carousel
                :slides-per-page="3"
                :loop="true"
                :show-dots="true"
                show-arrows
                :peek="0"
                :center="true"

                :no-drag="true"
                :responsive="[
                    {
                        maxWidth: 1920,
                        slidesPerPage: 3,
                    },
                    {
                        maxWidth: 1024,
                        slidesPerPage: 3,
                    },
                    {
                        maxWidth: 767,
                        slidesPerPage: 3,
                    }
                ]"
            >
                <template #back-arrow="{ disabled }">
                    <div class="slider__card-arrow">
                        <icon-arrow-left
                            :height="40"
                            :width="40"
                        /> {{ disabled ? "(Disabled)" : '' }}
                    </div>
                </template>
                <div
                    v-for="item in items"
                    :key="item.id"
                >
                    <div class="slider__card">
                        <div class="slider__card-item-title">
                            <div class="slider__card-item-title-circle" />
                            <h1>{{ item.title }}</h1>
                        </div>
                        <div class="slider__card-inner">
                            <div class="slider__card-item-desc">
                                <div class="slider__card-item-desc-circle" /><span>{{ item.advantages_one }}</span>
                            </div>
                            <div class="slider__card-item-desc">
                                <div class="slider__card-item-desc-circle" /><span>{{ item.advantages_two }}</span>
                            </div>
                            <div class="slider__card-item-desc">
                                <div class="slider__card-item-desc-circle" /><span>{{ item.advantages_three }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <template #next-arrow="{ disabled }">
                    <div class="slider__card-arrow">
                        <icon-arrow-right
                            :width="40"
                            :height="40"
                        /> {{ disabled ? "(Disabled)" : '' }}
                    </div>
                </template>
            </ssr-carousel>
        </div>
    </div>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
import IconArrowRight from "../../../../../lib/js/icons/iconArrowRight.vue";
import IconArrowLeft from "../../../../../lib/js/icons/iconArrowLeft.vue";

export default {
  name: "CardSlider",
  components: {
    IconArrowLeft,
    IconArrowRight,
    SsrCarousel
  },
  data() {
    return {
      ssrCarouselCss,
      items: [
        {
         id: 1,
         title: 'Lorem Ipsum ',
         advantages_one: 'It is a long established fact that a reader will be distracted',
         advantages_two: 'The readable content',
         advantages_three: 'There are many variations of passages'
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 3,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 4,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 5,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 6,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 7,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 8,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        },
        {
          id: 9,
          title: 'Lorem Ipsum',
          advantages_one: 'It is a long established fact that a reader will be distracted',
          advantages_two: 'The readable content',
          advantages_three: 'There are many variations of passages'
        }
      ]

    }
  }
}
</script>

<style lang="sass">
@import "/lib/css/src/partials/colors"

.slider__card
    display: flex
    flex-direction: column
    justify-content: center
    width: 360px
    height: 460px
    background: $white-1
    border-radius: 20px
    &-item-title
      display: flex
      flex-direction: row
      justify-content: flex-start
      align-items: center
      gap: 20px
      margin-left: 40px
      h1
        text-transform: inherit
        width: 100px
        font-weight: 400
        font-size: 36px
        line-height: 90%
        color: $grey-21
    &-item-title-circle
      width: 70px
      height: 70px
      background: $grey-23
      border-radius: 50%

    &-inner
      display: flex
      flex-direction: column

    &-item-desc
      display: flex
      align-items: flex-start
      justify-content: center
      gap: 20px
      margin-top: 30px
      span
        font-weight: 300
        font-size: 18px
        line-height: 140%
        color: $grey-21
        width: 66%

    &-item-desc-circle
      width: 8px
      height: 8px
      background: $blue-1
      border-radius: 50%
      margin-top: 6px

    &-arrow
      display: inline-flex
      justify-content: center
      align-items: center
      width: 60px
      height: 60px
      background: $white-1
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06)
      border-radius: 10px
.slider__title
  position: relative
  transform: translateX(-251px) translateY(155px)
  h1
    text-transform: inherit
    font-weight: 700
    font-size: 50px
    line-height: 110%
    color: $grey-21


.ssr-carousel-track
    margin-bottom: 32px
.ssr-carousel-dot-icon
  background: $grey-23
  border: none
.ssr-carousel-dot-button
  margin-left: 15px
.ssr-carousel-next-button
  right: -20px
.ssr-carousel-back-button
  left: -95px
</style>