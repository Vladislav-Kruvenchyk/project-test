<template>
    <div class="header">
        <nav class="header__navbar">
            <ul class="header__navbar navbar-items">
                <li>
                    <icon-logo
                        :width="58"
                        :height="55"
                    />
                </li>
                <li><a href="#">Lorem</a> </li>
                <li><a href="#">Ipsum</a> </li>
                <li><a href="#">Simply</a> </li>
                <li><a href="#">Dummy</a> </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import IconLogo from "../../../lib/js/icons/iconLogo.vue";

export default {
  name: "GeneralHeader",
  components: {
    IconLogo
  },

}
</script>

<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"
.header
  display: flex
  padding-right: 20px
  padding-left: 20px
  justify-content: right

  &__navbar
    display: flex
    width: 100%
    margin-left: 5.5rem
    height: 90px
    &.navbar-items
      align-items: center
      li
       margin: 0 20px
       font-weight: 300
       font-size: 24px
       line-height: 28px
       color: $grey-21
       cursor: pointer
      a
        text-decoration: none



</style>