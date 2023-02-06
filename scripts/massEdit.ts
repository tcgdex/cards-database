/**
 * Simple to use script to do massive edits on the files
 *
 * See example script at the bottom
 */

import fs from 'fs/promises'

async function exists(path: string) {
	try {
		await fs.stat(path)
		return true
	} catch {
		return false
	}
}

type FileList = Array<{
	type: 'serie' | 'set' | 'card',
	path: string,
	data: any
}>

async function prepare() {
	const files: FileList = []

	const series = (await fs.readdir('./data'))
		.filter((it) => it.endsWith('.json'))

	for (const serie of series) {
		const serieFile = `./data/${serie}`
		const serieFolder = serieFile.replace('.json', '')

		files.push({
			type: 'serie',
			path: serieFile,
			data: await require(`.${serieFile}`)
		})
		if (!(await exists(serieFolder))) {
			continue
		}

		const sets = (await fs.readdir(serieFolder))
			.filter((it) => it.endsWith('.json'))

		for (const set of sets) {
			const setFile = `${serieFolder}/${set}`
			const setFolder = setFile.replace('.json', '')

			files.push({
				type: 'set',
				path: setFile,
				data: await require(`.${setFile}`)
			})

			if (!(await exists(setFolder))) {
				continue
			}

			const cards = (await fs.readdir(setFolder))
				.filter((it) => it.endsWith('.json'))
				.map((it) => `${setFolder}/${it}`)

			for (const card of cards) {
				files.push({
					type: 'card',
					path: card,
					data: await require(`.${card}`)
				})
			}
		}
	}

	return files
}

async function save(data: FileList) {
	for (const file of data) {
		await fs.writeFile(file.path, JSON.stringify(file.data, undefined, '	'))
	}
}


(async () => {
	const files = (await prepare())
		.filter((it) => it.type === 'card')

	for (const file of files) {
		const data = file.data

		// example: change the illustrator from a string to an array
		// Write your code below
		if (typeof data.illustrator === 'string') {
			data.illustrator = [data.illustrator]
		}
	}

	await save(files)

})()
