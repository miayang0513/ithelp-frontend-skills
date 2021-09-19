export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  }
}

export const globalTypes = {
  darkMode: {
    name: 'Dark Mode',
    defaultValue: 'default',
    toolbar: {
      items: ['default', 'dark'],
      showName: true,
    }
  }
}

export const decorators = [(story, context) => {
  const darkModeColor = {
    default: 'auto',
    dark: '#333333'
  }
  return {
    component: { story },
    template: `<story style="background-color: ${darkModeColor[context.globals.darkMode]}"/>`
  }
}]