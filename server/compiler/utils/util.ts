import { objectSize } from '@dzeio/object-util'
import { glob } from 'glob'
import { exec, spawn } from 'node:child_process'
import { createInterface } from 'node:readline'
import { writeFileSync } from 'node:fs'
import type { Card, Languages, Set as CardSet, SupportedLanguages } from '../../../interfaces'
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
		card.energyType === "Normal" ||
		card.regulationMark && legal.includes.regulationMark.includes(card.regulationMark)
	) {
		return !(
			legal.excludes.sets.includes(card.set.id) ||
			(type === 'standard' && card.types?.includes("Fairy")) ||
			legal.excludes.cards.includes(`${card.set.id}-${localId}`)
		)
	}

    return false;
}

/**
 * Check if a set is currently Legal
 * @param type the type of legality
 * @param set the set to check
 * @returns {boolean} if the set is currently in the legal type
 */
export function setIsLegal(type: 'standard' | 'expanded', set: CardSet): boolean {
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

/**
 * run a command on the OS, it uses Spawn by default because exec seems to have a bug linked to the Buffer
 *
 * @param command the command to run
 * @param useSpawn select the method to use to run the command
 * @returns a string with the stdout
 */
function runCommand(command: string, useSpawn = true): Promise<string> {
	if (!useSpawn) {
		return new Promise<string>((res, rej) => {
			exec(command, (err, out) => {
				if (err) {
					rej(err)
				}
				res(out)
			})
		})
	}
	const splitted = command.split(' ')
	command = splitted.shift()!

	return new Promise<string>((res, rej) => {
		const cmd = spawn(command, splitted)
		let out: string = ''
		cmd.stdout.on('data', (data) => {
			out += data.toString()
		})

		cmd.on('close', (code) => {
			if (code !== 0) {
				console.log(`command exited with code ${code}`);
				rej(code)
				return
			}
			res(out)
		})
	})
}

const lastEditsCache: Record<string, string> = {}
export async function loadLastEdits() {
	console.log('Loading Git File Tree...')
	const fileCommand = 'git -c core.quotepath=false ls-tree -r --name-only HEAD ../data ../data-asia'
	const files = (await runCommand(fileCommand))
		.split('\n')
		.map(f => f.trim())
		.filter(f => f.length > 0)
		.map(f => f.replace(/^\.\.\//, ''))

	const remainingFiles = new Set<string>()
	for (const file of files) {
		remainingFiles.add(file)
	}

	console.log('Loaded files tree', remainingFiles.size, 'files')
	console.log('Loading their last edit time')

	const logProcess = spawn('git', [
		'-c', 'core.quotepath=false',
		'log',
		'--name-only',
		'--format=COMMIT_DATE:%cI',
		'../data',
		'../data-asia'
	])

	const rl = createInterface({
		input: logProcess.stdout,
		crlfDelay: Infinity
	})

	let currentDate = new Date().toISOString()
	let loadedCount = 0
	const totalFiles = remainingFiles.size

	for await (const line of rl) {
		if (line.startsWith('COMMIT_DATE:')) {
			currentDate = line.substring('COMMIT_DATE:'.length).trim()
		} else if (line.trim().length > 0) {
			const file = line.trim()
			if (remainingFiles.has(file)) {
				lastEditsCache["../" + file] = currentDate
				remainingFiles.delete(file)
				loadedCount++

				if (loadedCount % 1000 === 0) {
					console.log('loaded', loadedCount, 'out of', totalFiles, 'files', `(${(loadedCount / totalFiles * 100).toFixed(0)}%)`)
				}

				if (remainingFiles.size === 0) {
					logProcess.kill()
					break
				}
			}
		}
	}
	logProcess.kill()

	console.log('done loading files', objectSize(lastEditsCache))
}

export function getLastEdit(path: string): string {
	const date = lastEditsCache[path]
	if (!date) {
		return new Date().toISOString()
		// throw new Error(`edit date not found for file ${path}`)
	}
	return date
}

export function resolveText<T>(text: Languages<T> | undefined, lang: SupportedLanguages): T | undefined {
	if (!text) return text as undefined
	let res: T | undefined = text[lang]
	if (typeof res === 'undefined' && !lang.includes('-')) {
		const key = Object.keys(text).find(key => key.startsWith(lang))
		return text[key as keyof Languages<T>]
	}
	return res
}
