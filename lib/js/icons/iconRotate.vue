<template>
    <svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="rotate"
    >
        <g filter="url(#filter0_d_3_29)">
            <path
                d="M65 112.5C55.6054 112.5 46.4217 109.714 38.6104 104.495C30.7991 99.2754 24.7109 91.857 21.1157 83.1775C17.5206 74.498 16.5799 64.9473 18.4127 55.7332C20.2455 46.5191 24.7694 38.0554 31.4124 31.4124C38.0554 24.7694 46.5191 20.2455 55.7332 18.4127C64.9473 16.5799 74.498 17.5206 83.1775 21.1157C91.857 24.7109 99.2754 30.7991 104.495 38.6104C109.714 46.4217 112.5 55.6054 112.5 65"
                stroke="url(#paint0_linear_3_29)"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_3_29"
                x="0"
                y="-2.28882e-05"
                width="130"
                height="130"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.577255 0 0 0 0 0.901961 0 0 0 0.6 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3_29"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3_29"
                    result="shape"
                />
            </filter>
            <linearGradient
                id="paint0_linear_3_29"
                x1="65"
                y1="15"
                x2="65"
                y2="115"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#0093E6" />
                <stop
                    offset="1"
                    stop-color="#0093E6"
                    stop-opacity="0"
                />
            </linearGradient>
        </defs>
    </svg>
</template>

<script>
export default {
  name: "IconRotate",
  props: {
    width: {
      type: Number,
      default: 130
    },
    height: {
      type: Number,
      default: 130
    }
  }

}
</script>

<style lang="sass" scoped>
.rotate
  animation-name: example
  animation-duration: 5s
  animation-iteration-count: infinite
  animation-timing-function: linear
  border-radius: 50%
  //filter: drop-shadow(0px 0px 15px rgba(0, 147, 230, 0.6))

@keyframes example
  from
    transform: rotate(0deg)

  to
    transform: rotate(360deg)
</style>