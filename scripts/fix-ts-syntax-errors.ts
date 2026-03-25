#!/usr/bin/env bun

import { promises as fs } from "node:fs"
import path from "node:path"
import ts from "typescript"

const repoRoot = path.resolve(__dirname, "..")

const brokenFiles = [
	"data/Diamond & Pearl/Legends Awakened/136.ts",
	"data/Diamond & Pearl/Legends Awakened/137.ts",
	"data/Diamond & Pearl/Legends Awakened/138.ts",
	"data/Diamond & Pearl/Legends Awakened/139.ts",
	"data/Diamond & Pearl/Majestic Dawn/84.ts",
	"data/Diamond & Pearl/Majestic Dawn/89.ts",
	"data/Diamond & Pearl/Mysterious Treasures/116.ts",
	"data/Diamond & Pearl/Mysterious Treasures/117.ts",
	"data/EX/Holon Phantoms/91.ts",
	"data/EX/Holon Phantoms/93.ts",
	"data/EX/Legend Maker/78.ts",
	"data/EX/Legend Maker/80.ts",
	"data/EX/Power Keepers/84.ts",
	"data/EX/Power Keepers/86.ts",
	"data/EX/Sandstorm/90.ts",
	"data/EX/Sandstorm/92.ts",
	"data/Mega Evolution/Mega Evolution/113.ts",
	"data/Mega Evolution/Mega Evolution/165.ts",
	"data/Mega Evolution/Mega Evolution/183.ts",
	"data/Mega Evolution/Phantasmal Flames/086.ts",
	"data/Mega Evolution/Phantasmal Flames/117.ts",
	"data/Mega Evolution/Phantasmal Flames/124.ts",
	"data/Platinum/Platinum/119.ts",
	"data/Platinum/Platinum/120.ts",
	"data/Scarlet & Violet/Black Bolt/080.ts",
	"data/Scarlet & Violet/Black Bolt/086.ts",
	"data/Scarlet & Violet/Destined Rivals/170.ts",
	"data/Scarlet & Violet/Destined Rivals/177.ts",
	"data/Scarlet & Violet/Destined Rivals/182.ts",
	"data/Scarlet & Violet/Destined Rivals/223.ts",
	"data/Scarlet & Violet/Destined Rivals/227.ts",
	"data/Scarlet & Violet/Journey Together/149.ts",
	"data/Scarlet & Violet/Journey Together/180.ts",
	"data/Scarlet & Violet/SVP Black Star Promos/203.ts",
	"data/Scarlet & Violet/SVP Black Star Promos/204.ts",
	"data/Scarlet & Violet/White Flare/079.ts",
	"data/Scarlet & Violet/White Flare/086.ts",
	"data/Sun & Moon/Dragon Majesty/61.ts",
	"data/Sun & Moon/Unified Minds/195.ts",
	"data/Sun & Moon/Unified Minds/203.ts",
	"data/Trainer kits/DP trainer Kit (Lucario)/4.ts",
	"data/Trainer kits/DP trainer Kit (Lucario)/5.ts",
	"data/Trainer kits/DP trainer Kit (Lucario)/6.ts",
	"data/Trainer kits/DP trainer Kit (Lucario)/7.ts",
	"data/Trainer kits/EX trainer Kit 2 (Minun)/8.ts",
	"data/Trainer kits/XY trainer Kit (Latias)/30.ts",
	"data/Trainer kits/XY trainer Kit (Latias)/4.ts",
] as const

type TransformCounts = {
	patternA: number
	patternB: number
	patternC: number
	patternD: number
	patternE: number
}

const totalCounts: TransformCounts = {
	patternA: 0,
	patternB: 0,
	patternC: 0,
	patternD: 0,
	patternE: 0,
}

function countAndReplace(
	source: string,
	pattern: RegExp,
	replacement: string
): { content: string, count: number } {
	const matches = source.match(pattern)
	const count = matches?.length ?? 0
	const content = source.replace(pattern, replacement)
	return { content, count }
}

function parseDiagnostics(sourceText: string, filePath: string) {
	const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
	return sourceFile.parseDiagnostics
}

function formatDiag(diag: ts.Diagnostic) {
	if (!diag.file || diag.start === undefined) {
		return ts.flattenDiagnosticMessageText(diag.messageText, "\n")
	}

	const { line, character } = diag.file.getLineAndCharacterOfPosition(diag.start)
	const message = ts.flattenDiagnosticMessageText(diag.messageText, "\n")
	return `${line + 1}:${character + 1} ${message}`
}

for (const relativePath of brokenFiles) {
	const absolutePath = path.join(repoRoot, relativePath)
	const original = await fs.readFile(absolutePath, "utf8")
	const beforeDiags = parseDiagnostics(original, absolutePath)

	let content = original

	// Pattern A: remove stray block after attacks/abilities array closure.
	{
		const a1 = countAndReplace(content, /\n\t\],\n\t\t\}\n\t\}\],/g, "\n\t],")
		content = a1.content
		totalCounts.patternA += a1.count

		const a2 = countAndReplace(content, /\n\t\],\n\t\t\}\n\t\],/g, "\n\t],")
		content = a2.content
		totalCounts.patternA += a2.count
	}

	// Pattern B: remove lone extra closing brace before the card object end.
	{
		const b = countAndReplace(content, /\n\t\}(\n\})\nexport default card/g, "$1\nexport default card")
		content = b.content
		totalCounts.patternB += b.count

		const b2 = countAndReplace(content, /\n\t\}\n\t\}\n\}\n\nexport default card/g, "\n\t\}\n\}\n\nexport default card")
		content = b2.content
		totalCounts.patternB += b2.count

		const b3 = countAndReplace(content, /\n\t\},\n\t\}\n\}\n\nexport default card/g, "\n\t\},\n\}\n\nexport default card")
		content = b3.content
		totalCounts.patternB += b3.count
	}

	// Pattern C: quote es-mx key.
	{
		const c = countAndReplace(content, /(\t+)es-mx:/g, "$1'es-mx':")
		content = c.content
		totalCounts.patternC += c.count
	}

	// Pattern D: remove duplicate injected attack fragment in SVP 203.
	if (relativePath === "data/Scarlet & Violet/SVP Black Star Promos/203.ts") {
		const d = countAndReplace(
			content,
			/\n\t\],\n\t\t\t\}\n\t\t\},\n\t\t\{\n\t\t\tcost: \["Psychic", "Colorless","Colorless"\],[\s\S]*?\n\t\t\}\n\t\],/g,
			"\n\t],"
		)
		content = d.content
		totalCounts.patternD += d.count
	}

	// Pattern E: insert missing comma after thirdParty block before attacks.
	{
		const e = countAndReplace(content, /(\n\t\})\n(\tattacks:)/g, "$1,\n$2")
		content = e.content
		totalCounts.patternE += e.count
	}

	if (content !== original) {
		const afterDiags = parseDiagnostics(content, absolutePath)
		if (afterDiags.length > 0) {
			const rendered = afterDiags.slice(0, 8).map(formatDiag).join("\n")
			throw new Error(`Parse errors remain in ${relativePath}:\n${rendered}`)
		}
		await fs.writeFile(absolutePath, content, "utf8")
		console.log(`[OK] fixed ${relativePath}`)
	} else if (beforeDiags.length > 0) {
		// If file was broken before and no transformation was applied, fail explicitly.
		const rendered = beforeDiags.slice(0, 8).map(formatDiag).join("\n")
		throw new Error(`No transform matched for broken file ${relativePath}:\n${rendered}`)
	} else {
		console.log(`[i] unchanged ${relativePath}`)
	}
}

console.log("")
console.log("Summary")
console.log(`- files targeted: ${brokenFiles.length}`)
console.log(`- patternA replacements: ${totalCounts.patternA}`)
console.log(`- patternB replacements: ${totalCounts.patternB}`)
console.log(`- patternC replacements: ${totalCounts.patternC}`)
console.log(`- patternD replacements: ${totalCounts.patternD}`)
console.log(`- patternE replacements: ${totalCounts.patternE}`)
