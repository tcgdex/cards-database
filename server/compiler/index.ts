/* eslint-disable max-statements */
import { promises as fs } from "fs"
import { SupportedLanguages } from "../../interfaces"
import { FileFunction } from "./compilerInterfaces"
import { fetchRemoteFile, loadLastEdits } from "./utils/util"

// Languages to process
const LANGS: Array<SupportedLanguages> = [
	"en", "fr", "es", "es-mx", "it", "pt", "pt-br", "pt-pt",
	"de", "nl", "pl", "ru",
	"ja", "ko", "zh-tw", "id", "th", "zh-cn"
]

const DIST_FOLDER = "./generated"

// Simple concurrency limiter (no deps)
function pLimit(limit: number) {
	const queue: (() => Promise<void>)[] = []
	let activeCount = 0

	const next = () => {
		activeCount--
		if (queue.length > 0) {
			const fn = queue.shift()
			fn && fn()
		}
	}

	return <T>(fn: () => Promise<T>): Promise<T> =>
		new Promise<T>((resolve, reject) => {
			const run = () => {
				activeCount++
				fn().then(resolve, reject).finally(next)
			}

			if (activeCount < limit) {
				run()
			} else {
				queue.push(run)
			}
		})
}

; (async () => {
	const paths = (await fs.readdir("./compiler/endpoints"))
		.filter((p) => p.endsWith(".ts"))

	console.log("1. Loading remote sources")
	await fetchRemoteFile("https://assets.tcgdex.net/datas.json")

	console.log("\n2. Loading informations from GIT")
	await loadLastEdits()

	console.log("\n3. Compiling Files")

	// Cache imports once
	const endpointFns: Record<string, FileFunction> = {}
	await Promise.all(
		paths.map(async (file) => {
			endpointFns[file] = (await import(`./endpoints/${file}`)).default as FileFunction
		})
	)

	// Prepare folders once per language
	await Promise.all(
		LANGS.map((lang) => fs.mkdir(`${DIST_FOLDER}/${lang}`, { recursive: true }))
	)

	const totalTasks = LANGS.length * paths.length
	let completed = 0

	// bump concurrency higher — 32 is safe, tweak if needed
	const limit = pLimit(32)

	const tasks = LANGS.flatMap((lang) =>
		paths.map((file) =>
			limit(async () => {
				const fn = endpointFns[file]
				const item = await fn(lang)

				await fs.writeFile(
					`${DIST_FOLDER}/${lang}/${file.replace(".ts", "")}.json`,
					JSON.stringify(item)
				)

				completed++
				if (completed % 10 === 0 || completed === totalTasks) {
					console.log(
						`${((completed / totalTasks) * 100).toFixed(2).padStart(5, "0")}%`,
						`Compiled ${completed}/${totalTasks}`
					)
				}
			})
		)
	)

	await Promise.all(tasks)

	console.log("\n4. Copying static files to public folder")
	const defFiles = await fs.readdir("../meta/definitions")
	await Promise.all(
		defFiles.map((file) =>
			fs.copyFile(`../meta/definitions/${file}`, `./public/v2/${file}`)
		)
	)

	console.log("\n✅ Build complete")
})()
