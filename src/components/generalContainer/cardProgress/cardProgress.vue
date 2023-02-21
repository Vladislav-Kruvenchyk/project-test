<template>
    <div class="card">
        <div class="card__block">
            <div class="card__title">
                <h1>Lorem Ipsum</h1>
                <hr>
            </div>

            <div
                v-if="isActive"
                id="scrollObject"
                style="margin-top: 4rem; margin-left: 110px"
            >
                <transition-group
                    name="item"
                    tag="div"
                    style="display: flex;"
                    appear
                    @after-enter="showAppear"
                >
                    <div
                        v-for="(item) in itemsToShow"
                        :key="item.id"
                        style="flex-basis: 20%"
                    >
                        <div class="card__list">
                            <img
                                :src="require(`/lib/img/cardProgress/` + item.img)"
                                alt=""
                            >
                            <div class="card__line-progress">
                                <div class="card__line-circle-border">
                                    <div class="card__line-circle" />
                                </div>

                                <div class="item" />
                                <div class="card__line-disabled" />
                            </div>

                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div class="card__block-btn">
                <hr>
                <div class="card__button">
                    <base-button
                        type="button"
                        button-style="
                    width: 230px;
                    height: 50px;
                    background: #0093E6;
                    border-radius: 10px;
                    margin-left: 20px;
                    text-transform: inherit;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 100%;
                    overflow-x: hidden;"
                    >
                        Lorem Ipsum
                    </base-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from "../../../../lib/js/components/BaseButton.vue";
export default {
  name: "CardProgress",
  components: {BaseButton},
  data() {
    return {
      pageY: 0,
      numShow: 0,
      isActive: false,
      progress: [
        {id: 1, name: 'Lorem Ipsum is simply dummy', img: '1.png'},
        {id: 2, name: 'Lorem Ipsum is simply dummy', img: '2.png'},
        {id: 3, name: 'Lorem Ipsum is simply dummy', img: '3.png'},
        {id: 4, name: 'Lorem Ipsum is simply dummy', img: '4.png'},
        {id: 5, name: 'Lorem Ipsum is simply dummy', img: '5.png'},
      ]
    }
  },
  computed: {
    itemsToShow() {
      return this.progress.slice(0, this.numShow);
    },
  },
  mounted() {
    this.run();
    document.getElementById("scrollObject");
    window.addEventListener("scroll",() => {
      let page = window.pageYOffset
      if(page >=  3350) {
        this.isActive = true
      }
    });


  },
  methods: {
    run() {
      this.numShow += ({
        0: 1,
        [this.progress.length]: -1,
      })[this.numShow] || 0;
    },
    showAppear() {
      this.numShow = Math.min(this.progress.length, this.numShow + 1);
    },
  },
}
</script>

<style  lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.card
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  &__block
    width: 73%
    margin-right: 40px
    &-btn
      margin-top: 10rem
      @extend .card__title
      hr
        margin-left: 130px
        width: 90%
  &__title
      display: flex
      justify-content: space-between
      align-items: center
      hr
        width: 100%
        height: 3px
        background: #E5E5E5
        border: none
      h1
        //width: 27%
        width: 409px
        font-weight: 700
        font-size: 50px
        line-height: 120%
        text-transform: inherit

  &__list
    gap: 40px
    margin-left: 24px
    img
      margin-bottom: 25px
    span
      font-weight: 700
      font-size: 20px
      line-height: 100%
      color: $grey-21
  &__line
    width: 6500%
    height: 3px
    background: $blue-1
    margin-left: 25px
    &-progress
      display: flex
      align-items: center
      margin-bottom: 31px
    &-circle-border
      height: 16px
      border: solid 2px $blue-1
      border-radius: 50%
      margin-right: 1px
    &-circle
      width: 8px
      height: 8px
      margin-top: 2px
      margin-left: 2px
      margin-right: 2px
      border-radius: 50%
      background: $blue-1
      box-shadow: 0px 0px 8px rgba(230, 0, 0, 0.2)


    &-disabled
      width: 100%
      height: 2px
      margin-left: -1px
      background: $grey-24
.item
  display: inline-flex
  justify-content: center
  align-items: center
  width: 13000%
  height: 2px
  margin-left: -1px
  background-color: $blue-1
  animation-duration: 10.9s
  animation-name: slidein


.item-enter-active,
.item-leave-active
  transition: opacity 0.4s
  transition: 1s

.item-enter,
.item-leave-to
  opacity: 0

@keyframes slidein

  from
    background: $blue-1
    width: 0%

  to
    transition: 0.9s
    width: 13000%

</style>