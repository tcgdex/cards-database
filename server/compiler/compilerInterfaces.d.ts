// eslint-disable-next-line @typescript-eslint/ban-types
export interface Endpoint<Index extends {} = {}, Item extends {} = {}, SubItem extends {} = {}, C = undefined> {
	index(common: C): Promise<Index | undefined>
	item(common: C): Promise<Record<string, Item> | undefined>
	sub?(common: C, item: string): Promise<Record<string, SubItem> | undefined>
	common?(): Promise<C>
}
