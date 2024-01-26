export type LayoutPropsType = {
    defaultTitle: string
    children?: any
}

export interface RouteItemType {
    title: string
    path: string
}

export interface CardType {
    title: string
    description: string
}

export interface TaxType {
    title: string
    percent: number
}

export interface ExpenseType {
    id: string
    title: string
    category: string
    cost: number
    dateUp: string
}