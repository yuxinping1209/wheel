<template>
  <button :class="{[`icon-${iconPosition}`]:iconPosition}" class="g-button" @click="$emit('click')">
    <g-icon v-if="loading" class="loading icon" name="loading2"></g-icon>
    <div class="content">
      <slot/>
    </div>
    <g-icon v-if="icon&&!loading" class="icon" :name="icon"/>
  </button>
</template>
<script>
export default {
  // props:['icon','iconPosition']
  props: {
    icon: {},
    iconPosition: {
      type: String,
      // default:'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right')
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss">
.loading {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  .content {
    order: 2;
  }

  .icon {
    order: 1;
    margin-right: 0.5rem;
  }

  &.icon-right {
    .content {
      order: 1;
    }

    .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.5rem;
    }
  }


}


</style>