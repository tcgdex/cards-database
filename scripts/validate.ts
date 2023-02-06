import jsonschema from 'jsonschema'
import fs from 'fs/promises'
import path from 'path/posix'

const exists = async (path: string) => {
	try {
		await fs.stat(path)
		return true
	} catch {
		return false
	}
}

(async () => {
	const filesToValidate: Array<string> = []

	const series = (await fs.readdir('./data'))
		.filter((it) => it.endsWith('.json'))

	for (const serie of series) {
		const serieFile = `./data/${serie}`
		const serieFolder = serieFile.replace('.json', '')

		filesToValidate.push(serieFile)
		if (!(await exists(serieFolder))) {
			continue
		}

		const sets = (await fs.readdir(serieFolder))
			.filter((it) => it.endsWith('.json'))

		for (const set of sets) {
			const setFile = `${serieFolder}/${set}`
			const setFolder = setFile.replace('.json', '')

			filesToValidate.push(setFile)

			if (!(await exists(setFolder))) {
				continue
			}

			const cards = (await fs.readdir(setFolder))
				.filter((it) => it.endsWith('.json'))
				.map((it) => `${setFolder}/${it}`)

			filesToValidate.push(...cards)
		}
	}

	const errors: Record<string, Array<jsonschema.ValidationError>> = {}

	for (const file of filesToValidate) {
		const data = await require(`.${file}`)
		const schemaPath = path.resolve(file, '..', data.$schema)
		const schema = await require(schemaPath)
		const validation = jsonschema.validate(data, schema, {
			allowUnknownAttributes: true,
			required: true,
			skipAttributes: ['$schema']
		})
		const isValid = validation.valid

		// console.log(`[${isValid ? 'ok' : 'KO'}]: ${file}`)

		if (!isValid) {
			errors[file] = validation.errors
			// console.error(validation.errors)
			// process.exit(1)
		}
	}

	const filesCount = filesToValidate.length
	const errorCount = Object.keys(errors).length
	if (errorCount > 0) {
		console.error(
			errors
		)

	}

	console.log(`Validated ${filesCount - errorCount}/${filesCount} files (${((filesCount - errorCount) / filesCount * 100).toFixed(2)}%) `)

	if (errorCount > 0) {
		process.exit(1)
	}
})()
