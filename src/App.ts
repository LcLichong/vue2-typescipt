import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue/types/umd'
import './styles/App.less'

@Component({
    components: {},
    mixins: []
})
export default class App extends Vue {
    render(h: CreateElement): VNode {
        return h('div', {
            'attrs': {
                'id': 'app'
            }
        }, [
            h('router-view')
        ])
    }
}