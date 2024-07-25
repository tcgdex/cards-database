import { objectGet, objectLoop } from '@dzeio/object-util'
import type { SupportedLanguages } from '@tcgdex/sdk'
import type { Query } from './interfaces'

export const languages = [
	'en',
	'fr',
	'es',
	'it',
	'pt',
	'pt-br',
	'pt-pt',
	'de',
	'nl',
	'pl',
	'ru',
	'ja',
	'ko',
	'zh-tw',
	'id',
	'th',
	'zh-cn'
] as const

export function checkLanguage(str: string): str is SupportedLanguages {
	return languages.includes(str as 'en')
}

export function unique(arr: Array<string>): Array<string> {
	return arr.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as Array<string>)
}

export function betterSorter(a: string, b: string) {
	const ra = parseInt(a, 10)
	const rb = parseInt(b, 10)
	if (!isNaN(ra) && !isNaN(rb)) {
		return ra - rb
	}
	return a >= b ? 1 : -1
}

// export function tree(path: string, padding = 0) {
// 	const folder = fs.readdirSync(path)
// 	for (const file of folder) {
// 		const filePath = path + '/' + file
// 		try {
// 			fs.lstatSync(filePath).isDirectory()
// 			tree(filePath)
// 		} catch {}
// 	}
// }

/**
 *
 * @param validator the validation object
 * @param value the value to validate
 * @param strict change how the results are fetched
 * @returns `true` if valid else `false`
 */
export function validateItem(validator: any | Array<any>, value: any, strict: boolean = false): boolean {
	// convert to number is possible
	if (/^\d+$/.test(validator)) {
		validator = parseInt(validator)
	}

	// do a comparaison with null values
	if (isNull(value)) {
		return isNull(validator)
	}

	if (typeof value === 'object') {
		// invert signal so that an early exit mean that a match was found!
		return !objectLoop(value, (v) => {
			// early exit to not infinitively loop through objects
			if (typeof v === 'object') return true

			// check for each childs until one match
			return !validateItem(validator, v, strict)
		})
	}

	// loop to validate for an array
	if (Array.isArray(validator)) {
		for (const sub of validator) {
			const res = validateItem(sub, value, strict)
			if (res) {
				return true
			}
		}
		return false
	}
	if (typeof validator === 'string') {
		// run a strict string validation
		if (strict) {
			return value.toString().toLowerCase() === validator.toLowerCase()
		} else {
			return value.toString().toLowerCase().includes(validator.toLowerCase())
		}
	} else if (typeof validator === 'number') {
		// run a number validation
		if (typeof value === 'number') {
			return validator === value
		} else {
			return validator === parseFloat(value)
		}
	} else {
		// validate if types are not conforme
		return validator === value
	}
}

/**
 * @param data the data to sort
 * @param query the query
 * @returns the sorted data
 */
export function handleSort(data: Array<any>, query: Query<any>) {
	// handle when data has no entries
	if (data.length === 0) {
		return data
	}

	const defaultSortPriority = ['releaseDate', 'localId', 'id']

	const firstEntry = data[0]
	const field = query.sort?.field ?? defaultSortPriority.find((it) => it in firstEntry) ?? 'id'
	const order = query.sort?.order ?? 'ASC'

	// early exit if the order is not correctly set
	if (order !== 'ASC' && order !== 'DESC') {
		console.warn('Sort order is not valid', order)
		return data
	}

	if (!(field in firstEntry)) {
		console.warn('can\'t sort using the field', field)
		return data
	}

	return data.sort((a, b) => advSort(a[field], b[field], order))
}

/**
 *
 * @param order the base ordering
 * @returns a function that is feed in the `sort` function
 */
const advSort = (a?: string | number, b?: string | number, order: 'ASC' | 'DESC' = 'ASC') => {
	const isANull = isNull(a)
	const isBNull = isNull(b)
	if (isANull && isBNull) {
		return 0
	}
	if (isANull) {
		return order === 'ASC' ? -1 : 1
	}
	if (isBNull) {
		return order === 'ASC' ? 1 : -1
	}

	a = tryParse(a!) ?? a
	b = tryParse(b!) ?? b

	if (order === 'DESC') {
		const tmp = a
		a = b
		b = tmp
	}

	if (typeof a === 'number' && typeof b === 'number') {
		return a - b
	}

	return a!.toString().localeCompare(b!.toString())
}

function tryParse(value: string | number): number | null {
	if (typeof value === 'number') {
		return value
	}
	if (/^-?\d+$/.test(value)) {
		return parseInt(value)
	}
	return null
}

/**
 * filter data out to make it paginated
 *
 * @param data the data to paginate
 * @param query the query
 * @returns the data that is in the paginated query
 */
export function handlePagination(data: Array<any>, query: Query<any>) {
	if (!query.pagination || data.length === 0) {
		return data
	}
	const itemsPerPage = query.pagination.itemsPerPage ?? 100
	const page = query.pagination.page

	// return the sliced data
	return data.slice(
		itemsPerPage * (page - 1),
		itemsPerPage * page
	)
}

/**
 * filter the data using the specified query
 *
 * @param data the data to validate
 * @param query the query to validate against
 * @returns the filtered data
 */
export function handleValidation(data: Array<any>, query: Query) {
	const filters = query.filters
	if (!filters) {
		return data
	}

	return data.filter((v) => objectLoop(filters, (valueToValidate, key: string) => {
		let value: unknown
		// handle subfields
		if (key.includes('.')) {
			value = objectGet(v, key.split('.'))
		} else {
			value = v[key]
		}
		return validateItem(valueToValidate, value, query.strict)
	}))
}

/**
 * validate that the value is null or undefined
 * @param value the value the check
 * @returns if the value is undefined or null or not
 */
export function isNull(value: unknown): value is (undefined | null) {
	return typeof value === 'undefined' || value === null
}
