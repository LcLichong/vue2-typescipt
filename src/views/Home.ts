import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue/types/umd'
import Footer from '../components/Footer/index'

@Component({
  components: {
    Footer
  },
  mixins: [],
})

export default class Home extends Vue {
  render(h: CreateElement): VNode {
    return h('div', {
      'attrs': {
        'id': 'home'
      }
    }, [
      '<Footer></Footer>'
    ])
  }
}