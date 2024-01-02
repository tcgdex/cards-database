import { objectLoop } from '@dzeio/object-util'
import { SupportedLanguages } from '@tcgdex/sdk'
import { Response } from 'express'
import { Query } from './interfaces'

export function checkLanguage(str: string): str is SupportedLanguages {
	return ['en', 'fr', 'es', 'it', 'pt', 'de'].includes(str)
}

export function unique(arr: Array<string>): Array<string> {
	return arr.reduce((p, c) => p.includes(c) ? p : [...p, c], [] as Array<string>)
}

export function sendError(error: 'UnknownError' | 'NotFoundError' | 'LanguageNotFoundError' | 'EndpointNotFoundError', res: Response, v?: any) {
	let message = ''
	let status = 404
	switch (error) {
		case 'LanguageNotFoundError':
			message = `Language not found (${v})`
			break
		case 'EndpointNotFoundError':
			message = `Endpoint not found (${v})`
			break
		case 'NotFoundError':
			message = 'The resource you are searching does not exists'
			break
		case 'UnknownError':
		default:
			message = `an unknown error occured (${v})`
			status = 500
			break
	}
	res.status(status).json({
		message
	}).end()
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
 * @returns `true` if valid else `false`
 */
export function validateItem(validator: any | Array<any>, value: any): boolean {
	if (typeof value === 'object') {
		return objectLoop(value, (v) => {
			// early exit to not infinitively loop through objects
			if (typeof v === 'object') return true

			// check for each childs
			return validateItem(validator, v)
		})
	}

	// loop to validate for an array
	if (Array.isArray(validator)) {
		for (const sub of validator) {
			const res = validateItem(sub, value)
			if (res) {
				return true
			}
		}
		return false
	}
	if (typeof validator === 'string') {
		// run a string validation
		return value.toString().toLowerCase().includes(validator.toLowerCase())
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
	const sort: Query<any>['sort'] = query.sort ?? {field: 'id', order: 'ASC'}
	const firstEntry = data[0]

	// early exit if the order is not correctly set
	if (sort.order !== 'ASC' && sort.order !== 'DESC') {
		console.warn('Sort order is not valid', sort.order)
		return data
	}

	console.log('pouet', sort)

	if (!(sort.field in firstEntry)) {
		return data
	}
	const sortType = typeof data[0][sort.field]
	if (sortType === 'number') {
		if (sort.order === 'ASC') {
			return data.sort((a, b) => a[sort.field] - b[sort.field])
		} else {
			return data.sort((a, b) => b[sort.field] - a[sort.field])
		}
	} else {
		if (sort.order === 'ASC') {
			return data.sort((a, b) => a[sort.field] > b[sort.field] ? 1 : -1)
		} else {
			return data.sort((a, b) => a[sort.field] > b[sort.field] ? -1 : 1)
		}
	}
}

export function handlePagination(data: Array<any>, query: Query<any>) {
	if (!query.pagination) {
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

export function handleValidation(data: Array<any>, query: Query) {
	const filters = query.filters
	if (!filters) {
		return data
	}

	return data.filter((v) => objectLoop(filters, (valueToValidate, key) => {
		return validateItem(valueToValidate, v[key])
	}))
}
