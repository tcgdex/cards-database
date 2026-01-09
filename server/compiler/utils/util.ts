import { objectSize } from '@dzeio/object-util'
import Queue from '@dzeio/queue'
import { glob } from 'glob'
import { exec, spawn } from 'node:child_process'
import { readFileSync, statSync, writeFileSync } from 'node:fs'
import { Card, Languages, Set, SupportedLanguages } from '../../../interfaces'
import * as legals from '../../../meta/legals'
interface fileCacheInterface {
	[key: string]: any
}

export const DB_PATH = "../"

// Git metadata export/import configuration
const EXPORT_METADATA = process.argv.includes('--export-git-metadata')
const IMPORT_METADATA = process.argv.includes('--import-git-metadata')
const METADATA_FILE = './git-metadata.json'

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
	// IMPORT MODE: Load metadata from file, skip git operations
	if (IMPORT_METADATA) {
		console.log('Importing git metadata from file...')
		try {
			const data = readFileSync(METADATA_FILE, 'utf-8')
			const imported = JSON.parse(data)
			Object.assign(lastEditsCache, imported)
			const stats = statSync(METADATA_FILE)
			console.log('✅ Loaded', objectSize(lastEditsCache), 'file timestamps from cache')
			console.log('   Metadata file size:', (stats.size / 1024 / 1024).toFixed(2), 'MB')
			return
		} catch (error) {
			console.error('❌ Failed to import git metadata:', error)
			throw new Error('Cannot import git metadata. File missing or corrupt.')
		}
	}

	// NORMAL/EXPORT MODE: Load from git (existing logic)
	console.log('Loading Git File Tree...')
	const firstCommand = 'git ls-tree -r --name-only HEAD ../data'
	const files = (await runCommand(firstCommand)).split('\n')
	const secondCommand = 'git ls-tree -r --name-only HEAD ../data-asia'
	files.push(...(await runCommand(secondCommand)).split('\n'))
	console.log('Loaded files tree', files.length, 'files')
	console.log('Loading their last edit time')
	let processed = 0
	const concurrent = process.platform === 'win32' ? 10 : 1000
	const queue = new Queue(concurrent, 10)
	queue.start()

	for await (let file of files) {
		file = file.replace(/"/g, '').replace("\\303\\251", "é")
		await queue.add(runCommand(`git log -1 --pretty="format:%cd" --date=iso-strict "${file}"`, false).then((res) => {
			lastEditsCache[file] = res
		})
		.catch(() => {
			console.warn('could not load file', file, 'hope it does not break everything else lol')
		})
		.finally(() => {
			processed++
			if (processed % 1000 === 0) {
				console.log('loaded', processed, 'out of', files.length, 'files', `(${(processed / files.length * 100).toFixed(0)}%)`)
			}
		}))
	}
	await queue.waitEnd()
	console.log('done loading files', objectSize(lastEditsCache))

	// EXPORT MODE: Save metadata to file
	if (EXPORT_METADATA) {
		console.log('\n📦 Exporting git metadata to file...')
		writeFileSync(METADATA_FILE, JSON.stringify(lastEditsCache, null, 2))
		const stats = statSync(METADATA_FILE)
		console.log('✅ Exported', objectSize(lastEditsCache), 'file timestamps')
		console.log('   Metadata file:', METADATA_FILE)
		console.log('   File size:', (stats.size / 1024 / 1024).toFixed(2), 'MB')
	}
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
