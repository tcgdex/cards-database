import { SupportedLanguages } from '@tcgdex/sdk'

export interface Pagination {
	page: number
	count: number
}

export interface Options<T> {
	pagination?: Pagination
	filters?: Partial<Record<T, any>>
}
