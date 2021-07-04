interface FooterList {
  idx: number,
  name: string,
  menuList: Array<Menu>
}

interface Menu {
  name: string,
  url: string,
  idx: string
}

export {
  FooterList,
  Menu
}