<template>
  <h2 class="enter-x mb-3 text-center text-2xl font-bold xl:text-center xl:text-3xl">
    {{ getFormTitle }}
  </h2>
</template>
<script lang="ts" setup>
defineOptions({ name: 'LoginFormTitle' })

const { t } = useI18n()

const getFormTitle = computed(() => {
  return t('sys.login.signInFormTitle')
})
</script>
