<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
import './button.css'
import { reactive, computed } from 'vue'

export default {
  name: 'my-button',

  props: {
    /**
     * This is label
     */
    label: {
      type: String,
      required: true
    },
    /**
     * This is primary
     */
    primary: {
      type: Boolean,
      default: false,
    },
    /**
     * This is size
     */
    size: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
    /**
     * This is backgroundColor
     */
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup (props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick () {
        emit('click')
      }
    }
  },
};
</script>
