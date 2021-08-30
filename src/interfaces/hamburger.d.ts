export interface IMenu{
   initial: boolean
   clicked: boolean
   name: string
}

export interface IHamburger{
   menuState: IMenu
}