<template>
    <div>
        <div style="margin-top: 7rem">
            <vue-slider
                ref="slider"
                v-model="value"
                :max="6500"
            />
        </div>
        <div class="auth__range">
            <div
                class="range-line"
                style="border-bottom-left-radius: 2px; border-top-left-radius: 2px;"
            />
            <div class="range-y" />
            <div class="range-line" />
            <div class="range-y" />
            <div class="range-line" />
            <div class="range-y" />
            <div class="range-line" />
            <div class="range-y" />
            <div class="range-line" />
            <div class="range-y" />
            <div class="range-line" />
            <div class="range-y" />
            <div class="range-line" />
            <div class="range-y" />
            <div
                class="range-line"
                style="border-bottom-right-radius: 2px; border-top-right-radius: 2px;"
            />
        </div>

        <div class="auth__range-currencies">
            <span
                class="auth__range-text-currencies"
                style=" margin-left: 36px;"
            >500 грн</span>
            <span class="auth__range-text-currencies">1500 грн</span>
            <span class="auth__range-text-currencies">2500 грн</span>
            <span class="auth__range-text-currencies">3500 грн</span>
            <span class="auth__range-text-currencies">4500 грн</span>
            <span class="auth__range-text-currencies">5500 грн</span>
            <span
                class="auth__range-text-currencies"
                style=" margin-right: 26px;"
            >6500 грн</span>
        </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'
export default {
  name: "RangeSlider",
  components: {
    VueSlider
  },
  props: {

  },
  data() {
    return {
      value: 0,
    }
  },
}
</script>

<style lang="css">

.auth__range {
  display: flex;
  position: relative;
  bottom: 11px;
}

.auth__range-currencies {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 6px;
}

.auth__range-text-currencies {
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #B4B4B4;
}

.range-line {
  width: 12.2%;
  height: 4px;
  background: #B4B4B4;
  position: relative;
}

.range-y {
  position: relative;
  width: 4px;
  height: 10px;
  background-color: #B4B4B4;
  border-radius: 20px;
  bottom: 2px;
}



.auth {
  /*padding-left: 20rem;*/
  /*padding-right: 20rem;*/
  /*padding-top: 20rem;*/

}
.custom-label {
}
.custom-label.active {
  color: #3498db;
}


.vue-slider-dot-tooltip-top {
  width: 100px;
  height: 36px;
  top: -50px;
  left: -36px;
  transform: translate(0);
}

.vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner-top {
  transform: rotateZ(0deg);
  border-radius: 12px;
}
.vue-slider-dot-tooltip-inner-top {
  transform: translate(0) scale(0) rotate(0deg);
}
.vue-slider-dot-tooltip-inner {
  border-radius: 20px;
  border: 2px solid #0093E6;
  background-color: #fff;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.2s linear;
}

.vue-slider-dot-tooltip-inner-top .vue-slider-dot-tooltip-text {
  transform: rotateZ(0deg);
}
.vue-slider-dot-tooltip-text  {
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
  color: #4A4D4E;
  width: 95px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
}

.vue-slider-dot-handle::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200%;
  height: 200%;
  /* background-color: rgb(255 255 255 / 38%); */
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: -1;
  transition: transform 0.2s;
}



.vue-slider-dot-handle {
  cursor: pointer;
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 37%;
  background-color: #0093E6;
  box-sizing: border-box;
}


.vue-slider-marks {
  position: relative;
  width: 100%;
  height: 100%;
  background: #B4B4B4;
}

.vue-slider-ltr .vue-slider-mark-step, .vue-slider-rtl .vue-slider-mark-step {
  top: -2px;
}
.vue-slider-mark-step-active {
  background-color: #B4B4B4;
}

.vue-slider-mark-step {
  position: absolute;
  width: 4px;
  height: 10px;
  border-radius: 20%;
  background-color: #B4B4B4;
}

.vue-slider-ltr .vue-slider-mark-label {
  font-family: 'Roboto';
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #B4B4B4;
}

.vue-slider-mark-step-active {
  background-color: #B4B4B4;
}

.vue-slider-ltr .vue-slider-mark-step {
  left: -2px;
}

.vue-slider-process {
  background-color: #B4B4B4;
  border-radius: 15px;
}

.custom-label.active {
  color: #B4B4B4;
}

</style>