import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue/types/umd'
import './index.less'

@Component
export default class Footer extends Vue {

  @Prop({
    default: []
  }) FooterList!: Array<any>

  show = true
  idx = 0
  width = 0

  showMenu(idx: number): void {
    this.idx = idx === this.idx ? 0 : idx
  }

  menuClick(m: string, e: Event): void {
    e = window.event || e
    if (e.stopPropagation) {
      e.stopPropagation() // IE下阻止事件冒泡
    } else if (e.cancelBubble) {
      e.cancelBubble = true // 其他浏览器阻止事件冒泡
    }
    this.$emit('menuClick', m)
  }

  getFooter(): Array<any> {
    const h = this.$createElement
    const VNodeArray = []

    const vnode = h('div', {
      'class': 'cs-footer-overlay',
      'style': {
        'display': this.idx === 0 ? 'none' : 'block'
      },
      'on': {
        'click': () => {
          this.idx = 0
        }
      }
    })
    VNodeArray.push(vnode)

    const getMenu = (menuList: Array<any>) => {
      const menuArray = []
      for (const m of menuList) {
        const vnode = h('div', {
          'class': 'cs-footer-menu-div',
          'key': m.idx,
          'on': {
            'click': this.menuClick.bind(this, m)
          }
        }, [
          m.name
        ])
        menuArray.push(vnode)
      }
      return menuArray
    }
    for (const f of this.FooterList) {
      const vnode = h('div', {
        'class': 'cs-footer-div',
        'key': f.idx,
        'on': {
          'click': this.showMenu.bind(this, f.idx)
        },
        'style': {
          'width': `${this.width}vw`
        }
      }, [
        f.name,
        h('div', {
          'class': `${this.idx === f.idx ? 'cs-footer-menu-active' : ''} cs-footer-menu`
        }, [
          ...getMenu(f.menuList)
        ])
      ])
      VNodeArray.push(vnode)
    }
    return VNodeArray
  }

  todo(): void {
    this.$router.push({ path: '/View' })
  }

  created(): void {
    if (this.FooterList.length > 4) {
      console.error('Supports up to four bottom navigations')
      this.show = false
    } else {
      this.width = 100 / this.FooterList.length
    }
  }

  render(h: CreateElement): VNode {
    if (this.show) {
      const f = this.getFooter()
      return h('div', {
        'class': 'cs-footer'
      }, [
        [...f]
      ])
    } else {
      return h('div', {
        'class': 'cs-footer'
      }, [])
    }
  }

}