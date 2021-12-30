import { SupportedLanguages } from '@tcgdex/sdk'
import { Response } from 'express'
import fs from 'fs'

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

export function lightCheck(source: any, item: any): boolean {
	if (typeof source === 'undefined') {
		return typeof item === 'undefined'
	}
	if (Array.isArray(source)) {
		for (const sub of source) {
			const res = lightCheck(sub, item)
			if (res) {
				return true
			}
		}
		return false
	}
	if (typeof source === 'object') {
		return lightCheck(source[item], true)
	} else if (typeof source === 'string') {
		return source.toLowerCase().includes(item.toString().toLowerCase())
	} else if (typeof source === 'number') {
		return source === parseInt(item)
	} else {
		// console.log(source, item)
		return source === item
	}
}
