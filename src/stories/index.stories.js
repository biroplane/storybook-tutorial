import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import MyButton from "../components/MyButton.vue";

export default {
  component: MyButton,
  title: "Button",
  decorators: [withKnobs]
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") }
});

export const withJSX = () => ({
  render() {
    return (
      <MyButton onClick={linkTo("Button", "With Some Emoji")}>
        With JSX
      </MyButton>
    );
  }
});

export const withSomeEmoji = () => ({
  components: { MyButton },
  template: "<my-button>😀 😎 👍 💯</my-button>"
});
export const exampleWithKnobs = () => ({
  components: { MyButton },
  props: {
    isDisabled: {
      default: boolean("Disabled", false)
    },
    text: {
      default: text("Text", "Hello Storybook")
    }
  },
  template: `<MyButton :isDisabled="isDisabled" v-html="text"></MyButton>`
});
