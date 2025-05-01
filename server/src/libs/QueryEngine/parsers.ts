import { isObject, objectLoop } from '@dzeio/object-util'
import { Sort, type Query, type QueryValues } from './filter'

/**
 * List of allowed prefixes
 */
const prefixes = [
	'like',
	'not',
	'notlike',
	'eq',
	'neq',
	'gte',
	'gt',
	'lt',
	'lte',
	'null',
	'notnull'
] as const

type Prefix = typeof prefixes[number]

/**
 * indicate if the string is a prefix or not
 *
 * @param str the string to check
 * @returns {boolean} true if it's a prefix, else false
 */
function isPrefix(str: string): str is Prefix {
	return prefixes.includes(str as Prefix)
}

/**
 * Parse a {@link URL.searchParams} object into a {@link Query}
 *
 * @param searchParams the searchparams object to parse
 * @param skip keys that are skipped by the transformer
 *
 * @returns the searchParams into a Query object
 */
export function parseSearchParams<T extends object = object>(searchParams: URLSearchParams, skip: Array<string> = []): Query<T> {
	const query: Query<Record<string, unknown>> = {}
	skip.push('sort:field', 'sort:order')

	const sortField = searchParams.get('sort:field')
	if (sortField) {
		const order = searchParams.get('sort:order') ?? 'ASC'

		query.$sort = { [sortField]: order === 'ASC' ? Sort.ASC : Sort.DESC }
	}
	for (const [key, value] of searchParams) {

		if (key === 'pagination:page') {
			query.$page = Number.parseInt(value)
			continue
		}

		if (key === 'pagination:itemsPerPage') {
			query.$limit = Number.parseInt(value)
			continue
		}

		if (skip.includes(key)) {
			continue
		}

		const params = parseParam(key, value)
		if (!query[key]) {
			query[key] = params
		} else {
			if (isObject(params)) {
				objectLoop(params, (v, k) => {
					(query[key] as any)[k] = v
					return
				})
			} else {
				query[key] = params
			}
		}

	}

	return query as Query<T>
}

/**
 * parse a simple {@link Record} object into a {@link Query}
 *
 * @param searchParams the searchparams object to parse
 * @param skip keys that are skipped by the transformer
 *
 * @returns the searchParams into a Query object
 */
export function recordToQuery<T extends object = object>(input: Record<string, string | Array<string>>, skip: Array<string> = []): Query<T> {
	const query: Query<Record<string, unknown>> = {}
	skip.push('sort:field', 'sort:order')

	const sortField = input['sort:field'] as string
	if (sortField) {
		const order = input['sort:order'] ?? 'ASC'

		query.$sort = { [sortField]: order === 'ASC' ? Sort.ASC : Sort.DESC }
	}

	objectLoop(input, (value: string | Array<string>, key) => {

		if (key === 'pagination:page') {
			query.$page = Number.parseInt(value as string)
			return
		}

		if (key === 'pagination:itemsPerPage') {
			query.$limit = Number.parseInt(value as string)
			return
		}

		if (skip.includes(key)) {
			return
		}

		if (!Array.isArray(value)) {
			value = [value]
		}

		for (const it of value) {
			const params = parseParam(key, it)
			query[key] = query[key]
				? {
						"$and": [
							query[key],
							params
						]
					}
				: params
		}
	})

	return query as Query<T>
}

/**
 * Parse a single element
 *
 * @param _key currently unused, kept for future compatibility
 * @param value the value to parse
 *
 * @returns the parsed {@link Query} element to be added
 */
function parseParam(_key: string, value: string): QueryValues<unknown> {
	const colonLocation = value.indexOf(':')
	let filter: Prefix = 'like'
	let compared: string | number = value
	if (colonLocation >= 2) { // 2 because the smallest prefix is two characters long
		const prefix = value.slice(0, colonLocation)
		if (isPrefix(prefix)) {
			filter = prefix
			compared = value.slice(colonLocation + 1)
		}
	}

	function process(item: string | number) {
		switch (filter) {
			case 'not':
			case 'notlike':
				return { $not: { $inc: item } }
			case 'eq':
				return { $eq: item }
			case 'neq':
				return { $not: item }
			case 'gte':
				return { $gte: item }
			case 'gt':
				return { $gt: item }
			case 'lt':
				return { $lt: item }
			case 'lte':
				return { $lte: item }
			case 'null':
				return null
			case 'notnull':
				return { $not: null }
			case 'like':
			default:
				return { $inc: item }
		}
	}

	if (/^\d+\.?\d*$/g.test(compared)) {
		return process(Number.parseFloat(compared))
	}

	// @deprecated the `,` separator
	// TODO: only use the `|` separator
	const items = compared.split(compared.includes('|') ? '|' : ',')

	if (items.length === 1) {
		return process(items[0])
	}

	return { $or: items.map((it) => process(it)) }
}
