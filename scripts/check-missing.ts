import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { objectGet } from '@dzeio/object-util'
import { extractFile } from './utils/ts-extract-utils'

/**
 * Example usage : `bun meta/scripts/check-missing.ts "data/*\/*\/*.ts" thirdParty.cardmarket`
 */

// Get CLI arguments
const args = process.argv.slice(2)

if (args.length < 2 || args.length > 3) {
	console.error('Usage: ts-node check-missing.ts <file-pattern> <property-path> [output-file]')
	console.error('Example: ts-node check-missing.ts "*.ts" "name.en"')
	console.error('Example: ts-node check-missing.ts "*.ts" "name.en" "missing-report.txt"')
	process.exit(1)
}

const [filePattern, propertyPath, outputFile] = args

const outputLines: string[] = []

function log(message: string) {
	console.log(message)
	if (outputFile) {
		outputLines.push(message)
	}
}

try {
	// Find all matching files
	const files = await glob(filePattern, {
		cwd: process.cwd(),
		absolute: true
	})

	if (files.length === 0) {
		log(`No files found matching pattern: ${filePattern}`)
		process.exit(0)
	}

	log(`Checking ${files.length} files for property: ${propertyPath}`)
	log('---')

	const missingFiles: string[] = []
	const errorFiles: string[] = []

	for (const filePath of files) {
		const relativePath = path.relative(process.cwd(), filePath)

		// Extract the default export
		const exportedObject = extractFile(filePath)

		if (!exportedObject) {
			log(`❌ ${relativePath} - Could not extract default export`)
			errorFiles.push(relativePath)
			continue
		}

		// Use objectGet to check if the property exists and has a value
		const value = objectGet(exportedObject, propertyPath)

		if (value === undefined || value === null || value === '') {
			log(`❌ ${relativePath} - Missing: ${propertyPath}`)
			missingFiles.push(relativePath)
		} else {
			log(`✅ ${relativePath} - Has: ${propertyPath} = "${value}"`)
		}
	}

	// Summary
	log('\n--- Summary ---')
	log(`Total files:\t  ${files.length}`)
	log(`Missing property: ${(missingFiles.length / files.length * 100).toFixed(2)}% (${missingFiles.length})`)
	log(`Parse errors:\t  ${(errorFiles.length / files.length * 100).toFixed(2)}% (${errorFiles.length})`)

	const valid = files.length - missingFiles.length - errorFiles.length
	log(`Valid:\t\t  ${(valid / files.length * 100).toFixed(2)}% (${valid})`)

	// Write output file if specified
	if (outputFile) {
		try {
			fs.writeFileSync(outputFile, outputLines.join('\n'))
			console.log(`\n📝 Results written to: ${outputFile}`)
		} catch (error) {
			console.error(`Error writing to ${outputFile}:`, error.message)
		}
	}

	if (missingFiles.length > 0 || errorFiles.length > 0) {
		process.exit(1)
	}

} catch (error) {
	console.error('Error:', error.message)
	process.exit(1)
}
