import { glob } from 'glob'
import { Card, Set, SupportedLanguages } from '../../../interfaces'
import * as legals from '../../../meta/legals'

interface fileCacheInterface {
	[key: string]: any
}

export const DB_PATH = "../"

const fileCache: fileCacheInterface = {}

/**
 * Fetch a JSON file from a remote location
 * @param url the URL to fetch
 * @returns the JSON file content
 */
export async function fetchRemoteFile<T = any>(url: string): Promise<T> {
	if (!fileCache[url]) {
		const signal = new AbortController()

		const finished = setTimeout(() => {
			signal.abort()
		}, 60 * 1000);

		const resp = await fetch(url, {
			signal: signal.signal
		})
		clearTimeout(finished)
		fileCache[url] = resp.json()
	}
	return fileCache[url]
}

const globCache: Record<string, Array<string>> = {}

export async function smartGlob(query: string): Promise<Array<string>> {
	if (!globCache[query]) {
		globCache[query] = await glob(query)
	}
	return globCache[query]
}

/**
 * Check if a card is currently Legal
 * @param type the type of legality
 * @param card the card to check
 * @param localId the card localid
 * @returns {boolean} if the card is currently in the legal type
 */
export function cardIsLegal(type: 'standard' | 'expanded', card: Card, localId: string): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.includes(card.set.serie.id) ||
		legal.includes.sets.includes(card.set.id) ||
		card.regulationMark && legal.includes.regulationMark.includes(card.regulationMark)
	) {
		return !(
			legal.excludes.sets.includes(card.set.id) ||
			legal.excludes.cards.includes(`${card.set.id}-${localId}`)
		)
	}
	return false
}

/**
 * Check if a set is currently Legal
 * @param type the type of legality
 * @param set the set to check
 * @returns {boolean} if the set is currently in the legal type
 */
export function setIsLegal(type: 'standard' | 'expanded', set: Set): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.includes(set.serie.id) ||
		legal.includes.sets.includes(set.id)
	) {
		return !legal.excludes.sets.includes(set.id)
	}
	return false
}

export function getDataFolder(lang: SupportedLanguages) {
	return ['ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'].includes(lang) ? 'data-asia' : 'data'
}
