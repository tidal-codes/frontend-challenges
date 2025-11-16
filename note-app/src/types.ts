export interface Note {
    id: string
    text: string
    x : number
    y : number
    width : number
    height : number
}
export type AtLeastOne<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>
}[keyof T];