<template>
  <header>
    <div class="head-container">
      <logo-blacktea class="logo-blacktea"></logo-blacktea>
      <div class="icons-collector">
        <a href="https://discord.com/invite/tfE8RMx8Dr" class="icons"
          ><discord class="icons"
        /></a>
        <language class="icons" @mouseover="this.showLan = true"> </language>
      </div>
      <ul id="lang-picker" v-show="showLan" @mouseleave="this.showLan = false">
        <li><button>English</button></li>
      </ul>
    </div>
  </header>
  <main>
    <div class="main-container">
      <div id="main-title">
        <p>你好</p>
        <p>世界</p>
      </div>
      <p>✨一款崭新的Rust后端框架</p>
      <div class="url-wrap" ref="urlList">
        <a
          href="https://github.com/KernelErr/blacktea"
          class="main-url"
          @mouseenter="applyStyle"
        >
          <span id="githubUrl-wrap"><github class="githubIcon" />Github</span>
        </a>
        <a
          href="https://blacktea.lirui.tech/"
          class="main-url"
          @mouseenter="applyStyle"
          >文档</a
        >
      </div>

      <div class="credit-wrap">
        <p>
          感谢
          <span class="credit-username">{{ username }}</span> 对项目的贡献。❤
        </p>
        <p>Commits: {{ commits }}</p>
      </div>
    </div>
  </main>
  <footer>
    <div class="footer-wrap">
      <div>备案号</div>
      <p>©2021 Black Tea Authors</p>
    </div>
  </footer>
</template> 

<script>
import logoBlacktea from "@/components/logo-Blacktea.vue";
import discord from "@/components/icon/discord.vue";
import language from "@/components/icon/language.vue";
import github from "@/components/icon/github.vue";

import { ref } from "vue";

export default {
  name: "zhHome",
  components: {
    logoBlacktea,
    discord,
    language,
    github,
  },
  setup() {
    const commits = ref(0);
    const username = ref("张三");
    const showLan = ref(false);

    return {
      commits,
      username,
      showLan,
    };
  },
  methods: {
    applyStyle(o) {
      o.target.classList.add("urlActivated");
      if (o.target.nextSibling) {
        o.target.nextSibling.classList.remove("urlActivated");
      } else if (o.target.previousSibling) {
        o.target.previousSibling.classList.remove("urlActivated");
      }
    },
    lanHover() {
      this.showLan = true;
    },
    lanLeave() {
      this.showLan = false;
    },
  },
  mounted() {
    const urlList = this.$refs.urlList.children;
    urlList[0].classList.add("urlActivated");
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
}
header,
footer {
  display: flex;
  flex-shrink: 0;
}
header {
  position: relative;
  height: 64px;
  align-items: center;
  width: 100%;
}
a {
  text-decoration: none;
}
.head-container {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: calc(100% - 60px);
  margin: 0 30px;
}
#lang-picker {
  position: absolute;
  right: 0;
  top: 100%;
  max-height: 200%;
  overflow: auto;
  list-style-type: none;
  z-index: 1;
  border: solid 1px #d0d0d0;
  border-radius: 5px;
}
#lang-picker button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  font-weight: bolder;
  padding: 6px 12px;
}
#lang-picker button:hover {
  color: #4eaaf1;
}
.logo-blacktea {
  display: inline-block;
  font-size: 32px;
}
.icons {
  height: 24px;
  cursor: pointer;
  margin-left: 12px;
}
.icons-collector {
  display: flex;
  align-items: center;
}
main {
  display: flex;
  box-sizing: border-box;
  flex: 1 0 auto;
  justify-content: center;
}
.main-container {
  margin-top: 48px;
}
#main-title {
  font-size: 72px;
  margin-bottom: 12px;
  font-weight: 600;
  text-shadow: 3px -3px 0 rgba(0, 0, 0, 0.075);
}
.main-container > p {
  font-weight: 600;
  margin-bottom: 24px;
}
.main-url {
  background-color: #cfe9ff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 12px;
  width: 150px;
  height: 40px;
  font-size: 24px;
  color: #ffffff;
  transition: background-color 0.5s;
}
.url-wrap {
  display: flex;
  align-items: center;
}
.main-url:nth-child(1) {
  margin-right: 10px;
}
.main-url:nth-child(2) {
  margin-left: 10px;
}
#githubUrl-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.githubIcon {
  height: 24px;
  width: 24px;
  margin-right: 12px;
}
.credit-wrap {
  width: 320px;
  margin-top: 60px;
  box-sizing: border-box;
  background-color: #fff;
  border: solid 1px #707070;
  border-radius: 12px;
  font-size: 16px;
  line-height: 36px;
  padding: 6px 0;
}
.credit-username {
  font-size: 12px;
}
footer {
  flex-direction: column;
}
.footer-wrap {
  width: calc(100% - 60px);
  margin: 0 auto;
  padding: 24px 0;
}
.footer-wrap > p {
  text-align: right;
  font-size: 12px;
}

.urlActivated {
  background-color: #4eaaf1;
}
</style>