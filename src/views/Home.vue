<template>
  <div id="home">
    <Footer :FooterList="FooterList" @menuClick="menuClick"></Footer>
  </div>
</template>

<script lang="ts">
interface urlOb {
  url: string;
}

import { Component, Vue } from 'vue-property-decorator';
import Footer from '../components/Footer/index';

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {
  private FooterList: Array<any> = [
    {
      idx: 1,
      name: '底部导航一',
      menuList: [
        {
          name: 'CUI',
          url: '/CUIView',
          idx: 'menu1',
        },
        {
          name: 'Vant',
          url: '/VantHeader',
          idx: 'menu2',
        },
      ],
    },
    {
      idx: 2,
      name: '底部导航二',
      menuList: [
        {
          name: '菜单3',
          url: 'http://www.baidu.com',
          idx: 'menu3',
        },
        {
          name: '菜单4',
          url: '',
          idx: 'menu4',
        },
      ],
    },
    {
      idx: 3,
      name: '底部导航三',
      menuList: [
        {
          name: '菜单5',
          url: 'xxxxx',
          idx: 'menu5',
        },
        {
          name: '菜单6',
          url: '',
          idx: 'menu6',
        },
      ],
    },
  ];

  menuClick(m: urlOb): void {
    if (!m.url) {
      alert('尽情期待');
    } else if (m.url.substring(0, 1) === '/') {
      this.$router.push({ path: m.url });
    } else if (m.url.startsWith('http') || m.url.startsWith('https')) {
      window.location.href = m.url;
    } else {
      alert('链接格式不正确');
    }
  }
}
</script>

<style lang="less">
#home {
  height: 100vh;
}
</style>