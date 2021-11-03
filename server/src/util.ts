import { SupportedLanguages } from '@tcgdex/sdk'
import { Response } from 'express'

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
