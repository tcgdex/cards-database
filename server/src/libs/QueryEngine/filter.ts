import { objectGet, objectKeys, objectLoop, objectSize } from '@dzeio/object-util'
import { isNull } from '../../util'

interface QueryRootFilters<Obj extends object> {
	/**
	 * one of the results should be true to be true
	 */
	$or?: Array<QueryList<Obj>>
	/**
	 * every results should be false to be true
	 */
	$nor?: Array<QueryList<Obj>>
	/**
	 * (default) make sure every sub queries return true
	 */
	$and?: Array<QueryList<Obj>>
	/**
	 * at least one result must be false
	 */
	$nand?: Array<QueryList<Obj>>
	/**
	 * invert the result from the following query
	 */
	$not?: QueryList<Obj>

	/**************
	 * PAGINATION *
	 **************/

	/**
	 * define a precise offset of the data you fetched
	 */
	$offset?: number
	/**
	 * limit the number of elements returned from the dataset
	 */
	$limit?: number

	/**
	 * instead of using a precise offset, use a page system
	 */
	$page?: number

	/**********
	* Sorting *
	 **********/

	/**
	 * sort the data the way you want with each keys being priorized
	 *
	 * ex:
	 * {a: Sort.DESC, b: Sort.ASC}
	 *
	 * will sort first by a and if equal will sort by b
	 */
	$sort?: SortInterface<Obj>
}

/**
 * Logical operators that can be used to filter data
 */
export type QueryLogicalOperator<Value> = {
	/**
	 * one of the results should be true to be true
	 */
	$or: Array<QueryValues<Value>>
} | {
	/**
	 * every results should be false to be true
	 */
	$nor: Array<QueryValues<Value>>
} | {
	/**
	 * at least one result must be false
	 */
	$nand: Array<QueryValues<Value>>
} | {
	/**
	 * (default) make sure every sub queries return true
	 */
	$and: Array<QueryValues<Value>>
} | {
	/**
	 * invert the result from the following query
	 */
	$not: QueryValues<Value>
}

/**
 * differents comparisons operators that can be used to filter data
 */
export type QueryComparisonOperator<Value> = {
	/**
	 * the remote source value must be absolutelly equal to the proposed value
	 */
	$eq: Value | null
} | {
	/**
	 * the remote source value must be greater than the proposed value
	 */
	$gt: number | Date
} | {
	/**
	 * the remote source value must be lesser than the proposed value
	 */
	$lt: number | Date
} | {
	/**
	 * the remote source value must be greater or equal than the proposed value
	 */
	$gte: number | Date
} | {
	/**
	 * the remote source value must be lesser or equal than the proposed value
	 */
	$lte: number | Date
} | {
	/**
	 * the remote source value must be one of the proposed values
	 */
	$in: Array<Value>
} | {
	/**
	 * laxist validation of the remote value
	 *
	 * for strings: remote contains value while not following casing like ($lax) `pou` === `Pouet` (remote)
	 * for numbers: it does a string conversion first
	 */
	$lax: Value | null
} | {
	/**
	 * (for arrays only) specify a needed length of the array
	 */
	$len: number | { $gt: number }
}

export type QueryList<Obj extends object> = {
	[Key in keyof Obj]?: QueryValues<Obj[Key]>
}

/**
 * Differents values the element can take
 * if null it will check if it is NULL on the remote
 * if array it will check oneOf
 * if RegExp it will check if regexp match
 */
export type QueryValues<Value> = Value |
	null |
	Array<Value> |
	RegExp |
	QueryComparisonOperator<Value> |
	QueryLogicalOperator<Value>

/**
 * The query element that allows you to query different elements
 */
export type Query<Obj extends object = object> = QueryList<Obj> & QueryRootFilters<Obj>


// biome-ignore lint/style/useEnumInitializers: <explanation>
export enum Sort {
	/**
	 * Sort the values from the lowest to the largest
	 */
	ASC,
	/**
	 * Sort the values form the largest to the lowest
	 */
	DESC
}

/**
 * sorting interface with priority
 */
export type SortInterface<Obj extends object> = {
	[Key in keyof Obj]?: Sort
}



export declare type AllowedValues = string | number | bigint | boolean | null | undefined

interface FilterResult<T extends object> {
	data: Array<T>
	rows: number
	pagination?: {
		page: number
		pageCount: number
		totalRows: number
	} | undefined
}

/**
 *
 * @param data the original data
 * @param query the query to filter against
 * @param options additionnal execution options
 * @returns the filtered/ordered/paginated {@link data}
 */
export function executeQuery<T extends object = Record<string, unknown>>(data: Array<T>, query: Query<T>, options?: { debug?: boolean }): FilterResult<T> {
	if (options?.debug) {
		console.log('Query', query)
	}
	// filter
	let filtered = data.filter((it) => {
		const res = objectLoop(query, (value, key) => {
			if (key === '$or') {
				for (const sub of value as Array<QueryList<T>>) {
					const final = filterEntry(sub, it)
					// eslint-disable-next-line max-depth
					if (final) {
						return true
					}
				}
				return false
			}
			if ((key as string).startsWith('$')) {
				return true
			}
			return filterEntry(query, it)
		})

		return res
	})

	if (options?.debug) {
		console.log('postFilters', filtered)
	}

	// sort
	if (query.$sort && objectSize(query.$sort) >= 1) {
		// temp until better solution is found
		// get the first key
		const firstKey = objectKeys(query.$sort)[0]
		// biome-ignore lint/style/noNonNullAssertion: item is not null
		const first = query.$sort[firstKey]!

		// forst by the first key
		filtered = filtered.sort((objA, objB) => {
			const a = objA[firstKey]
			const b = objB[firstKey]
			const ascend = first !== Sort.DESC // it is Ascend by default, so compare against it
			if (typeof a === 'number' && typeof b === 'number') {
				if (ascend) {
					return b - a
				}
				return a - b
			}
			if (a instanceof Date && b instanceof Date) {
				if (ascend) {
					return a.getTime() - b.getTime()
				}
				return b.getTime() - a.getTime()
			}
			if (typeof a === 'string' && typeof b === 'string') {
				if (ascend) {
					return a.localeCompare(b)
				}
				return b.localeCompare(a)

			}
			if (ascend) {
				return a > b ? 1 : -1
			}
			return a > b ? -1 : 1
		})
	}
	if (options?.debug) {
		console.log('postSort', filtered)
	}

	// length of the query assuming a single page
	const unpaginatedLength = filtered.length
	let page: number | null = null
	let pageCount: number | null = null
	// limit
	if (!isNull(query.$offset) || !isNull(query.$limit) || !isNull(query.$page)) {
		let limit = query.$limit ?? -1
		if (!isNull(query.$page) && isNull(query.$offset) && isNull(query.$limit)) {
			console.warn('using $page NEED a $limit too, setting limit to `10`')
			limit = 10
		}
		// when using $page, they start at 1 and not 0
		const offset = query.$offset ?? (query.$page ? (query.$page - 1) * limit : 0)
		filtered = filtered.slice(offset, limit >= 0 ? offset + limit : undefined)
		page = Math.trunc(offset / limit)
		pageCount = Math.ceil(unpaginatedLength / limit)
	}
	if (options?.debug) {
		console.log('postLimit', filtered)
	}

	return {
		data: filtered,
		rows: filtered.length,
		pagination: (!isNull(page) && !isNull(pageCount)) ? {
			page: page,
			pageCount: pageCount,
			totalRows: unpaginatedLength
		} : undefined
	}
}

/**
 *
 * @param query the query of the entry
 * @param item the implementation of the item
 * @returns if it should be kept or not
 */
export function filterEntry<T extends object>(query: QueryList<T>, item: T): boolean {
	// eslint-disable-next-line complexity
	const res = objectLoop(query as any, (queryValue, key: keyof typeof query) => {
		/**
		 * TODO: handle $keys
		 */
		if ((key as string).startsWith('$')) {
			return true
		}

		let value: unknown = undefined

		// handle deeply nested items
		if ((key as string).includes('.')) {
			value = objectGet(item, key as string)
		}

		// handle if nested item does not exists
		if (typeof value === 'undefined') {
			value = item[key]
		}

		return filterValue(value, queryValue)
	})

	return res
}

/**
 * indicate if a value should be kept by an ENTIRE query
 *
 * @param value the value to filter
 * @param query the full query
 * @returns if the query should keep the value or not
 */
function filterValue<T extends AllowedValues>(value: unknown, query: QueryValues<T>) {
	if (typeof query !== 'object' || query === null || query instanceof RegExp || Array.isArray(query)) {
		return filterItem(value, query)
	}

	// loop through each keys of the query
	// eslint-disable-next-line arrow-body-style
	return objectLoop(query as any, (querySubValue: unknown, queryKey: string) => {
		return filterItem(value, {[queryKey]: querySubValue } as QueryValues<T>)
	})
}

/**
 *
 * @param value the value to check
 * @param query a SINGLE query to check against
 * @returns if the value should be kept or not
 */
// eslint-disable-next-line complexity
function filterItem(value: any, query: QueryValues<AllowedValues>): boolean {
	/**
	 * check if the value is null
	 */
	if (query === null) {
		return typeof value === 'undefined' || value === null
	}

	if (query instanceof RegExp) {
		return query.test(typeof value === 'string' ? value : value.toString())
	}

	/**
	 * ?!?
	 */
	if (value === null || typeof value === 'undefined') {
		return false
	}

	/**
	 * strict value check by default
	 */
	if (!(typeof query === 'object')) {
		if (typeof query === 'string' && typeof value === 'string') {
			return query.toLowerCase() === value.toLowerCase()
		}
		return query === value
	}

	/**
	 * Array checking and $in
	 */
	if (Array.isArray(query) || '$in' in query) {
		const arr = Array.isArray(query) ? query : query.$in as Array<AllowedValues>
		return arr.includes(value)
	}

	if ('$inc' in query) {
		if (typeof value === 'number' && typeof query.$inc === 'number') {
			return value === query.$inc
		}
		return (value.toString() as string).toLowerCase().includes(query.$inc!.toString()!.toLowerCase())
	}

	if ('$eq' in query) {
		return query.$eq === value
	}

	/**
	 * numbers specific cases for numbers
	 */
	if ('$gt' in query) {
		value = value instanceof Date ? value.getTime() : value
		const comparedValue = query.$gt instanceof Date ? query.$gt.getTime() : query.$gt
		return typeof value === 'number' && typeof comparedValue === 'number' && value > comparedValue
	}

	if ('$lt' in query) {
		value = value instanceof Date ? value.getTime() : value
		const comparedValue = query.$lt instanceof Date ? query.$lt.getTime() : query.$lt
		return typeof value === 'number' && typeof comparedValue === 'number' && value < comparedValue
	}

	if ('$gte' in query) {
		value = value instanceof Date ? value.getTime() : value
		const comparedValue = query.$gte instanceof Date ? query.$gte.getTime() : query.$gte
		return typeof value === 'number' && typeof comparedValue === 'number' && value >= comparedValue
	}

	if ('$lte' in query) {
		value = value instanceof Date ? value.getTime() : value
		const comparedValue = query.$lte instanceof Date ? query.$lte.getTime() : query.$lte
		return typeof value === 'number' && typeof comparedValue === 'number' && value <= comparedValue
	}

	if ('$len' in query && Array.isArray(value)) {
		return value.length === query.$len
	}

	/**
	 * Logical Operators
	 */
	if ('$or' in query && Array.isArray(query.$or)) {
		return !!query.$or.find((it) => filterValue(value, it as QueryValues<any>))
	}
	if ('$and' in query && Array.isArray(query.$and)) {
		return !query.$and.find((it) => !filterValue(value, it as QueryValues<any>))
	}

	if ('$not' in query) {
		return !filterValue(value, query.$not as QueryValues<any>)
	}

	if ('$nor' in query && Array.isArray(query.$nor)) {
		return !query.$nor.find((it) => filterValue(value, it as QueryValues<any>))
	}

	if ('$nand' in query && Array.isArray(query.$nand)) {
		return !!query.$nand.find((it) => !filterValue(value, it as QueryValues<any>))
	}

	return false
}
