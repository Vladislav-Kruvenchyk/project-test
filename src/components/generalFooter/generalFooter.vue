<template>
    <div class="footer">
        <div class="footer__wrapper">
            <div class="footer__block">
                <div class="footer__inner">
                    <div style="display: flex; justify-content: space-between">
                        <div>
                            <icon-facebook />
                        </div>
                        <div>
                            <icon-instagram />
                        </div>
                        <div>
                            <icon-youtube />
                        </div>
                        <div>
                            <icon-twitter />
                        </div>
                    </div>
                    <div style="margin-bottom: 30px">
                        <address>© 2020 Vis-A-Vis</address>
                    </div>
                </div>
            </div>
            <div style="width: 55%">
                <div
                    v-for="item in itemsLorem"
                    :key="item.id"
                    class="footer__row"
                >
                    <div class="footer__item">
                        <span>{{ item.nameLorem }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameLorem_one }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameLorem_two }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameLorem_three }}</span>
                    </div>
                </div>
                <div
                    v-for="item in itemsIpsum"
                    :key="item.id"
                    class="footer__row"
                >
                    <div class="footer__item">
                        <span>{{ item.nameIpsum }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameIpsum_one }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameIpsum_two }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameIpsum_three }}</span>
                    </div>
                </div>

                <div
                    v-for="item in itemsDemmy"
                    :key="item.id"
                    class="footer__row"
                >
                    <div class="footer__item">
                        <span>{{ item.nameDemmy }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameDemmy_one }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameDemmy_two }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameDemmy_three }}</span>
                    </div>
                </div>
                <div
                    v-for="item in itemsText"
                    :key="item.id"
                    class="footer__row"
                >
                    <div class="footer__item">
                        <span>{{ item.nameText }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameText_one }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameText_two }}</span>
                    </div>
                    <div class="footer__item">
                        <span>{{ item.nameText_three }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconInstagram from "../../../lib/js/icons/iconInstagram.vue";
import IconFacebook from "../../../lib/js/icons/iconFacebook.vue";
import IconYoutube from "../../../lib/js/icons/iconYoutube.vue";
import IconTwitter from "../../../lib/js/icons/iconTwitter.vue";

export default {
  name: "GeneralFooter",
  components: {IconTwitter, IconYoutube, IconFacebook, IconInstagram},
  data() {
    return {
      itemsLorem: [
        {id: 1, nameLorem: 'Lorem', nameLorem_one: 'Ipsum', nameLorem_two: 'Ipsum' },
      ],
      itemsIpsum: [
        {id: 2, nameIpsum: 'Ipsum', nameIpsum_one: 'Ipsum', nameIpsum_two: 'Ipsum' },
      ],
      itemsDemmy: [
        {id: 3, nameDemmy: 'Demmy', nameDemmy_one: 'Demmy', nameDemmy_two: 'Demmy' },
      ],
      itemsText: [
        {id: 4, nameText: 'Text', nameText_one: 'Text', nameText_two: 'Text' },
      ]

    }
  }
}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.footer
  width: 100%
  height: 420px
  background: $black-1
  padding-left: 20px
  padding-right: 20px
  &__block
      width: 16%
      display: flex
      justify-content: space-between
  &__wrapper
    display: flex
    justify-content: space-around
    padding-top: 7rem
  &__inner
    display: flex
    width: 100%
    flex-direction: column
    justify-content: space-between
    margin-left: 49px
    address
      font-family: 'Roboto'
      font-style: normal
      font-weight: 400
      font-size: 18px
      line-height: 100%
      color: $white-1

  &__row
    display: grid
    grid-template-columns: repeat(3, 20%)
    justify-content: space-between
    margin-bottom: 30px
  &__item
    display: flex
    justify-content: flex-start
    span
      font-family: 'Roboto'
      font-weight: 400
      font-size: 24px
      line-height: 100%
      text-align: center
      cursor: pointer
      color: $white-1

</style>