<template>
  <div class="min-h-screen bg-Lightgray">
    <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div class="w-[270px] flex flex-col bg-White p-4 rounded-2xl items-center font-outfit drop-shadow-xl">
        <div class="qrCode mb-4">
          <img class="h-[250px] rounded-2xl" src="images/image-qr-code.png"/>
        </div>
        <div class="title text-center mb-4">
          <span class="font-[700] text-[20px] text-Darkblue">Improve your front-end skills by building projects</span>
        </div>
        <div class="textFill text-center mb-6">
          <p class="text-[14px] font-[400] text-Grayishblue leading-5 tracking-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
