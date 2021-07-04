import { Component, Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import Footer from "../components/Footer/index";
import { FooterList } from "../type/footer-type";
import { Url } from "../type/home-type";

@Component({
    components: {
        Footer,
    },
})
export default class ViewB extends Vue {
    FooterList: Array<FooterList> = [
        {
            idx: 1,
            name: "底部导航一",
            menuList: [
                {
                    name: "Home",
                    url: "/",
                    idx: "menu1",
                },
                {
                    name: "菜单2",
                    url: "",
                    idx: "menu2",
                },
            ],
        },
        {
            idx: 2,
            name: "底部导航二",
            menuList: [
                {
                    name: "菜单3",
                    url: "http://www.baidu.com",
                    idx: "menu3",
                },
                {
                    name: "菜单4",
                    url: "",
                    idx: "menu4",
                },
            ],
        },
        {
            idx: 3,
            name: "底部导航三",
            menuList: [
                {
                    name: "菜单5",
                    url: "xxxxx",
                    idx: "menu5",
                },
                {
                    name: "菜单6",
                    url: "",
                    idx: "menu6",
                },
            ],
        },
    ];

    menuClick(m: Url): void {
        if (!m.url) {
            alert("尽情期待");
        } else if (m.url.substring(0, 1) === "/") {
            this.$router.push({ path: m.url });
        } else if (m.url.startsWith("http") || m.url.startsWith("https")) {
            window.location.href = m.url;
        } else {
            alert("链接格式不正确");
        }
    }

    render(h: CreateElement): VNode {
        return h(
            "div",
            {
                attrs: {
                    id: "ViewB",
                },
            },
            [
                h("Footer", {
                    attrs: {
                        FooterList: this.FooterList,
                    },
                    on: {
                        menuClick: this.menuClick,
                    },
                }),
            ]
        );
    }
}
