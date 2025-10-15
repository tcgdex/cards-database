import { objectSize } from '@dzeio/object-util'
import Queue from '@dzeio/queue'
import { glob } from 'glob'
import { exec, spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { Card, Languages, Set, SupportedLanguages } from '../../../interfaces'
import * as legals from '../../../meta/legals'

interface fileCacheInterface {
	[key: string]: any
}

export const DB_PATH = '../'

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
		}, 60 * 1000)

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
 */
export function cardIsLegal(
	type: 'standard' | 'expanded',
	card: Card,
	localId: string
): boolean {
	const legal = legals[type]
	if (
		legal.includes.series.includes(card.set.serie.id) ||
		legal.includes.sets.includes(card.set.id) ||
		card.energyType === 'Normal' ||
		(card.regulationMark &&
			legal.includes.regulationMark.includes(card.regulationMark))
	) {
		return !(
			legal.excludes.sets.includes(card.set.id) ||
			(type === 'standard' && card.types?.includes('Fairy')) ||
			legal.excludes.cards.includes(`${card.set.id}-${localId}`)
		)
	}

	return false
}

/**
 * Check if a set is currently Legal
 */
export function setIsLegal(
	type: 'standard' | 'expanded',
	set: Set
): boolean {
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
	return ['ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'].includes(lang)
		? 'data-asia'
		: 'data'
}

/**
 * run a command on the OS
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
				console.log(`command exited with code ${code}`)
				rej(code)
				return
			}
			res(out)
		})
	})
}

const lastEditsCache: Record<string, string> = {}

export async function loadLastEdits() {
	console.log("Loading Git history as stream...")

	// Single git process: commit date + filenames
	const git = spawn("git", [
		"log",
		"--pretty=format:%cd",
		"--date=iso-strict",
		"--name-only",
		"HEAD"
	], {
		cwd: "../" // adjust path if needed
	})

	let buffer = ""
	let currentDate = ""

	git.stdout.setEncoding("utf-8")

	for await (const chunk of git.stdout) {
		buffer += chunk
		let lines = buffer.split("\n")

		// keep trailing partial line
		buffer = lines.pop() ?? ""

		for (const line of lines) {
			const trimmed = line.trim()
			if (!trimmed) continue

			if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
				// commit date line
				currentDate = trimmed
			} else if (currentDate) {
				// file path → overwrite so last commit wins
				lastEditsCache[trimmed] = currentDate
			}
		}
	}

	// process trailing buffer
	if (buffer.trim()) {
		const trimmed = buffer.trim()
		if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
			currentDate = trimmed
		} else if (currentDate) {
			lastEditsCache[trimmed] = currentDate
		}
	}

	await new Promise<void>((resolve, reject) => {
		git.on("close", (code) => {
			if (code !== 0) {
				return reject(new Error(`git log exited with code ${code}`))
			}
			resolve()
		})
	})

	console.log("done loading files", objectSize(lastEditsCache))
}

export function getLastEdit(path: string): string {
	const date = lastEditsCache[path]
	if (!date) {
		return new Date().toISOString()
	}
	return date
}

export function resolveText<T>(
	text: Languages<T> | undefined,
	lang: SupportedLanguages
): T | undefined {
	if (!text) return text as undefined
	let res: T | undefined = text[lang]
	if (typeof res === 'undefined' && !lang.includes('-')) {
		const key = Object.keys(text).find((key) => key.startsWith(lang))
		return text[key as keyof Languages<T>]
	}
	return res
}
