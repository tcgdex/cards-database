import { Card, Serie, Set } from '../../../interfaces'
import glob from 'glob'
import fetch from 'node-fetch'
import { posix as path } from 'path'
import * as legals from '../../../meta/legals'
import { DataTree, FetchedFile, IntermediateCard, IntermediateSerie, IntermediateSet } from '../compilerInterfaces'
import fs from 'fs/promises'
import { exec } from 'child_process'
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

const globCache: Record<string, Array<string>> = {}

export async function smartGlob(query: string): Promise<Array<string>> {
	if (!globCache[query]) {
		globCache[query] = await new Promise((res) => {
			glob(query, (_, matches) => res(matches))
		})
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

async function getLastEdit(path: string): Promise<string> {
	const command = `git log -1 --pretty="format:%ci" "${path}"`
	// console.log(command)
	return new Promise((res, rej) => {
		exec(command, (err, out, _) => {
			// console.log(err, out)
			if (err) {
				rej(err)
				return
			}
			res(out)
		})
	})
}

export function realPath(dirname: string, toResolve: string): string {
	return path.resolve(dirname, toResolve)
}

const loadThings = async <T = any> (path: string): Promise<Array<T & FetchedFile>> => (await Promise.all((await smartGlob(realPath(__dirname, path)))
.map(async (it) => ({...JSON.parse(await fs.readFile(it, 'utf-8')), path: it, updated: await getLastEdit(it)}))))

const cachedTree: DataTree | null = null
export async function getTree(): Promise<DataTree> {
	if (cachedTree) {
		return cachedTree
	}
	let series = await loadThings<IntermediateSerie>('../../../data/*.json')
	for (const serie of series) {
		const sets = await loadThings<IntermediateSet>(`../../../data/${serie.name?.en ?? serie.name?.fr}/*.json`)
		serie.sets = sets as Array<IntermediateSet>
		serie.updated = await getLastEdit(serie.path)
		for (const set of sets) {
			set.serie = serie as IntermediateSerie
			set.updated = await getLastEdit(set.path)
			const cards = await loadThings<IntermediateCard>(`../../../data/${serie.name?.en ?? serie.name?.fr}/*.json`)
			set.cards = cards as Array<IntermediateCard>
			for (const card of cards) {
				card.set = set as IntermediateSet
				card.updated = await getLastEdit(card.path)
			}
		}
	}
	return series as DataTree
}
