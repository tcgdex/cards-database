import type { Response } from 'express'
import { languages } from '../util'
import type RFC7807 from './RFCs/RFC7807'

export enum Errors {
	LANGUAGE_INVALID = 'language-invalid',
	NOT_FOUND = 'not-found',
	INVALID_QUERY = 'invalid-query',

	GENERAL = 'general'
}

const titles: Record<Errors, string> = {
	[Errors.LANGUAGE_INVALID]: 'The chosen language is not available in the database',
	[Errors.NOT_FOUND]: 'The resource you are trying to reach does not exists',
	[Errors.INVALID_QUERY]: 'The request could not be processed with the provided parameters',

	[Errors.GENERAL]: 'An unknown error occured, please contact a developper with this message'
}

const status: Record<Errors, number> = {
	[Errors.LANGUAGE_INVALID]: 404,
	[Errors.NOT_FOUND]: 404,
	[Errors.INVALID_QUERY]: 400,

	[Errors.GENERAL]: 500
}

const details: Partial<Record<Errors, (meta?: Record<string, unknown>) => string>> = {
	[Errors.LANGUAGE_INVALID]: (meta) => `You must use one of the following languages (${languages.join(', ')}) while you used "${meta?.lang}"`,
	[Errors.INVALID_QUERY]: (meta) => {
		if (typeof meta?.details === 'string' && meta.details.trim().length > 0) {
			return meta.details
		}
		return 'Review the documented parameters and try again with a valid combination.'
	},
}

export function sendError(error: Errors, res: Response, metadata?: Record<string, unknown>) {
	const json: RFC7807 & Record<string, unknown> = {
		type: `https://tcgdex.dev/errors/${error}`,
		title: titles[error],
		status: status[error],
		endpoint: res.req.url,
		method: res.req.method,
		...metadata
	}

	const dt = details[error]
	if (dt) {
		json.details = dt(metadata)
	}

	res.status(json.status ?? 500).json(json).end()
}
