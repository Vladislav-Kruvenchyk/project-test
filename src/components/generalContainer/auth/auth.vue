<template>
    <div class="auth">
        <div class="auth__wrapper">
            <div class="auth__registration">
                <div class="auth__text">
                    <h1>
                        Lorem Ipsum <br> is simply dummy text
                    </h1>
                    <span>It is a long established <br> fact that a reader</span>
                </div>


                <div class="auth__form">
                    <form
                        class="js-form"
                        name="form"
                        method="POST"
                    >
                        <div
                            class="form__group"
                        >
                            <!--                            <div-->
                            <!--                                v-show="isActiveName"-->
                            <!--                                class="placeholder-name"-->
                            <!--                            >-->
                            <!--                                *-->
                            <!--                            </div>-->
                            <input
                                id="name"
                                class="auth__input name "
                                type="text"
                                placeholder="Name"
                                name="name"
                                data-reg="^[А-ЯЁ][а-яё]*$"
                                required
                                @focus="onFocusName"
                                @blur="onBlurName"
                            >
                        </div>
                        <div
                            class="auth__form-block "
                        >
                            <div style="width: 63%">
                                <!--                                <div-->
                                <!--                                    v-show="isActivePhone "-->
                                <!--                                    class="placeholder-phone"-->
                                <!--                                >-->
                                <!--                                    *-->
                                <!--                                </div>-->
                                <input
                                    id="phone"
                                    class="auth__input phone"
                                    type="text"
                                    placeholder="Phone"
                                    name="phone"
                                    data-reg="^((\+3|8)+([0-9]){10})$"
                                    required
                                    @focus="onFocusPhone"
                                    @blur="onBlurPhone"
                                >
                            </div>

                            <div style="width: 55.7%;">
                                <!--                                <div-->
                                <!--                                    v-show="isActiveEmail"-->
                                <!--                                    class="placeholder-email"-->
                                <!--                                >-->
                                <!--                                    *-->
                                <!--                                </div>-->
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="E-mail"
                                    name="email"
                                    data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
                                    class="auth__input email"
                                    required
                                    @focus="onFocusEmail"
                                    @blur="onBlurEmail"
                                >
                            </div>
                        </div>
                        <range-slider />
                        <div class="auth__form-block">
                            <div>
                                <input
                                    id="privacy_check"
                                    type="radio"
                                    class="auth__form checkbox"
                                >
                                <label
                                    class="checkbox__label"
                                    for="privacy_check"
                                >Lorem Ipsum is simply dummy text</label>
                            </div>
                            <base-button
                                type="submit"
                                value="Отправить"
                                button-style="
                                background: #0093E6;
                                text-transform: capitalize;
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 100%;"
                            >
                                Lorem Ipsum
                            </base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="auth__block-about">
                <div>
                    <h1>
                        It is a long established
                        fact that a reader
                    </h1>
                </div>
                <div>
                    <a href="">support@email.com</a>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BaseButton from "../../../../lib/js/components/BaseButton.vue";
import submitForm from "../../../../lib/js/halpers/submitForm";
import RangeSlider from "@/components/generalContainer/auth/range/rangeSlider.vue";
export default {
  name: "Auth",
  components: {
    RangeSlider,
    BaseButton,
  },
  data() {
    return {
      value: 0,
      isActiveName: true,
      isActivePhone: true,
      isActiveEmail: true
    }
  },
  mounted() {
    submitForm()
  },
  methods: {
    onFocusName() {
      this.isActiveName = false
    },
    onBlurName() {
      this.isActiveName = true
    },
    onFocusPhone() {
      this.isActivePhone = false
    },
    onBlurPhone() {
      this.isActivePhone = true
    },
    onFocusEmail() {
      this.isActiveEmail = false
    },
    onBlurEmail() {
      this.isActiveEmail = true
    },
  }

}
</script>



<style lang="sass" scoped>
@import "/lib/css/src/partials/colors"

.add
  width: 100px
  height: 100px
  background-color: red

.auth
  display: flex
  justify-content: center
  overflow-y: hidden
  padding-top: 15rem
  padding-right: 20px
  padding-bottom: 12rem
  padding-left: 20px

  &__wrapper
    display: flex
    justify-content: space-between
    width: 1270px
    margin-left: 70px
  &__block-about
    display: flex
    flex-direction: column
    justify-content: flex-end
    width: 32%
    padding-bottom: 60px
    padding-left: 5rem
    h1
      font-weight: 700
      font-size: 30px
      line-height: 100%
      color: $grey-21
      text-transform: inherit
      margin-bottom: 60px
    a
      font-weight: 700
      font-size: 24px
      line-height: 100%
      color: $blue-1
    p
      font-weight: 300
      font-size: 16px
      line-height: 120%
      color: $grey-21
      margin-top: 68px
  &__text
    margin-bottom: 3rem
  &__registration
    width: 50%
    h1
      font-weight: 700
      font-size: 50px
      line-height: 100%
      color: $grey-21
      margin-bottom: 7rem
      text-transform: inherit
    span
      font-weight: 700
      font-size: 30px
      line-height: 100%
      color: $grey-21
  &__form
    position: relative
    label
      font-weight: 400
      font-size: 16px
      line-height: 110%
      color: $grey-21

    input
      padding: 10px 0 10px 0
      outline: none
      border: none
      border-bottom: 1px solid black
      margin-right: 10px

    &-block
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between
      margin-top: 45px

  &__input
      &.name
        width: 100%
        &:focus ~ .placeholder-name,
        &:valid ~ .placeholder-name
          display: none
      &.email
        width: 100%
        &:focus ~ .placeholder-email,
        &:valid ~ .placeholder-email
          display: none
      &.phone
        width: 88%
        &:focus ~ .placeholder-phone,
        &:valid ~ .placeholder-phone
          display: none




.placeholder-name
  position: absolute
  transform: translate( 44px, 6px)
  pointer-events: none
  color: #0093E6


.placeholder-phone
  position: absolute
  transform: translate(44px, 6px)
  pointer-events: none
  color: #0093E6

.placeholder-email
  position: absolute
  pointer-events: none
  transform: translate(44px, 6px)
  color: #0093E6


</style>