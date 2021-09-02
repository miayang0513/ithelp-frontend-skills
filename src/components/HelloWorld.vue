<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
        vue-cli documentation
      </a>
      .
    </p>
    <select v-model="locale">
      <option
        v-for="item in localeOptions"
        :key="`locale-${item.lang}`"
        :value="item.lang"
      >
        {{ item.name }}
      </option>
    </select>
    <h3>{{ t("subTitle.installedCliPlugins") }}</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >
          {{ t("installedCliPlugins.babel") }}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >
          {{ t("installedCliPlugins.eslint") }}
        </a>
      </li>
    </ul>
    <h3>{{ t("subTitle.essentialLinks") }}</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">
          {{ t("essentialLinks.coreDocs") }}
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">
          {{ t("essentialLinks.forum") }}
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
          {{ t("essentialLinks.communityChat") }}
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
          {{ t("essentialLinks.twitter") }}
        </a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">
          {{ t("essentialLinks.news") }}
        </a>
      </li>
    </ul>
    <h3>{{ t("subTitle.ecosystem") }}</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">
          {{ t("ecosystem.vueRouter") }}
        </a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">
          {{ t("ecosystem.vuex") }}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >
          {{ t("ecosystem.vueDevtools") }}
        </a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">
          {{ t("ecosystem.vueLoader") }}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >
          {{ t("ecosystem.awesomeVue") }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const { t, locale } = useI18n()

    return {
      t,
      locale,
      localeOptions: [
        {
          lang: 'en',
          name: 'English'
        },
        {
          lang: 'zh',
          name: '繁體中文'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
