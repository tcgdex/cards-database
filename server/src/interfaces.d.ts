import { SupportedLanguages } from '@tcgdex/sdk'

export type Version = 'full' | 'brief'

export interface Pagination {
	page: number
	count: number
}

export interface Options<T> {
	pagination?: Pagination
	filters?: Partial<Record<T, any>>
}

export interface Query<T extends {} = {}> {
	pagination?: {
		/**
		 * the page number wanted
		 */
		page: number
		/**
		 * the number of items per pages
		 *
		 * @default 100
		 */
		itemsPerPage?: number
	}
	/**
	 * Filters used in the query
	 */
	filters?: Partial<{ [Key in keyof T]: T[Key] extends object ? string | number | Array<string | number> : T[Key] | Array<T[Key]> }>

	/**
	 * instead of filtering text search it will search using the full string
	 */
	strict?: boolean
	/**
	 * data sorting
	 *
	 * It automatically manage numbers sorting as to not show them using alphabet sorting
	 *
	 * @default {field: 'id', order: 'ASC'}
	 */
	sort?: {
		field: string
		order: 'ASC' | 'DESC'
	}
}

export interface QueryResult<T> {
	/**
	 * if pagination query is set it will be set
	 */
	pagination?: {
		/**
		 * the current page
		 */
		page: number
		/**
		 * the total number of pages
		 */
		pageTotal: number
		/**
		 * the number of items per pages
		 */
		itemsPerPage: number
	}
	/**
	 * number of items
	 */
	count: number
	/**
	 * list of items
	 */
	items: Array<T>
}
