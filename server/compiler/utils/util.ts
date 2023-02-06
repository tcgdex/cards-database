import { exec } from 'child_process'
import fs from 'fs/promises'
import fetch from 'node-fetch'
import { Card, Serie, Set } from '../../../meta/definitions/database'
import * as legals from '../../../meta/legals'
interface fileCacheInterface {
	[key: string]: any
}

export const DB_PATH = "../../../"

const fileCache: fileCacheInterface = {}

/**
 * Fetch a JSON file from a remote location
 * @param url the URL to fetch
 * @returns the JSON file content
 */
export async function fetchRemoteFile<T = any>(url: string): Promise<T> {
	if (!fileCache[url]) {
		const resp = await fetch(url, {
			timeout: 60 * 1000
		})
		fileCache[url] = resp.json()
	}
	return fileCache[url]
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
		// legal.includes.series.includes(card.set.serie.id) ||
		legal.includes.sets.includes(card.set) ||
		card.regulationMark && legal.includes.regulationMark.includes(card.regulationMark)
	) {
		return !(
			legal.excludes.sets.includes(card.set) ||
			legal.excludes.cards.includes(`${card.set}-${localId}`)
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
		//legal.includes.series.includes(set.serie.id) ||
		legal.includes.sets.includes(set.id)
	) {
		return !legal.excludes.sets.includes(set.id)
	}
	return false
}

const editsCache: Record<string, string> = {}

export async function loadLastEdits() {
	if (Object.keys(editsCache).length > 0) {
		return editsCache
	}
	console.log('Loading edit tree...')
	// command taken from https://serverfault.com/a/1031956
	const command = `git ls-tree -r --name-only HEAD -z ../data | TZ=UTC xargs -0n1 -I_ git --no-pager log -1 --date=iso-local --format="%ad _" -- _`
	const res = await new Promise<string>((res, rej) => {
		exec(command, (err, out, _) => {
			// console.log(err, out)
			if (err) {
				rej(err)
				return
			}
			res(out)
		})
	})
	res.split('\n').forEach((line) => {
		editsCache[line.slice(26)] = line.slice(0, 25)
	})
	console.log('Finished loading edit tree')
	return editsCache
}

async function getLastEdit(path: string): Promise<string> {
	const edits = await loadLastEdits()
	if (edits[path]) {
		return edits[path]
	}
	throw new Error(`Could not find last edition for file ${path}`)
}

async function exists(path: string) {
	try {
		await fs.stat(path)
		return true
	} catch {
		return false
	}
}

export type FileListGlobal<T = any> = {
	path: string
	updated: Date
	data: T
}

export type FileListSerie = FileListGlobal<Serie> & {
	type: 'serie'
}

export type FileListSet = FileListGlobal<Set> & {
	type: 'set'
	parent: FileListSerie

}

export type FileListCard = FileListGlobal<Card> & {
	type: 'card'
	parent: FileListSet
}

export type FileListItem = FileListCard | FileListSerie | FileListSet

export type FileList = Array<FileListItem>

let database: FileList | null = null

export async function loadDatabase() {
	if (database) {
		return database
	}
	database = []

	const series = (await fs.readdir('../data'))
		.filter((it) => it.endsWith('.json'))

	for await (const serie of series) {
		const serieFile = `../data/${serie}`
		const serieFolder = serieFile.replace('.json', '')

		const serieData: FileListSerie = {
			type: 'serie',
			path: serieFile,
			updated: new Date(await getLastEdit(serieFile)),
			data: await import(`../../${serieFile}`)
		}

		database.push(serieData)
		if (!(await exists(serieFolder))) {
			continue
		}

		await getSets(serieData, serieFolder)
	}

	console.log('Finished loading!')

	return database
}

async function getSets(serieData: FileListSerie, serieFolder: string) {
	const sets = (await fs.readdir(serieFolder))
	.filter((it) => it.endsWith('.json'))

	return Promise.all(sets.map(async (set) => {
		const setFile = `${serieFolder}/${set}`
		const setFolder = setFile.replace('.json', '')

		const setData: FileListSet = {
			type: 'set',
			path: setFile,
			updated: new Date(await getLastEdit(setFile)),
			data: await import(`../../${setFile}`),
			parent: serieData
		}

		database?.push(setData)

		if (!(await exists(setFolder))) {
			return
		}

		await getCards(setData, setFolder)
		console.log(`Loaded files: ${database?.length}/~16000 (${((database?.length ?? 0) / 16000 * 100).toFixed(2)}%)`)
	}))
}

async function getCards(setData: FileListSet, setFolder: string) {
	const cards = (await fs.readdir(setFolder))
	.filter((it) => it.endsWith('.json'))
	.map((it) => `${setFolder}/${it}`)

	return Promise.all(cards.map(async (card) => {
		const cardData: FileListCard = {
			type: 'card',
			path: card,
			updated: new Date(await getLastEdit(card)),
			data: await import(`../../${card}`),
			parent: setData
		}

		database?.push(cardData)
	}))
}
