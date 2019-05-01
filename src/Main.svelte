<div class="flex w-screen h-screen">
  <div class="w-12 h-full bg-black-lighter">
    <div class="w-12 h-12 p-3 bg-black text-white">
      <HomeIcon></HomeIcon>
    </div>
    <div class="w-12 h-12 p-3 text-grey hover:text-white cursor-pointer">
      <SettingsIcon></SettingsIcon>
    </div>
  </div>

  <div class="w-64 h-full bg-black">
    <div class="w-full h-12 p-3 pl-6 flex items-center text-lg font-semibold text-grey-lighter">
      App A
    </div>

    <div class="w-full h-12 p-2 pl-6 pr-3 flex items-center text-sm font-semibold text-white border-r-8 border-blue">
      Module A
    </div>
    <div class="w-full">
      <div class="w-full h-10 pl-8 pr-3 flex items-center text-sm font-base text-grey-lighter hover:bg-black-darker hover:border-r-6 hover:border-green cursor-pointer">
        Submodule A1
      </div>
      <div class="w-full h-10 pl-8 pr-3 flex items-center text-sm font-semibold text-white bg-black-darker border-r-6 border-blue">
        Submodule A2
      </div>
      <div class="w-full h-10 pl-8 pr-3 flex items-center text-sm font-base text-grey-lighter hover:bg-black-darker hover:border-r-6 hover:border-green cursor-pointer">
        Submodule A3
      </div>
    </div>

    <div class="w-full h-12 p-2 pl-6 pr-3 flex items-center text-sm text-grey-lighter hover:bg-black-darker hover:border-r-8 hover:border-green cursor-pointer">
      Module B
    </div>
    <div class="w-full h-12 p-2 pl-6 pr-3 flex items-center text-sm text-grey-lighter hover:bg-black-darker hover:border-r-8 hover:border-green cursor-pointer">
      Module C
    </div>
  </div>

  <div class="flex-1 h-full overflow-auto bg-grey-lighter">
    <div class="fixed w-full h-16 bg-white">
      Header
    </div>

    <div class="w-full mt-16">
      <div>Content</div>
    </div>
  </div>
</div>

<script>
  import HomeIcon from './common/icons/HomeIcon.svelte'
  import SettingsIcon from './common/icons/SettingsIcon.svelte'

  export default {
    components: {
      HomeIcon, SettingsIcon
    }
  }
</script>
