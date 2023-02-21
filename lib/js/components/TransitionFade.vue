<template>
    <transition
        name="fade"
        :mode="mode"
        appear
    >
        <slot />
    </transition>
</template>

<script>
export default {
  name: "TransitionFade",
  props: {
    mode: String
  }
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .2s

.fade-enter, .fade-leave-to
  opacity: 0
  transition: opacity .2s
</style>